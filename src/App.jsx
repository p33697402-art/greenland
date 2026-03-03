import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const Home = () => <>Home</>;
const Products = () => <>Products</>;
const Contacts = () => <>Contacts</>;

export const App = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Main />
      <Footer />
    </div>
  );
};

export default App;