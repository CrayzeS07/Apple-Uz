import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Main_layout = () => {
  return (
    <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
};
