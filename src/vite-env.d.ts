/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_CUSTOM_GPT_URL: string;
  readonly VITE_CHROME_LISTING_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
