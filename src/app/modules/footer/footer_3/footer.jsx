import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#133e87] text-white py-10">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & About Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-orange-500">YourLogo</h1>
            <p className="text-sm">
              We aim to bring the best digital experiences. Explore our site for more insights, or contact us for further inquiries.
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-sm hover:text-orange-500">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media & Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">Contact & Social</h3>
            <p className="text-sm">Email: support@example.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="text-white hover:text-orange-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-orange-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-orange-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-orange-500"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
