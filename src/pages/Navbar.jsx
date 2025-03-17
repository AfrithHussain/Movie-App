import { useState } from "react";
import { Menu, X } from "react-feather";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
        <h1 className="text-3xl font-bold">Moviezz App</h1>
        
        <div className="hidden md:flex gap-10 text-lg">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About Us</a>
          <a href="#" className="hover:text-gray-300 transition">Contact Us</a>
        </div>
        
        <button className="hidden md:block border border-gray-400 px-5 py-2 rounded hover:bg-gray-700 transition">
          Sign Up
        </button>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-4 border-t border-gray-700">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About Us</a>
          <a href="#" className="hover:text-gray-300 transition">Contact Us</a>
          <button className="border border-gray-400 px-5 py-2 rounded hover:bg-gray-700 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );    
}

export default Navbar;
