import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import { useState } from "react"

export default function App() {
  const [navColorMode, setNavColorMode] = useState<"light" | "dark">("light")

  return (
    <Layout navColorMode={navColorMode}>
      <Routes>
        <Route path="/" element={<HomePage setNavColorMode={setNavColorMode} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}
