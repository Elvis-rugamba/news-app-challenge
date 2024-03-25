"use client";
import Link from "next/link";
import { useState } from "react";
import menuIcon from "../../assets/icons/menu.svg";
import Image from "next/image";
import { Menu } from "@/types/navbar.type";
import NavMenu from "../NavMenu";
import ExpandableSearch from "../ExpandableSearch";

interface NavbarProps {
  menus: Menu[];
  className?: string;
}

export default function Navbar({ menus, className = "" }: NavbarProps) {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <header
        className={`bg-white h-14 w-full flex items-center fixed z-50 px-6 border-b border-black/20 ${className}`}
      >
        <button
          className="relative h-6 w-6 mr-6 lg:hidden"
          onClick={toggleSideNav}
        >
          <Image alt="Search" src={menuIcon} fill />
        </button>
        <div className="font-extrabold text-lg flex-shrink-0">
          <Link href="/">News App</Link>
        </div>
        <nav className="ml-6 max-lg:hidden" role="main nav">
          <ul className="flex items-center space-x-4">
            {menus.map((menu) => (
              <li key={menu.label}>
                <NavMenu label={menu.label} href={menu.href} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto max-md:hidden">
          <ExpandableSearch />
        </div>
      </header>
      <div
        className={`lg:hidden bg-white fixed top-14 bottom-0 z-50 h-full w-1/3 max-md:w-full p-6 border-r border-black/10 shadow-2xl transition-transform duration-300 ${
          showSideNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 w-full md:hidden">
          <ExpandableSearch
            className="w-full"
            expanded
            onSearch={toggleSideNav}
          />
        </div>
        <nav className="w-full" role="mobile nav">
          <ul className="flex flex-col space-y-4">
            {menus.map((menu) => (
              <li key={menu.label}>
                <NavMenu
                  label={menu.label}
                  href={menu.href}
                  onClick={toggleSideNav}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
