"use client";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";


export default function Page() {
  return (
    <main className="flex flex-col h-screen">
      <div className=""
        style={{
          background: 'radial-gradient(circle at top left, #6ea8fe 0%, #0f2a5b 40%, #0f2a5b 80%, #3a6fd0 100%)'
        }}>
        <Navbar />
        <Home />
        <Services />
        <Project />
        <Footer />
      </div>
    </main>
  );
}


