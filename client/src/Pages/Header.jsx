import React, { useState, useEffect } from "react";
import { X, ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
// 1. Import the Enquiry Form (Ensure the file path is correct)
import EnquiryForm from "./Enquiryform"; 

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // 2. New State for Enquiry Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Who We Are", path: "#whoweare" },
    { name: "Why SMEs", path: "#whysmes" },
    { name: "Contact", path: "#contact" },
  ];

  // Navigation Logic
  const navigateTo = (e, path, name) => {
    e.preventDefault();
    setActiveLink(name);
    setIsOffcanvasOpen(false);
    setOpenMobileDropdown(null);
    const element = document.querySelector(path);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", path);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white shadow-md ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src={Logo} 
              alt="logo" 
              className={`object-contain transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavLinks.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  onClick={(e) => !item.hasDropdown && navigateTo(e, item.path, item.name)}
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-300 ${
                    activeLink === item.name 
                      ? "text-[#05075a]" 
                      : "text-gray-700 hover:text-[#05075a]"
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className="text-gray-500 group-hover:rotate-180 transition-transform duration-300" 
                    />
                  )}
                </a>

                {/* Animated Underline */}
                {activeLink === item.name && !item.hasDropdown && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#05075a]"
                  />
                )}

                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {item.dropdownContent.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={subItem.path}
                          onClick={(e) => navigateTo(e, subItem.path, subItem.name)}
                          className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#05075a] transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 3. Desktop CTA Button - Modified to Open Modal */}
          <div className="hidden lg:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#05075a] text-white text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOffcanvasOpen(true)} 
            className="lg:hidden p-2 text-gray-700 hover:text-[#05075a] transition-colors duration-300"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOffcanvasOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOffcanvasOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-[60] flex flex-col lg:hidden"
            >
              {/* Mobile Header */}
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="text-lg font-bold text-gray-800">Menu</span>
                <button 
                  onClick={() => setIsOffcanvasOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
                {mainNavLinks.map((item, i) => (
                  <div key={item.name} className="border-b border-gray-50 pb-2 last:border-0">
                    <div 
                      className="flex items-center justify-between"
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name);
                        } else {
                          navigateTo(e, item.path, item.name);
                        }
                      }}
                    >
                      <span className={`text-base font-medium ${activeLink === item.name ? "text-[#05075a]" : "text-gray-700"}`}>
                        {item.name}
                      </span>
                      {item.hasDropdown && (
                        <ChevronDown 
                          size={16} 
                          className={`text-gray-400 transition-transform duration-300 ${openMobileDropdown === item.name ? "rotate-180" : ""}`} 
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.hasDropdown && openMobileDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-3 space-y-3 border-l-2 border-gray-100 ml-1 mt-2">
                            {item.dropdownContent.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                onClick={(e) => navigateTo(e, subItem.path, subItem.name)}
                                className="block text-sm text-gray-500 hover:text-[#05075a]"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* 4. Mobile Footer CTA - Modified to Open Modal */}
              <div className="p-6 bg-gray-50">
                <button
                  onClick={() => {
                    setIsOffcanvasOpen(false); // Close menu first
                    setIsModalOpen(true); // Open Modal
                  }}
                  className="flex items-center justify-center w-full py-3 bg-[#05075a] text-white rounded-lg font-semibold shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 5. Render Enquiry Form Conditionaly */}
      {isModalOpen && <EnquiryForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;