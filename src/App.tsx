import { BrowserRouter, Route, Routes } from "react-router-dom"
import CancellationPage from "./pages/CancellationPage"
import HomePage from "./pages/HomePage"
import PrivacyPage from "./pages/PrivacyPage"
import SuccessPage from "./pages/SuccessPage"
import TermsPage from "./pages/TermsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancellationPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
