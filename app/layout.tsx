"use client"

import "./globals.css";
import Header from "./Components/Header";
import ActiveSectionContextProvider from "./Context/ActiveSectionContext";
import ThemeSwitch from "./Components/ThemeSwitch";
import Sound from "./Components/Sound";
import SoundContextProvider from "./Context/SoundContext";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();
  const isHome = pathName === '/';

  const [loading , setLoading] = useState(isHome);

  useEffect(() => {
    if (isHome) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isHome]);

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`!overflow-x-hidden antialiased bg-slate-50 text-gray-950 ${ loading ? ' ' : 'pt-28 sm:pt-36'} relative dark:!bg-[#121212] dark:!text-gray-50`}
      >
        <div className="bg-[#fbe2e3] h-[31.25rem] w-[31.25rem] absolute top-[-6rem] right-[1rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] h-[31.25rem] w-[50rem] absolute top-[-1rem] left-[-35rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] dark:bg-[#676394]"></div>
        { loading && isHome ? <Preloader /> : 

          <SoundContextProvider>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                {children}
                <Header />
                <ThemeSwitch />
                <Sound />
              </ActiveSectionContextProvider> 
            </ThemeContextProvider>
          </SoundContextProvider>
        }
      </body>
    </html>
  );
}
