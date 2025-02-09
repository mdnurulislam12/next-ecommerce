import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* Top  */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href="/">
            <div className='text-2xl tracking-wide'>LAMA</div>
          </Link>
          <p>2980 khelkhet, Dhaka</p>
          <span className='font-semibold'>kf@lama.dev</span>
          <span className='font-semibold'>+8801785-252642</span>
          <div className='flex gap-6'>
            <Image src='/facebook.png' alt='' width={16} height={16} />
            <Image src='/instagram.png' alt='' width={16} height={16} />
            <Image src='/youtbue.png' alt='' width={16} height={16} />
            <Image src='/pinterest.png' alt='' width={16} height={16} />
            <Image src='/x.png' alt='' width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">New Arrival</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Blog</Link>
              <Link href="">All Product</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">Customer Serviec</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input type="text" placeholder='Email adress' className='p-4 w-3/4' />
            <button className='w-1/4 bg-lama text-white'>JOIN</button>
            
          </div>
          <span className='font-semibold '>Secure Payments</span>
          <div className='flex justify-between'>
            <Image src="/discover.png" alt='' width={40} height={20} />
            <Image src="/skrill.png" alt='' width={40} height={20} />
            <Image src="/paypal.png" alt='' width={40} height={20} />
            <Image src="/visa.png" alt='' width={40} height={20} />
          </div>

        </div>
      </div>
      {/* bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
         <div>c 2025 Lama Shop</div>
         <div className='flex flex-col gap-8 md:flex-row'>
          <div>
            <span className='text-gray-500 mr-4'>Language</span>
            <span className='font-medium'>BANGALADESH | English</span>
          </div>
          <div>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ BDT</span>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
