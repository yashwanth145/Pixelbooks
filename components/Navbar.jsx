"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "@/app/actions";
import { motion } from "framer-motion";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-lg bg-white/10 shadow-lg border border-white/20 rounded-xl transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Navbar Brand */}
        <h3 className="text-xl text-white font-semibold hover:scale-105 transition-transform duration-300">
          Directing Links
        </h3>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          <Link
            href="/"
            className="hover:text-green-400 transition-transform transform hover:scale-105 duration-200"
          >
            Home
          </Link>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              Search(searchQuery);
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-white transition duration-300"
            >
              Search
            </button>
          </form>

          <Link
            href="/Recommended"
            className="hover:text-yellow-400 transition-transform transform hover:scale-105 duration-200"
          >
            Recommended
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-blue-300 transition-transform transform hover:scale-105 duration-200">
              Account
            </span>
            <ul className="absolute right-0 mt-2 w-48 bg-white/20 backdrop-blur-md shadow-lg rounded-lg hidden group-hover:block transition-all duration-300">
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-white hover:bg-white/30 rounded-t-lg"
                >
                  Login
                </Link>
              </li>
              <li>
                <hr className="border-white/40" />
              </li>
              <li className="px-4 py-2">
              <button onClick={() => auth.signOut().then(() => router.push("/login"))}>Logout</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Toggle (Optional) */}
        <button
          className="block lg:hidden text-white focus:outline-none hover:scale-110 transition-transform duration-300"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">☰</span>
        </button>
      </div>
    </motion.nav>
  );
}
