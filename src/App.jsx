import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const Home = () => <Main />;
const Products = () => <div className="min-h-screen flex items-center justify-center text-3xl">Products</div>;
const Contacts = () => <div className="min-h-screen flex items-center justify-center text-3xl">Contacts</div>;

export const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#f8fefe] overflow-x-hidden">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;