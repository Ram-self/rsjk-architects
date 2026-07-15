import type { Metadata } from "next";
import { Teko, Montserrat } from 'next/font/google' // <-- 1. Change this line
import "./globals.css";

// 2. Remove Geist and add this
const teko = Teko({ 
  subsets: ['latin'],
  weight: ['700']
})

const mont = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: "RSJK Group - Architects & Designers",
  description: "RSJK Architects & Designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}> {/* 3. Use mont here */}
        {children}
      </body>
    </html>
  );
}