"use client";

export default function GetStartedButton() {
  return (
    <div className="group rounded-full p-1 bg-gradient-to-r from-[#392686] to-[#6543EC]">
      <button 
        className="text-white rounded-full font-normal text-base w-full bg-gradient-to-r from-[#6543EC] to-[#392686] hover:from-[#392686] hover:to-[#6543EC] transition-all duration-500 ease-in-out"
        style={{
          padding: '10px 24px',
          border: 'none',
          borderRadius: '9999px'
        }}
      >
        Get Started
      </button>
    </div>
  );
}
