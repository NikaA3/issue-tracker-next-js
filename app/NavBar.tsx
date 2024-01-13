import { link } from "fs";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14 ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        <li>
          {links.map((link) => (
            <Link
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors me-2"
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
