"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModel from "./CartModel";

const NavIcons = () => {
  const [profile, setProfile] = useState(false);
  const [cart, setCart] = useState(false);

  const route = useRouter();

  //Temporary
  const isLoggedIn = false;

  const hendleProfile = () => {
    if (!isLoggedIn) {
      route.push("/login");
    }
    setProfile((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        onClick={hendleProfile}
      />
      {profile && (
        <div className="p-4 top-10 rounded-md text-sm absolute left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
          <Link href="/">Profile</Link>
          <button className="mt-2 cursor-pointer">LogOut</button>
        </div>
      )}
      <Image src="/notification.png" alt="" width={22} height={22} />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          onClick={() => setCart((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 bg-lama w-6 h-6 rounded-full text-white flex items-center justify-center text-sm">2</div>
      </div>
      {cart && <CartModel />}
    </div>
  );
};

export default NavIcons;
