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
          className="dark:bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczQ4LXRlZC0wNzA2LWV5ZS0wMS5qcGc.jpg')] bg-[url('https://img.freepik.com/premium-photo/background-is-made-up-artificial-grass-texture-depicted-as-flat-lay_1257429-55008.jpg')] bg-fixed	bg-bg-mySize"
        >
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
