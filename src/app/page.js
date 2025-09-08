"use client";

import Home from "./components/Home";
import Navbar from "./components/Navbar";


export default function Page() {
  return (
    <main className="flex flex-col h-screen">
      <div className=" min-h-[100vh]"
        style={{
          background: 'radial-gradient(circle at top left, #ffffff 0%, #1E3A8A 30%, #1E3A8A 90%, #ffffff 100%)'
        }}>
        <Navbar />
        <Home />
      </div>
    </main>
  );
}


