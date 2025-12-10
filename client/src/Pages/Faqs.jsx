import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Does Loan Guru guarantee loan approval?",
    answer:
      "No. We provide expert consulting & documentation support to improve your chances, but final approval depends on the bank.",
  },
  {
    question: "Are your fees refundable?",
    answer:
      "No. Our service fee is non-refundable, but our 5% success fee is only charged after the loan is sanctioned.",
  },
  {
    question: "How long does the process take?",
    answer: "Depending on the loan type and bank, it may take 15-45 days.",
  },
  {
    question: "Can you help with loans anywhere in India?",
    answer: "Yes, our services are available across India.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // initialize AOS
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-slate-950 via-slate-900 to-violet-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-white"
          data-aos="fade-up"
        >
          FAQ<span className="text-[#07bf69]">s</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger animation
              className="border-2 border-gray-500  rounded-xl shadow-sm bg-slate-900/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-gray-200 hover:bg-slate-800 rounded-xl transition"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
