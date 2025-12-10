import React, { useEffect } from "react";
import { FaHandshake, FaFileAlt, FaRupeeSign } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const formatINR = (num) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(num);

const services = [
  {
    title: "Loan Consulting",
    bullets: [
      "Personalized guidance for right loan scheme",
      "Advice on eligibility & benefits",
      "Step-by-step loan planning",
    ],
    icon: <FaHandshake />,
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    title: "Documentation Preparation",
    bullets: [
      "Detailed project reports",
      "Business plans",
      "Financial statements",
      "MSME/Udyam registration",
    ],
    icon: <FaFileAlt />,
    bgColor: "bg-gradient-to-br from-green-600 to-green-800",
  },
  {
    title: "Bank Coordination",
    bullets: [
      "Application filing assistance",
      "Direct coordination with banks & agencies",
      "Follow-up until sanction & disbursement",
    ],
    icon: <FaRupeeSign />,
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
  },
  {
    title: "Service Charges",
    bullets: [
      `5–10 lakh loans: ${formatINR(8999)}`,
      `10–25 lakh loans: ${formatINR(14999)}`,
      "Success fee after loan sanction: 5%",
      "Non-refundable documentation fee",
    ],
    icon: <FaRupeeSign />,
    bgColor: "bg-gradient-to-br from-white to-indigo-50",
    lightText: true, // renamed for clarity
  },
];

const Card = ({ title, bullets, icon, bgColor, lightText = false }) => (
  <div
    className={`shadow-lg rounded-2xl p-6 transition-all duration-300 border ${bgColor} 
                hover:shadow-xl hover:-translate-y-0.5 max-w-sm w-full mx-auto`}
    role="region"
  >
    <div className="flex items-center gap-4 mb-4">
      <div
        className={`p-3 rounded-full text-2xl ${
          lightText ? "bg-indigo-100 text-indigo-700" : "bg-white/20 text-white"
        }`}
      >
        {icon}
      </div>
      <h3
        className={`text-xl font-semibold ${
          lightText ? "text-indigo-900" : "text-white"
        }`}
      >
        {title}
      </h3>
    </div>

    <ul
      className={`space-y-2 pl-14 ${
        lightText ? "text-slate-700" : "text-white/90"
      }`}
    >
      {bullets.map((b, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden="true" className="mt-1">
            •
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="services"
      className="w-full py-20 px-6 relative overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-violet-950"
    >
      {/* Heading */}
      <header className="text-center mb-14" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Our <span className="text-[#07bf69]">Services</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300 md:text-lg">
          We provide end-to-end assistance in securing business loans, from
          consulting to disbursement.
        </p>
      </header>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {services.map((s, index) => (
          <div
            key={s.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="w-full sm:w-[45%] max-w-md"
          >
            <Card {...s} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
