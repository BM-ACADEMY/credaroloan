import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTenure, setLoanTenure] = useState(20 * 12);
  const [tenureType, setTenureType] = useState("Yr");

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const formatINR = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;
    const n = loanTenure;

    if (n <= 0) return;

    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiCalc * n;
    const interest = totalPay - P;

    setEmi(Math.round(emiCalc));
    setTotalPayment(Math.round(totalPay));
    setTotalInterest(Math.round(interest));
  }, [loanAmount, interestRate, loanTenure]);

  const data = {
    labels: ["Principal Loan Amount", "Total Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#22c55e", "#f97316"],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "#fff",
        // Reduced font size to fit the smaller chart
        font: { weight: "bold", size: 12 }, 
        formatter: (value, ctx) => {
          let sum = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          let percentage = ((value / sum) * 100).toFixed(1) + "%";
          return percentage;
        },
      },
    },
    cutout: "65%",
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 min-h-screen flex justify-center items-start p-6 py-12">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-5xl w-full space-y-8">
        
        {/* Loan Amount */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">
            Equated Monthly Installment (EMI)
          </label>
          <div className="flex pt-6 gap-4 items-center">
            <input
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="text-gray-500">INR</span>
          </div>
          <input
            type="range"
            min="0"
            max="30000000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 rounded-full accent-orange-500 mt-2"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Interest Rate</label>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="border border-gray-300 rounded-lg px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <span className="text-gray-500">%</span>
          </div>
          <input
            type="range"
            min="5"
            max="25"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 rounded-full accent-orange-500 mt-2"
          />
        </div>

        {/* Loan Tenure */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-700">Loan Tenure</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={
                tenureType === "Yr"
                  ? Math.floor(loanTenure / 12)
                  : loanTenure
              }
              onChange={(e) =>
                setLoanTenure(
                  tenureType === "Yr"
                    ? Number(e.target.value) * 12
                    : Number(e.target.value)
                )
              }
              className="border border-gray-300 rounded-lg px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="flex border rounded-lg overflow-hidden">
              <button
                className={`px-4 py-1 ${
                  tenureType === "Yr"
                    ? "bg-[#07bf69] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setTenureType("Yr")}
              >
                Yr
              </button>
              <button
                className={`px-4 py-1 ${
                  tenureType === "Mo"
                    ? "bg-[#07bf69] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setTenureType("Mo")}
              >
                Mo
              </button>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={tenureType === "Yr" ? 50 : 600}
            step="1"
            value={
              tenureType === "Yr" ? Math.floor(loanTenure / 12) : loanTenure
            }
            onChange={(e) =>
              setLoanTenure(
                tenureType === "Yr"
                  ? Number(e.target.value) * 12
                  : Number(e.target.value)
              )
            }
            className="w-full h-2 rounded-full accent-orange-500 mt-2"
          />
        </div>

        {/* Results Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6 bg-orange-50 rounded-xl shadow-md space-y-4 h-fit">
            <h2 className="text-lg font-semibold text-gray-700">Loan EMI</h2>
            <p className="text-2xl font-bold text-green-600">
              {formatINR(emi)}
            </p>
            <hr className="border-gray-300" />
            <h2 className="text-lg font-semibold text-gray-700">
              Total Interest Payable
            </h2>
            <p className="text-xl font-bold text-orange-600">
              {formatINR(totalInterest)}
            </p>
            <hr className="border-gray-300" />
            <h2 className="text-lg font-semibold text-gray-700">
              Total Payment
            </h2>
            <p className="text-xl font-bold text-gray-800">
              {formatINR(totalPayment)}
            </p>
          </div>

          {/* Chart Section */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-6 text-gray-700">
              Break-up of Total Payment
            </h2>
            
            {/* UPDATED: Reduced width and height to w-64 h-64 (256px) */}
            <div className="w-64 h-64 relative">
              <Doughnut data={data} options={options} />
            </div>

            <div className="flex justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                Principal Loan Amount
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                Total Interest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;