import React, { useState } from 'react';
import SearchBar from './search';
import { GrCart } from 'react-icons/gr';
import { FaRegUser } from 'react-icons/fa6';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdComputer } from 'react-icons/md';
import { PiHeadphonesLight } from 'react-icons/pi';
import { BsSmartwatch } from 'react-icons/bs';
import { IoCameraSharp } from 'react-icons/io5';
import { FaGamepad } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const usePathname = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  React.useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', updatePathname);
    return () => window.removeEventListener('popstate', updatePathname);
  }, []);

  return pathname;
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
  ];

  const categoryItems = [
    { href: '/phones', label: 'Phones', Icon: IoPhonePortraitOutline },
    { href: '/computers', label: 'Computers', Icon: MdComputer },
    { href: '/smart-watches', label: 'Smart Watches', Icon: BsSmartwatch },
    { href: '/cameras', label: 'Cameras', Icon: IoCameraSharp },
    { href: '/headphones', label: 'Headphones', Icon: PiHeadphonesLight },
    { href: '/gaming', label: 'Gaming', Icon: FaGamepad },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="w-full relative">
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <span className="text-2xl font-bold mb-2 cursor-pointer">▼iperS</span>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <SearchBar isMobile={false} />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-11">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-all ${
                  isActivePath(item.href)
                    ? 'text-[#56B280] font-bold'
                    : 'text-gray-700 hover:text-[#56B280] hover:font-bold'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center space-x-6">
              <a
                href="/cart"
                className={`p-1 hover:text-[#56B280] relative ${
                  isActivePath('/cart') ? 'text-[#56B280] font-bold' : 'text-gray-700'
                }`}
              >
                <GrCart className="w-6 h-6" />
                <span className="absolute bottom-4 left-4 text-xs text-white bg-[#56B280] rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              </a>
              <a
                href="/profile"
                className={`p-1 hover:text-[#56B280] ${
                  isActivePath('/profile') ? 'text-[#56B280] font-bold' : 'text-gray-700'
                }`}
              >
                <FaRegUser className="w-6 h-6" />
              </a>
            </div>
          </nav>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href="/cart"
              className={`p-1 hover:text-[#56B280] relative ${
                isActivePath('/cart') ? 'text-[#56B280] font-bold' : 'text-gray-700'
              }`}
            >
              <GrCart className="w-6 h-6" />
              <span className="absolute bottom-4 left-4 text-xs text-white bg-[#56B280] rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            </a>
            <a
              href="/profile"
              className={`p-1 hover:text-[#56B280] ${
                isActivePath('/profile') ? 'text-[#56B280] font-bold' : 'text-gray-700'
              }`}
            >
              <FaRegUser className="w-6 h-6" />
            </a>
            <button onClick={toggleMobileMenu} className="p-1">
              {isMobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden">
          <SearchBar isMobile={true} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 border-b shadow-lg">
          <div className="divide-y">
            {/* Menu Items */}
            <div className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block py-2 transition-all ${
                    isActivePath(item.href)
                      ? 'text-[#56B280] font-bold'
                      : 'text-gray-700 hover:text-[#56B280] hover:font-bold'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Category Navigation */}
            <div className="px-4 py-2 space-y-2 bg-gray-50 ">
              <p className="text-sm font-medium text-gray-500 py-2">Categories</p>
              {categoryItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center space-x-3 py-2 transition-all ${
                    isActivePath(item.href)
                      ? 'text-[#56B280] font-bold'
                      : 'text-gray-700 hover:text-[#56B280] hover:font-bold'
                  }`}
                >
                  <item.Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Category Navigation */}
      <div className="bg-[#56B280] text-white overflow-x-auto hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-12">
            {categoryItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center justify-center space-x-2 transition-all px-8 py-3 whitespace-nowrap ${
                    isActivePath(item.href)
                      ? 'text-gray-900 font-bold'
                      : 'hover:text-gray-900 hover:font-bold'
                  }`}
                >
                  <item.Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
                {index < categoryItems.length - 1 && <hr className="h-6 w-px bg-[#CFCFCF]" />}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
