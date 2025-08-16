import React from 'react'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike Logo"
              className="h-8"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 font-medium text-gray-800">
            <li><a href="#" className="hover:text-gray-500">Menu</a></li>
            <li><a href="#" className="hover:text-gray-500">Location</a></li>
            <li><a href="#" className="hover:text-gray-500">About</a></li>
            <li><a href="#" className="hover:text-gray-500">Contact</a></li>
          </ul>

          {/* Login Button */}
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Login
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mt-20 p-6">
        <h2 className="text-2xl font-bold">Welcome to my website!</h2>
        <p className="mt-2 text-gray-700">
          This is some sample content below the navbar.
        </p>
      </div>
    </>
  );
}

export default App