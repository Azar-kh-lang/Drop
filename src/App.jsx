import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-violet-700 px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-violet-400">🛒 DrobCart</h1>
        <div className="space-x-4 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Products</a>
          <a href="#" className="hover:text-white">Login</a>
        </div>
      </nav>

      {/* Main Welcome Section */}
      <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-white">Welcome to <span className="text-violet-500">DrobCart</span></h2>
        <p className="mt-4 text-lg text-gray-300 max-w-md">Your free dropshipping solution. Start selling today without coding or inventory.</p>
        <button className="mt-8 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-xl transition">
          Get Started
        </button>
      </main>
    </div>
  );
}

export default App;

