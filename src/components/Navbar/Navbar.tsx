import Link from "next/link";
import searchIcon from "../../assets/icons/search.svg";
import Image from "next/image";
import { Menu } from "@/types/navbar.type";
import NavMenu from "../NavMenu";
import ExpandableSearch from "../ExpandableSearch";

interface NavbarProps {
  menus: Menu[];
  className?: string;
}

export default function Navbar({ menus, className = "" }: NavbarProps) {
  return (
    <header
      className={`bg-white h-14 w-full flex items-center fixed z-50 px-6 border-b border-black/20 ${className}`}
    >
      <div className="font-extrabold text-lg">
        <Link href="/">News App</Link>
      </div>
      <nav className="ml-6">
        <ul className="flex items-center space-x-4">
          {menus.map((menu) => (
            <li key={menu.label}>
              <NavMenu label={menu.label} href={menu.href} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto">
        <ExpandableSearch />
      </div>
    </header>
  );
}
