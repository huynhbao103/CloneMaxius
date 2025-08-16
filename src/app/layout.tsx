import type { Metadata } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAXIUS",
  description: "MAXIUS is the leading self-developed semiconductor company specializing in High-Performance Servers, IPFS Data Center solutions, Blockchain technology consulting, and innovative semiconductor solutions for modern businesses.",
  keywords: [
    "semiconductor",
    "high-performance servers", 
    "IPFS",
    "blockchain",
    "data center",
    "consulting",
    "server technology",
    "semiconductor manufacturing",
    "IPFS IDC",
    "blockchain consulting",
    "high-performance computing",
    "server solutions"
  ].join(", "),
  authors: [
    { name: "Huynh Quoc Bao" },
  ],
  creator: "Huynh Quoc Bao",
  publisher: "Huynh Quoc Bao",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxius-huynhquocbao.vercel.app",
    siteName: "MAXIUS",
    title: "MAXIUS",
    description: "MAXIUS is the leading self-developed semiconductor company specializing in High-Performance Servers, IPFS Data Center solutions, Blockchain technology consulting, and innovative semiconductor solutions for modern businesses.",
    images: [
      {
        url: "/Images/hero.png",
        width: 1200,
        height: 630,
        alt: "MAXIUS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@maxius_io",
    creator: "@maxius_io",
    title: "MAXIUS",
    description: "MAXIUS is the leading self-developed semiconductor company specializing in High-Performance Servers, IPFS Data Center solutions, Blockchain technology consulting, and innovative semiconductor solutions for modern businesses.",
    images: ["/Images/hero.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Technology",
  classification: "Semiconductor & Server Technology",
  other: {
    "theme-color": "#1a2a59",
    "msapplication-TileColor": "#1a2a59",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MAXIUS",
              "url": "https://maxius-huynhquocbao.vercel.app",
              "logo": "https://maxius-huynhquocbao.vercel.app/Images/hero.png",
              "description": "MAXIUS is the leading self-developed semiconductor company specializing in High-Performance Servers and Blockchain technology solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5F 12-30, Simin-daero 327beon-gil, Dongan-gu",
                "addressLocality": "Anyang-si",
                "addressRegion": "Gyeonggi-do",
                "postalCode": "14000",
                "addressCountry": "KR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82-2-851-2662",
                "contactType": "customer service",
                "email": "support@maxius.io"
              },
              "sameAs": [
                "https://www.linkedin.com/company/maxius",
                "https://twitter.com/maxius_io"
              ],
              "foundingDate": "2020",
              "industry": "Semiconductor & Server Technology"
            })
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
