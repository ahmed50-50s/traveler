import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className="w-full shadow-sm fixed top-0 left-0 z-50"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <img src="/assets/logo.png" alt="Traveler Logo" className="h-12" />

          {/* Menu for md+ screens */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-[var(--primary-color)]">
            {["Home", "Tours", "Blog", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-colors duration-300 hover:text-[var(--icon)]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Login button for md+ screens */}
          <button
            className="hidden md:block px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--background-color)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--icon)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-color)";
            }}
          >
            Login
          </button>

          {/* Hamburger icon for small screens */}
          <button
            className="md:hidden text-3xl text-[var(--primary-color)]"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--background-color)] shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="text-2xl text-[var(--primary-color)]"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-[var(--primary-color)] font-semibold">
          {["Home", "Tours", "Blog", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[var(--icon)]"
              onClick={() => setSidebarOpen(false)}
            >
              {item}
            </li>
          ))}
          <li>
            <button
              className="w-full bg-[var(--primary-color)] text-[var(--background-color)] py-2 rounded-lg font-semibold hover:bg-[var(--icon)] transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              Login
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
