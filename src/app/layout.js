import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Provider from "@/app/Provider";
import { getThemeScript } from '@teispace/next-themes/server';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'IMDb clone',
  description:'This is movie database clone',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: getThemeScript({
              attribute: 'class',
              defaultTheme: 'system',
              enableSystem: true,
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Provider>
          <Header />
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Navbar />
          </Suspense>
          {children}
        </Provider>
      </body>
    </html>
  );
}