import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#133e87] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Footer Logo */}
          <div className="flex items-center mb-6 sm:mb-0">
            <h1 className="text-3xl font-semibold text-orange-500">YourLogo</h1>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex space-x-6 mb-6 sm:mb-0">
            <a href="#" className="text-sm hover:text-orange-500">Home</a>
            <a href="#" className="text-sm hover:text-orange-500">About</a>
            <a href="#" className="text-sm hover:text-orange-500">Services</a>
            <a href="#" className="text-sm hover:text-orange-500">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
