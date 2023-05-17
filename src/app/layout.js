"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
