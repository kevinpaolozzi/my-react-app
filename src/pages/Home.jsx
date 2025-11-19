import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome Home
        </h1>
        <p className="text-gray-600 mb-6">
          This is a sample React app with Vite, Tailwind CSS, and React Router.
        </p>
        <div className="text-center">
          <p className="text-lg mb-4">Count: <span className="font-bold text-blue-600">{count}</span></p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
