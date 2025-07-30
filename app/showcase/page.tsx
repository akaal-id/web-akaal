import React from 'react';

export default function ShowcasePage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Showcase</h1>
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#18122b] rounded-lg p-6 shadow-lg flex flex-col items-center">
          <img src="/images/photo-1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-violet-300">Project One</h2>
          <p className="text-gray-300 text-center">A modern web application built for performance and scalability, featuring a beautiful UI and seamless user experience.</p>
        </div>
        <div className="bg-[#18122b] rounded-lg p-6 shadow-lg flex flex-col items-center">
          <img src="/images/photo-2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-violet-300">Project Two</h2>
          <p className="text-gray-300 text-center">A custom mobile solution designed to streamline business operations and enhance productivity on the go.</p>
        </div>
        <div className="bg-[#18122b] rounded-lg p-6 shadow-lg flex flex-col items-center">
          <img src="/images/photo-3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-violet-300">Project Three</h2>
          <p className="text-gray-300 text-center">A cloud-based platform enabling real-time collaboration and data-driven decision making for enterprises.</p>
        </div>
      </div>
    </section>
  );
}