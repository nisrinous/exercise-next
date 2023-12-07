import Headline from "@/components/Headline";
import Skeleton from "@/components/Skeleton";
import WatchesCard from "@/components/WatchesCard";
import { Product } from "@/types";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

export default function Watches() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const watchesData = [
    {
      image: "/image1.png",
      title: "Singo Maple",
      fullprice: "1.500.000",
      price: "1.264.000",
      disc: "20",
    },
    {
      image: "/image1.png",
      title: "Sikka (Ebony & Maple)",
      price: "1.264.000",
      disc: "NEW",
    },
    { image: "/image1.png", title: "Sunda", price: "1.264.000" },
    {
      image: "/image1.png",
      title: "Singo Maple",
      fullprice: "1.280.000",
      price: "960.000",
      disc: "25",
    },
  ];

  const fetcher = async (url: string) => {
    const response = await axios.get(url);
    setProducts(response.data);
    return response.data;
  };

  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:3001/products",
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <div className="my-16 flex gap-2 items-center justify-between">
          <Headline title="Watches" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="px-3 py-1 my-2 bg-white border-[#666] border-[0.3px] text-base font-normal"
            />
            <button className="absolute inset-y-0 -right-5 flex items-center ">
              <div className="py-0 pl-2 pr-7 text-indigo-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6553 13.2278L20.7232 19.2959C20.8807 19.4589 20.8784 19.7181 20.7182 19.8783C20.5579 20.0386 20.2988 20.0408 20.1357 19.8834L14.0678 13.8153C10.8749 16.6896 5.97326 16.4968 3.01613 13.3804C0.0590075 10.264 0.123316 5.35903 3.16113 2.32125C6.19894 -0.716519 11.104 -0.780826 14.2204 2.17626C17.3368 5.13335 17.5297 10.035 14.6553 13.2278ZM1.7334 7.95653C1.7334 11.8573 4.89564 15.0195 8.79647 15.0195C12.6954 15.0149 15.855 11.8554 15.8595 7.95653C15.8595 4.05576 12.6973 0.893555 8.79647 0.893555C4.89564 0.893555 1.7334 4.05576 1.7334 7.95653Z"
                    fill="#666666"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="my-3 flex flex-row gap-6">
              {watchesData.map((watch, i) => (
                <Skeleton key={index + i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  return (
    <div>
      <div className="my-16 flex gap-2 items-center justify-between">
        <Headline title="Watches" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="px-3 py-1 my-2 bg-white border-[#666] border-[0.3px] text-base font-normal"
          />
          <button className="absolute inset-y-0 -right-5 flex items-center ">
            <div className="py-0 pl-2 pr-7 text-indigo-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6553 13.2278L20.7232 19.2959C20.8807 19.4589 20.8784 19.7181 20.7182 19.8783C20.5579 20.0386 20.2988 20.0408 20.1357 19.8834L14.0678 13.8153C10.8749 16.6896 5.97326 16.4968 3.01613 13.3804C0.0590075 10.264 0.123316 5.35903 3.16113 2.32125C6.19894 -0.716519 11.104 -0.780826 14.2204 2.17626C17.3368 5.13335 17.5297 10.035 14.6553 13.2278ZM1.7334 7.95653C1.7334 11.8573 4.89564 15.0195 8.79647 15.0195C12.6954 15.0149 15.855 11.8554 15.8595 7.95653C15.8595 4.05576 12.6973 0.893555 8.79647 0.893555C4.89564 0.893555 1.7334 4.05576 1.7334 7.95653Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="my-3 flex flex-row gap-7">
            {products.slice(index * 4, index * 4 + 4).map((product) => (
              <WatchesCard
                title={product.name}
                disc={
                  product.discount !== undefined
                    ? String(product.discount)
                    : undefined
                }
                isNew={product.isNew}
                price={String(product.price)}
                fullprice={product.fullprice}
                image={product.image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
