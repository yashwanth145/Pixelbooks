// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="text-white bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900 shadow-lg p-4 flex justify-between items-center">
        <div className="text-2xl font-bold uppercase">Trade it out</div>
        <ul className={`md:flex space-x-6 hidden`}>
          {["Home", "Features", "How It Works", "Contact", "Login"].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-orange-500">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          <Menu />
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-[70vh] text-center text-white bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('https://media.gqindia.com/wp-content/uploads/2016/04/Trinity-College-Library.jpg')",
        }}
      >
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4">THRIVE</h1>
          <p className="text-lg mb-6">Ensuring everything for everyone.</p>
          <a href="#features" className="bg-gray-400 hover:bg-cyan-700 px-6 py-3 rounded-md text-lg inline-block transition transform hover:scale-105">
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 text-center bg-gradient-to-br from-green-600 to-gray-600 text-white">
        <h2 className="text-3xl font-bold mb-10">WHAT YOU CAN DO?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "BUY", desc: "Buy all you need to Grind." },
            { title: "SELL", desc: "Earn from every bit of your Gains." },
            { title: "EXCHANGE", desc: "Exchange as there is nothing to lose." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cover bg-center w-72 h-56 rounded-xl p-6 text-white shadow-lg"
              style={{
                backgroundImage:
                  "url('https://th.bing.com/th/id/OIP.9pwzuXW2uqXDRGlprS7wYAHaE8?rs=1&pid=ImgDetMain')",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 font-semibold">Interested in our AI proctoring system? Let's talk!</p>
        <Link href="/dashboard">
          <span className="bg-gray-400 hover:bg-cyan-700 px-6 py-3 rounded-md text-lg inline-block transition transform hover:scale-105">S
            GET STARTED
          </span>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-800 text-center text-white py-6">
        <p>© 2025 TRADE IT OUT - Ensuring Academic Integrity</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-orange-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-orange-400 hover:text-white">Twitter</a>
          <a href="#" className="text-orange-400 hover:text-white">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
