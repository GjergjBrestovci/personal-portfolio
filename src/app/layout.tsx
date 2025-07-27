import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gjergj Brestovci - Developer Portfolio",
  description: "Clean, minimalist developer portfolio showcasing technical skills, education, and professional journey with a focus on continuous learning and growth.",
  keywords: ["developer", "portfolio", "web development", "software engineer", "programmer", "react", "nextjs", "typescript"],
  authors: [{ name: "Gjergj Brestovci" }],
  creator: "Gjergj Brestovci",
  publisher: "Gjergj Brestovci",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Gjergj Brestovci - Developer Portfolio",
    title: "Gjergj Brestovci - Developer Portfolio",
    description: "Clean, minimalist developer portfolio showcasing technical skills and professional journey.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gjergj Brestovci - Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername",
    title: "Gjergj Brestovci - Developer Portfolio",
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
    <html lang="en" className={poppins.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
