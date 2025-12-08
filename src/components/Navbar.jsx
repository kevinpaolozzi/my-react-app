import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Selected works' },
    { path: '/branding', label: 'Branding' },
    { path: '/ui-ux', label: 'UI/UX' },
    { path: '/about', label: 'About' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#161616]/90 bg-[#e0e0e0]/90 backdrop-blur-md py-4 shadow-sm'
          : 'py-8'
      } px-6 md:px-12`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Link
          to="/"
          className={`font-medium dark:text-white text-gray-900 transition-all duration-300 ${
            scrolled ? 'text-lg' : 'text-xl'
          }`}
        >
          Kevin Paolozzi
        </Link>

        <div className="flex flex-wrap items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                location.pathname === item.path
                  ? 'dark:text-white text-gray-900'
                  : 'dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="text-sm dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-gray-900 transition-colors"
          >
            {isDark ? 'Light theme' : 'Dark theme'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
