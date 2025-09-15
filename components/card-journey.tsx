import React from 'react';
import Image from 'next/image';

interface JourneyCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function JourneyCard({ title, description, image, index }: JourneyCardProps) {
  return (
    <div 
      className="w-full h-auto rounded-3xl shadow-lg overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform duration-300"
      style={{ backgroundColor: '#1a1033' }}
    >
      {/* Image section */}
      <div className="w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto rounded-t-3xl object-cover"
        />
      </div>
      
      {/* Text section */}
      <div className='px-8 pb-12 justify-start pt-4 justify-center'>
        <h3 className="text-white font-semibold text-xl">
          {title}
        </h3>
        <p className="text-gray-300 text-lg h-[50px] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}
