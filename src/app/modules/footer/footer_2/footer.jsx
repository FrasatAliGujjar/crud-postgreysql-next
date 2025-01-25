"use client"

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#133e87] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading eCommerce platform offering a wide range of products. Our mission is to provide the best online shopping experience for our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-bold">Address:</span> 123 Main Street, City, Country
              </li>
              <li className="text-gray-400">
                <span className="font-bold">Phone:</span> +123 456 7890
              </li>
              <li className="text-gray-400">
                <span className="font-bold">Email:</span> support@shop.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopLogo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
