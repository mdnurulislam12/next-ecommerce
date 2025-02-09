
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <Image
        src="/menu.png" // Make sure the path is correct
        alt=""             // Description for the image
        width={28}                   // Adjust the width
        height={28} 
        onClick={()=> setOpen((prev)=> !prev)}                 // Adjust the height
      /> 
      {
        open && (
            <div className= "absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                <Link href="/">Home Page</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart(1)</Link>
            </div>
        )
      }
    </div>
  )
}

export default Menu
