"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "@/redux-system/store";

const MainLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <div
          suppressHydrationWarning={true}
          className="bg-[url('https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Ftest1-emgndhaqd0c9h2db.a01.azurefd.net%2Fimages%2Ff04be8b1-78d6-461a-9168-9da527ce6970.png')] bg-fixed	bg-bg-mySize"
        >
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
