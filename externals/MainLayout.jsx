"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <div className="bg-[url('https://img.freepik.com/premium-photo/background-is-made-up-artificial-grass-texture-depicted-as-flat-lay_1257429-55008.jpg')] bg-fixed	bg-bg-mySize h-[300vh] dark:bg-black">
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
