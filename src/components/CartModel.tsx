import React from "react";
import Image from "next/image";

const CartModel = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 top-12 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 right-0 flex flex-col">
      {!cartItems ? (
        <div>Cart is Emptry</div>
      ) : (
        <>
        <h1 className="text-lg text-white mb-2 font-semibold">Shopping Cart</h1>
        <div className="flex flex-col gap-8">
          {/* items */}
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/15355037/pexels-photo-15355037/free-photo-of-bowl-of-soup-with-noodles-and-shrimps.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* Top */}
              <div>
                {/* titele */}
                <div className="flex justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* Desc */}
                <div className="text-sm text-gray-500 -mt-1">available</div>
              </div>
              {/* bottom */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Qty-2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* items */}
          <div className="flex gap-4">
            <Image
              src="https://images.pexels.com/photos/15355037/pexels-photo-15355037/free-photo-of-bowl-of-soup-with-noodles-and-shrimps.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              {/* Top */}
              <div>
                {/* titele */}
                <div className="flex justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* Desc */}
                <div className="text-sm text-gray-500 -mt-1">available</div>
              </div>
              {/* bottom */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Qty-2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom  */}
        <div>
            <div className="flex justify-between font-bold mt-4">
                <span>Subtotal</span>
                <span>$49</span>
            </div>
            <div className="text-sm text-gray-500 mt-2 mb-2">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-4 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-4 px-4 bg-black text-white">Checkout</button>
            </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
