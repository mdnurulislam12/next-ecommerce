'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const slides = [
    {
        id: 1,
        title: "Winter Sale Colections",
        description: "Sale! Up to 50% off!!",
        img: "https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=600",
        url:"/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 2,
        title: "Sprin Sale collections",
        description: "Sale! Up to 50% off!!",
        img: "https://images.pexels.com/photos/8541304/pexels-photo-8541304.jpeg?auto=compress&cs=tinysrgb&w=600",
        url:"/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Summer Sale Colections",
        description: "Sale! Up to 50% off!!",
        img: "https://images.pexels.com/photos/655809/pexels-photo-655809.jpeg?auto=compress&cs=tinysrgb&w=600",
        url:"/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCurrent((prev)=> (prev === slides.length - 1 ? 0 : prev + 1));
    //     }, 3000);
    //     return ()=> clearInterval(interval);
    // },[])
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={{transform: `translateX(-${current * 100}vw)`}}>
        {
            slides.map((slide) => (
                <div className={`${slide.bg} w-screen h-full flex gap-16 flex-col xl:flex-row`} key={slide.id}>
                    {/* text Content  */}
                    <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                        <h2 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h2>
                        <Link href={slide.url}><button className='py-3 px-4 bg-black text-white rounded-md text-sm'>Show</button></Link>
                    </div>
                    {/* Image Content  */}
                    <div className='h-1/2 xl:w-1/2 xl:h-full relative'>
                        <Image src={slide.img} sizes='100%' alt='' fill className='object-cover' />
                    </div>
                </div>
            ))
        };
        
      </div>
      <div className='absolute left-1/2 m-auto bottom-8 flex gap-4'>
            {
                slides.map((slide, index)=> (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} onClick={()=>setCurrent(index)} key={slide.id}>
                        {
                            current === index && (
                                <div className='w-[6px] h-[6px] bg-gray-500 rounded-full'></div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Slider
