import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NoticePage from './pages/notice'
import DownloadPage from './pages/download'

function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 border-b border-blue-200/80 bg-[#0A1F44]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2B6FE8] to-[#1649B0] text-sm font-bold text-white shadow-md">
              SM
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Shree Mahendra</p>
              <p className="text-xs text-blue-100">Secondary School</p>
            </div>
          </Link>

          <div className="hidden gap-6 md:flex">
            <Link to="/" className="text-sm font-medium text-blue-100 transition hover:text-white">
              Notice
            </Link>
            <Link to="/download" className="text-sm font-medium text-blue-100 transition hover:text-white">
              Download
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<NoticePage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App