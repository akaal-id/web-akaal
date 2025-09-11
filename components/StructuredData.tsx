import React from 'react';

interface StructuredDataProps {
  data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Akaal",
  "url": "https://akaal.id",
  "logo": "https://akaal.id/images/akaal-logo.png",
  "description": "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, and digital transformation services.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/akaal",
    "https://www.twitter.com/akaal",
    "https://www.linkedin.com/company/akaal"
  ],
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Akaal Team"
    }
  ],
  "knowsAbout": [
    "Digital Transformation",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "IT Consulting",
    "Software Development"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "geoRadius": "1000000"
  }
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Akaal",
  "url": "https://akaal.id",
  "description": "Digital Innovation & Technology Solutions",
  "publisher": {
    "@type": "Organization",
    "name": "Akaal",
    "url": "https://akaal.id"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://akaal.id/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Service structured data
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Solutions & Technology Services",
  "description": "Comprehensive digital services including custom software development, UI/UX design, digital transformation, IT consulting, and cloud solutions.",
  "provider": {
    "@type": "Organization",
    "name": "Akaal",
    "url": "https://akaal.id"
  },
  "serviceType": "Technology Services",
  "areaServed": "Indonesia",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "Empowering your business with the latest technology and digital strategies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Tailored solutions to fit your unique business needs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "Creating beautiful, user-friendly interfaces for web and mobile applications."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Consulting",
          "description": "Expert advice to help you make the right technology decisions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions",
          "description": "Scalable and secure cloud infrastructure for modern businesses."
        }
      }
    ]
  }
};

