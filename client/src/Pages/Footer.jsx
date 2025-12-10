import React from "react";
import Logo from "../assets/img/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import FooterBg from "../assets/img/footerimage.jpeg"; // Your light bg image

export default function Footer() {
  return (
    <footer
      className="relative pt-10 px-6 md:px-16 lg:px-24 xl:px-32 w-full overflow-hidden"
      id="contact"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white/30 pb-6">
        {/* Logo & Description */}
        <div className="md:max-w-96">
          <div className="flex items-center space-x-4 justify-start">
            <img src={Logo} alt="logo" className="w-20 object-contain" />
          </div>
          <p className="mt-6 text-sm text-white">
            We simplify loan applications with expert, bank-ready documentation
            for PMEGP, MUDRA, MSME, and Business Loans. Trusted for
            transparency, integrity, and results.
          </p>

          <div className="mt-2 flex space-x-4">
            <a
              href="https://www.facebook.com/share/1a6WLYmDTD/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/loanguru2025/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links & Contact */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-green-400">Links</h2>
            <ul className="text-sm space-y-2 text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-green-400">
              Working Hours:
            </h2>
            <p className="text-white">
              Monday - Saturday: 10:00 AM - 7:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
          {/* Address Section */}
          <div className="max-w-sm md:max-w-xs lg:max-w-md leading-relaxed">
            <h2 className="font-semibold mb-5 text-green-400">Get in touch</h2>
            <div className="text-sm space-y-2 text-white">
              <p>+918110976021</p>
              <p>info@loanguru4u.com</p>
              <p className="break-words">
                LOKESH TOWER Old Door No.110/2, then Door No.18, Now New Door
                No.37, Kodambakkam High road, Nungambakkam, Chennai - 600 034,
                Tamilnadu, India
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="relative z-10 py-4 text-center text-sm md:text-base text-white/80">
        © <span id="year"></span>{" "}
        <a
          href="https://bmtechx.in/"
          target="_blank"
          className="hover:underline text-[#07bf69]"
        >
          BMTechx.in
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
}
