import { FaTwitter, FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-[2fr_1fr_1fr] text-center md:text-left">
        <div>
          <a href="/">
            <span className="text-2xl font-bold mb-2 cursor-pointer">▼iperS</span>
          </a>
          <p className="text-base mb-7 mt-4">
            We are a technology shopping platform located in Vietnam, <br />
            which provides you with top-notch technology
          </p>
          <div className="hidden md:flex space-x-4 mb-2 mt-8">
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaTiktok />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Services</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Bonus program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Gift cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Credit and payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Service contracts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Non-cash account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Payment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Assistance to the Buyer</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Find an order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Terms of delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Exchange and return of goods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Guarantee
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Frequently asked questions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CFCFCF]">
                Terms of use of the site
              </a>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mb-2 mt-8 md:hidden">
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaTiktok />
            </a>
            <a href="#" className="text-white text-3xl hover:text-[#CFCFCF]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>▼iperS © Copyright 2024 | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
