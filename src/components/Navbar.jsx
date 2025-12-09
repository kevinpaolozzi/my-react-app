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
            className="dark:text-gray-400 text-gray-500 hover:dark:text-white hover:text-gray-900 transition-colors p-1"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              // Sun icon for light mode
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
