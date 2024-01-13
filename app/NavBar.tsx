"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  console.log(currentPath);
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
              key={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-400": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors me-4": true,
              })}
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
