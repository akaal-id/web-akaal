"use client";

export default function GetStartedButton() {
  return (
    <div 
      className="rounded-full p-1"
      style={{
        background: 'linear-gradient(90deg, #392686 0%, #6543EC 100%)'
      }}
    >
      <button 
        className="text-white rounded-full font-normal text-base transition-all duration-500 ease-in-out w-full"
        style={{
          padding: '10px 24px',
          background: 'linear-gradient(90deg, #6543EC 0%, #392686 100%)',
          border: 'none',
          borderRadius: '9999px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(90deg, #392686 0%, #6543EC 100%)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(90deg, #6543EC 0%, #392686 100%)';
        }}
      >
        Get Started
      </button>
    </div>
  );
}
