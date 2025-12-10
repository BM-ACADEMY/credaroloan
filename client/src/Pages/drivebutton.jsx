import React from 'react'

const Drivebutton = () => {
  const handleNavigate = () => {
    // Replace this with your actual Drive link
    window.open("https://drive.google.com/drive/folders/1gMj9wEm_1q4dqLIPVYFKUbCyZ9I49OWr?usp=sharing", "_blank");
  };

  return (
    <div>
      <div className="w-full bg-gradient-to-tr from-slate-950 via-slate-900 to-violet-950 px-2 text-center text-white py-20 flex flex-col items-center justify-center">
        <p className="text-indigo-500 font-medium">Proof of Our Expertise</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">
          Check out our documents and learn more about our loan services
        </h1>
        <div className="mt-10">
          <button 
            onClick={handleNavigate}
            className="bg-indigo-600 text-white hover:bg-indigo-800 rounded-full h-11 mr-1 px-8 flex items-center justify-center"
          >
            View Documents
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drivebutton
