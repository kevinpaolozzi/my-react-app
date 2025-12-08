import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Branding from './pages/Branding'
import UiUx from './pages/UiUx'
import About from './pages/About'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-[#161616] bg-[#e0e0e0] transition-colors">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/ui-ux" element={<UiUx />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
