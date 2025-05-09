import './globals.css';

import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elektro Pospíšil",
  description: "Alarmy | Elektroinstalace | Revize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
