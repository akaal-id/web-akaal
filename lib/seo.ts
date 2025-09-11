import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://akaal.id'),
  title: {
    default: 'Akaal - Digital Innovation & Technology Solutions',
    template: '%s | Akaal'
  },
  description: 'Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, digital transformation, and innovative technology services.',
  keywords: [
    'digital solutions',
    'web development',
    'mobile app development',
    'digital transformation',
    'technology consulting',
    'software development',
    'UI/UX design',
    'cloud solutions',
    'IT consulting',
    'innovation',
    'Akaal'
  ],
  authors: [{ name: 'Akaal Team' }],
  creator: 'Akaal',
  publisher: 'Akaal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akaal.id',
    siteName: 'Akaal',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Akaal - Digital Innovation & Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akaal - Digital Innovation & Technology Solutions',
    description: 'Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, digital transformation, and innovative technology services.',
    images: ['/images/og-image.jpg'],
    creator: '@akaal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/mono-akaal-logo.png', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image = '/images/og-image.jpg',
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
}): Metadata {
  const url = `https://akaal.id${path}`
  
  return {
    title,
    description,
    keywords: [...(defaultMetadata.keywords || []), ...(keywords || [])],
    openGraph: {
      title,
      description,
      url,
      siteName: 'Akaal',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@akaal',
    },
    alternates: {
      canonical: url,
    },
  }
}

