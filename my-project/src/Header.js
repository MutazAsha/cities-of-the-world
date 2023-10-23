import React from 'react';
import './App.css';
function Header() {
  return (
<header className="bg-black text-white p-4">
<div className="container mx-auto flex justify-between items-center">
  <h1 className="text-3xl font-bold">Cities Of The World</h1>
  <nav>
    <ul className="flex space-x-4">
      <li><a href="#" className="hover:text-yellow-300">Home</a></li>
      <li><a href="#" className="hover:text-yellow-300">About</a></li>
      <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
    </ul>
  </nav>
</div>
</header>

  );
}

export default Header;
