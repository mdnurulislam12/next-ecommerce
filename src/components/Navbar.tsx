"use client";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png" // Make sure the path is correct
              alt="" // Description for the image
              width={24} // Adjust the width
              height={24} // Adjust the height
            />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className= "hidden xl:flex gap-4">
                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
