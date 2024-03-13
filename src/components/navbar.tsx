import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTrail, useInView } from "@react-spring/web";

export const MobileResponsiveNav = () => {
  return (
    <nav className="menu--left" role="navigation">
      <div className="menuToggle md:hidden">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menuItem">
          <li>
            <a
              href="#"
              className="font-sans subpixel-antialiased text-xl font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans subpixel-antialiased text-xl font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans subpixel-antialiased text-xl font-medium"
            >
              Info
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans subpixel-antialiased text-xl font-medium"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-sans subpixel-antialiased text-xl font-medium"
            >
              Show me more
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const MainNavbar = () => {
  const springs = useSpring({
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: { tension: 40, friction: 8 },
  });
  return (
    <animated.nav style={springs} className="p-4 md:p-4 md:block">
      <div className="max-w-full flex justify-between items-center">
        <div className="hidden md:flex items-left">
          <a href="/" className="text-xl font-semibold">
            My Landing Page
          </a>
        </div>
        <div className="hidden md:flex">
          <a
            href="/"
            className="font-sans subpixel-antialiased text-xl font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium mr-16"
          >
            Home
          </a>
          <a
            href="/"
            className=" subpixel-antialiased hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-sans text-xl font-medium mr-16"
          >
            Blog
          </a>
          <a
            href="/"
            className="subpixel-antialiased text-white px-5 pt-1.5 font-sans text-xl font-medium mr-20"
            style={{ backgroundColor: "#6e64ff", borderRadius: "8px" }}
          >
            Login
          </a>
        </div>
      </div>
    </animated.nav>
  );
};
