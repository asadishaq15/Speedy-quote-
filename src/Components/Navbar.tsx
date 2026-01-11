// src/components/Navbar.tsx
import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar: React.FC = () => {
  return (
<nav className="bg-white shadow-md h-20 flex items-center">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
    <img
  src={Logo}
  alt="Citizens Disability Logo"
  className="h-24 w-auto"
 />

    </div>
  </div>
</nav>

  );
};

export default Navbar;