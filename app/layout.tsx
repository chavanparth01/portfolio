"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import ActiveSectionContextProvider from "./Context/ActiveSectionContext";
import ThemeSwitch from "./Components/ThemeSwitch";
import Sound from "./Components/Sound";
import SoundContextProvider from "./Context/SoundContext";
import ThemeContextProvider from "./Context/ThemeContextProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// export const metadata: Metadata = {
//   title: "Parth Chavan | Portfolio",
//   description: "Parth Chavan is a Frontend developer with 2 years of experience",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-gray-950 dark:!bg-red-500 dark:text-gray-50 pt-28 sm:pt-36 relative `}
      >

        <div className="bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] absolute top-[-6rem] right-[1rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <div className="bg-[#dbd7fb] h-[31.25rem] w-[50rem] absolute top-[-1rem] left-[-35rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem]"></div>

        <ThemeContextProvider>
          <SoundContextProvider>
            <ActiveSectionContextProvider>
              {children}
              <Header />
              <ThemeSwitch />
              <Sound />
            </ActiveSectionContextProvider>
          </SoundContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
