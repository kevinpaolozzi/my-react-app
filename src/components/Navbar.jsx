import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          My React App
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
