import React, { useEffect } from "react";
import {
  FaClipboardList,
  FaSearchDollar,
  FaFileAlt,
  FaPaperPlane,
  FaHandHoldingUsd,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: <FaClipboardList className="w-8 h-8 text-blue-600" />,
      title: "Book a Free Consultation",
      description: "We understand your loan requirement and check eligibility.",
    },
    {
      icon: <FaSearchDollar className="w-8 h-8 text-green-600" />,
      title: "Choose the Right Loan Scheme",
      description:
        "We recommend the most suitable scheme for your need (PMEGP, MUDRA, MSME, etc.).",
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-purple-600" />,
      title: "Documentation Preparation",
      description:
        "We prepare your project report, business plan, and financial statements.",
    },
    {
      icon: <FaPaperPlane className="w-8 h-8 text-orange-600" />,
      title: "Bank Submission & Follow-Up",
      description:
        "We assist in online filing and coordinate with the bank until approval.",
    },
    {
      icon: <FaHandHoldingUsd className="w-8 h-8 text-red-600" />,
      title: "Loan Sanction & Disbursement",
      description:
        "We ensure you get the funds in your account without unnecessary delays.",
    },
  ];

  return (
    <section className="pb-10 pt-10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950">
      {/* Decorative blur backgrounds */}

      <div className="container mx-auto px-6 relative">
        <header className="text-center pt-5 mb-14" data-aos="fade-down">
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-[#ffffff]">
            How It <span className="text-[#07bf69]">Works</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300 md:text-lg ">
            Our simple 5-step process to get your loan approved quickly and
            efficiently.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center
             transition-all duration-5000 ease-in-out transform  
             hover:shadow-2xl "
            >
              <div className="mb-5 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full transition-transform duration-500 ease-in-out group-hover:rotate-6">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="zoom-in">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8haoOxC0iM-4by9KDP65jwzFfRj-1DKh70Rt2xbbQjmq1CA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden w-40 h-12 px-4 bg-[#25975e6e] text-white border-2 border-white rounded-md text-lg font-bold cursor-pointer group flex items-center justify-center mx-auto"
          >
            {/* Main text with icon */}
            <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
              Get Started
              
            </span>

            {/* Expanding animated background layers */}
            <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-200 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-500 duration-1000"></span>
            <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-700 duration-700"></span>
            <span className="absolute w-48 h-48 -top-20 -left-4 bg-green-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-1000 duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
