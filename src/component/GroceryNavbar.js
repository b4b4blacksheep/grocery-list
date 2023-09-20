import React from 'react';

function Navbar() {
  return (
    <div style={{ backgroundColor: '#F6F8FA' }} className="py-3 text-dark">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <a className="text-base font-bold mx-3">Grocery List 🛒</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
