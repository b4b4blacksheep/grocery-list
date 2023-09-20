import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#F6F8FA' }} className="py-3 fixed bottom-0 w-full text-dark hidden md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h6 className="text-xs mx-2">
            <span>Powered by ChatGPT v4</span>
            <span> | </span>
            <span>September 2023</span>
          </h6>
        </div>
        <div>
          <h6 className="text-base font-bold mx-3">Grocery List 🛒</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
