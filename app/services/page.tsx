import React from 'react';

export default function ServicesPage() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Our Services</h1>
      <ul className="max-w-2xl w-full text-lg md:text-xl text-center space-y-4">
        <li>
          <span className="font-semibold text-violet-300">Digital Transformation</span>: Empowering your business with the latest technology and digital strategies.
        </li>
        <li>
          <span className="font-semibold text-violet-300">Custom Software Development</span>: Tailored solutions to fit your unique business needs.
        </li>
        <li>
          <span className="font-semibold text-violet-300">UI/UX Design</span>: Creating beautiful, user-friendly interfaces for web and mobile applications.
        </li>
        <li>
          <span className="font-semibold text-violet-300">IT Consulting</span>: Expert advice to help you make the right technology decisions.
        </li>
        <li>
          <span className="font-semibold text-violet-300">Cloud Solutions</span>: Scalable and secure cloud infrastructure for modern businesses.
        </li>
      </ul>
    </section>
  );
}