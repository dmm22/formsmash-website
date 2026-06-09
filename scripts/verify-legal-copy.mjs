import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")

const entityMap = {
  "&ldquo;": "\u201C",
  "&rdquo;": "\u201D",
  "&apos;": "'",
  "&amp;": "&",
  "&nbsp;": " ",
}

function decodeEntities(text) {
  let out = text
  for (const [entity, char] of Object.entries(entityMap)) {
    out = out.split(entity).join(char)
  }
  return out
}

function normalize(text) {
  return decodeEntities(text)
    .replace(/\u2019/g, "'")
    .replace(/\u2018/g, "'")
    .replace(/[\u201C\u201D]/g, (m) => (m === "\u201C" ? "\u201C" : "\u201D"))
    .replace(/\s+/g, " ")
    .trim()
}

function extractHtmlMainText(html) {
  const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/i)
  if (!mainMatch) {
    throw new Error("No <main> in HTML source")
  }
  let text = mainMatch[1]
  text = text.replace(/<script[\s\S]*?<\/script>/gi, "")
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "")
  text = text.replace(/<[^>]+>/g, " ")
  return normalize(text)
}

function extractTsxMainText(tsx) {
  let body = tsx
  body = body.replace(/^[\s\S]*?return \(\s*<LegalPageLayout[\s\S]*?>\s*/m, "")
  body = body.replace(/\s*<\/LegalPageLayout>\s*\)\s*\}\s*$/m, "")
  body = body.replace(/className=\{[^}]+\}/g, "")
  body = body.replace(/className="[^"]*"/g, "")
  body = body.replace(/<Link[^>]*>/g, "")
  body = body.replace(/<\/Link>/g, "")
  body = body.replace(/\{" "\}/g, " ")
  body = body.replace(/<[^>]+>/g, " ")
  return normalize(body)
}

function diffWords(source, impl) {
  const sourceWords = source.split(" ")
  const implWords = impl.split(" ")
  const max = Math.max(sourceWords.length, implWords.length)
  const mismatches = []

  for (let i = 0; i < max; i++) {
    if (sourceWords[i] !== implWords[i]) {
      mismatches.push({
        index: i,
        source: sourceWords.slice(Math.max(0, i - 3), i + 8).join(" "),
        impl: implWords.slice(Math.max(0, i - 3), i + 8).join(" "),
      })
      if (mismatches.length >= 5) {
        break
      }
    }
  }

  return mismatches
}

function verify(name, sourcePath, tsxPath) {
  const sourceHtml = readFileSync(join(root, sourcePath), "utf8")
  const tsx = readFileSync(join(root, tsxPath), "utf8")
  const sourceText = extractHtmlMainText(sourceHtml)
  const implText = extractTsxMainText(tsx)

  console.log(`\n=== ${name} ===`)
  console.log(`Source length: ${sourceText.length} chars`)
  console.log(`Impl length:   ${implText.length} chars`)

  if (sourceText === implText) {
    console.log("PASS: main content matches source verbatim (normalized)")
    return true
  }

  console.log("FAIL: text differs")
  const mismatches = diffWords(sourceText, implText)
  for (const m of mismatches) {
    console.log(`\nFirst divergence near word #${m.index}:`)
    console.log(`  SOURCE: ...${m.source}...`)
    console.log(`  IMPL:   ...${m.impl}...`)
  }

  if (sourceText.length !== implText.length) {
    console.log(`\nLength delta: ${implText.length - sourceText.length} chars`)
  }

  return false
}

const privacyOk = verify(
  "Privacy Policy",
  "scripts/legal-source/privacy-policy.source.html",
  "src/pages/PrivacyPage.tsx",
)
const termsOk = verify(
  "Terms of Service",
  "scripts/legal-source/terms-of-service.source.html",
  "src/pages/TermsPage.tsx",
)

process.exit(privacyOk && termsOk ? 0 : 1)
