import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Clean, minimalist developer portfolio showcasing technical skills, education, and professional journey with a focus on continuous learning and growth.",
  keywords: ["developer", "portfolio", "web development", "software engineer", "programmer", "react", "nextjs", "typescript"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Your Name - Developer Portfolio",
    title: "Your Name - Developer Portfolio",
    description: "Clean, minimalist developer portfolio showcasing technical skills and professional journey.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Name - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername",
    title: "Your Name - Developer Portfolio",
    description: "Clean, minimalist developer portfolio showcasing technical skills and professional journey.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
