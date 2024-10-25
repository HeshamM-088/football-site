"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <div className="bg-mainBg dark:bg-black">{children}</div>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
