import { type Metadata } from 'next'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klasmic",
  description: "Real-time AI Teaching and Learning LMS app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en">
        <html lang="en">
          <body className={`${bricolage.variable} antialiased`}>
            <Navbar />
            {children}
          </body>
        </html>
    </html>
    </ClerkProvider>
  );
}
