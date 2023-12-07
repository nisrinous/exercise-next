import { RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

export default function Header(): JSX.Element {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);

  const isActiveLink = (pathname: string) => {
    return pathname === router.pathname ? "text-[#D84727]" : "";
  };

  const counter = useSelector((state: RootState) => state.cartBadge.counter);

  const displayModal = () => {
    setVisible(!visible);
    console.log("visible");
  };

  return (
    <>
      {visible ? <ShoppingCart /> : null}
      <header className="w-[95%] md:w-[70%] lg:w-[60%] flex mt-7 md:mt-10 justify-between">
        <div className="items-center w-[120px] md:w-[178px] mt-4 md:mt-3">
          <img src="/logo.png" alt="Brand image" />
        </div>
        <ul className="flex flex-row gap-10 justify-center align-middle items-center text-lg">
          <li className={isActiveLink("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActiveLink("/watches")}>
            <Link href="/watches">Watches</Link>
          </li>

          <li className={isActiveLink("/news")}>
            <Link href="/news">News</Link>
          </li>
          <li className={isActiveLink("/wishlist")}>
            <Link href="/wishlist">Wishlist</Link>
          </li>
          <li className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0934 5.42956C15.6947 8.04536 14.4096 10.7298 11.995 11.9018C15.63 13.0124 18.1148 16.365 18.1198 20.1659V21.6059C18.1198 21.871 17.9049 22.0859 17.6398 22.0859C17.3747 22.0859 17.1598 21.871 17.1598 21.6059V20.1659C17.1598 15.9243 13.7214 12.4859 9.47984 12.4859C5.2383 12.4859 1.79984 15.9243 1.79984 20.1659V21.6059C1.79984 21.871 1.58494 22.0859 1.31984 22.0859C1.05475 22.0859 0.839844 21.871 0.839844 21.6059V20.1659C0.844914 16.365 3.32965 13.0124 6.96464 11.9018C4.55004 10.7298 3.26495 8.04536 3.86625 5.42956C4.46754 2.81376 6.79583 0.959961 9.47984 0.959961C12.1639 0.959961 14.4921 2.81376 15.0934 5.42956ZM9.47984 1.92586C6.82888 1.92586 4.67984 4.07489 4.67984 6.72586C4.68281 9.37559 6.8301 11.5229 9.47984 11.5259C12.1308 11.5259 14.2798 9.37682 14.2798 6.72586C14.2798 4.07489 12.1308 1.92586 9.47984 1.92586Z"
                fill="black"
              />
            </svg>
            <Link href="/auth/login">Login</Link>
          </li>
          <li className="flex">
            <span className="relative inline-block">
              <button onClick={displayModal}>
                <img src="/cart.png"></img>
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs leading-none text-white transform translate-x-[15%] -translate-y-1/5 bg-[#D84727] rounded-full">
                {counter}
              </span>
            </span>
          </li>
        </ul>
      </header>
    </>
  );
}
