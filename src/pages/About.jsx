function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          About
        </h1>
        <p className="text-gray-600 mb-4">
          This is a test React application built with:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React 19</li>
          <li>Vite</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  )
}

export default About
