import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./component/theme-provider";
import { FloatingNav } from "./component/ui/Floatingnav";
import { FaHome } from 'react-icons/fa'
import { FaMessage } from "react-icons/fa6";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoCodeWorkingOutline } from "react-icons/io5";
import Footer from "./component/lastfooter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahesh-portfulio",
  description: "create portfolio use nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <FloatingNav navItems={[
                {name:'Home' , link:"/", icon:<FaHome/>},
                {name:'About', link:"/About", icon:<MdOutlineRoundaboutRight/>},
                {name:'Work', link:"/work", icon:<IoCodeWorkingOutline/>},
                {name:'HireMe' ,link:"/mesage", icon:<FaMessage/>}
              ]}/>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer/>
      </body>
    </html>
  );
}
