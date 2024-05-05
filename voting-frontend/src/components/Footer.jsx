import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black bg-opacity-60 text-white shadow-lg"
            style={{
              boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.3)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Blockchain Based Voting System. All rights reserved.
          </p>
          {/* <p className="text-sm font-light mt-2">
            Contact us at <a href="mailto:contact@bbvs.com" className="underline hover:text-blue-300">contact@bbvs.com</a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
