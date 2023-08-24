import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import Image from "next/image";
import RightSide from "./components/RightSide";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import BigProjects from "./components/list-projects/ListProjects";
import SmallProjects from "./components/small-projects/SmallProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rub21.com",
  description: "Software Developer",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
          <Navbar></Navbar>
          <div className="w-full h-[88vh] lg:flex items-center gap-10 justify-between">
            <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
              <LeftSide />
            </div>
            {children}
            <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
              <RightSide />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
