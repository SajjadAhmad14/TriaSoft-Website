"use client";

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";


export default function Page() {
  return (
    <main className="flex flex-col h-screen">
      <Hero />
      <Navbar />
      <Home />
      <Services />
      <Project />
      <ContactUs />
      <Footer />
    </main>
  );
}


