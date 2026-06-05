import React from 'react';
import { Link } from 'react-scroll';
import { schoolConfig } from '../../data/config';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', to: 'about' },
    { name: 'Academics', to: 'academics' },
    { name: 'Admissions', to: 'admissions' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Logo & Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">EA</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{schoolConfig.name}</h2>
                <p className="text-sm text-gray-400">{schoolConfig.motto.substring(0, 40)}...</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {schoolConfig.description.substring(0, 150)}...
            </p>
            <p className="text-gray-400 text-sm">
              📍 {schoolConfig.address}
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-secondary cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-400">📞 {schoolConfig.phone}</p>
              <p className="text-gray-400">✉️ {schoolConfig.email}</p>
            </div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {Object.entries(schoolConfig.socials).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors"
                >
                  {platform === 'facebook' && '📘'}
                  {platform === 'instagram' && '📷'}
                  {platform === 'youtube' && '▶️'}
                  {platform === 'twitter' && '🐦'}
                  {platform === 'linkedin' && '🔗'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {schoolConfig.name}. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ for education excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;