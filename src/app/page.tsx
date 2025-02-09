import Catagoris from "@/components/Catagoris";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">Featured Products</h2>
        <ProductList />
      </div>
      <div className="mt-12 ">
        <h2 className="mb-12 text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Catagories</h2>
        <Catagoris />
      </div>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl">New Products</h2>
        <ProductList />
      </div>
    </div>
  );
}
