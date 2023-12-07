import { useState } from "react";
import ButtonAddToCart from "./ButtonAddToCart";

export default function WatchesCard({
  disc,
  title,
  price,
  fullprice,
  image,
  isNew,
}: {
  disc?: string | undefined;
  title: string;
  fullprice?: string | undefined;
  image: string;
  price: string;
  isNew?: boolean;
}): JSX.Element {
  const [isClick, setIsClick] = useState(false);

  const handleCardClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div
        className={`relative hover:cursor-pointer w-[255px] bg-white text-left p-6 ${
          isClick
            ? "h-[462px] shadow-[2px_3px_10px_4px_#D8472726]"
            : "h-[403px]"
        }`}
        onClick={handleCardClick}
      >
        <div className="relative">
          {isNew ? (
            <div className="absolute -top-10 right-0">
              <button className="bg-[#01522D] border-none h-[34px] w-[90px] rounded-none text-white flex flex-row px-2 justify-around text-lg items-center">
                NEW
              </button>
            </div>
          ) : disc !== undefined ? (
            <div className="absolute -top-10 right-0">
              <button className="bg-[#D84727] border-none h-[34px] w-[103px] rounded-none text-white flex flex-row px-2 justify-around text-lg items-center">
                {disc}% OFF
              </button>
            </div>
          ) : null}
        </div>
        <div className="">
          <img className="my-3 -top-16" src={image}></img>

          <h2 className="text-2xl mb-1 ">{title}</h2>
          {fullprice ? (
            <p className="mt-3 line-through decoration-[#D93F3F] text-[#777]">
              Rp {fullprice}
            </p>
          ) : null}
          <p className="mt-1 mb-3 text-2xl">Rp {price}</p>
          {isClick ? (
            <div className="absolute bottom-5">
              <div className="flex flex-row">
                <button className="bg-none mr-2 border-[#D84727] border-[1px] h-[39px] w-[39px] rounded-none flex flex-row px-2 justify-around text-lg items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0036 5.6792C12.9066 4.6216 14.6428 3 16.8 3C19.9103 3 22 5.25056 22 8.6C22 14.574 12.9772 20.7803 12.4636 21.1336L12.4536 21.1405L11.9976 21.4L11.5432 21.0838C11.5381 21.0802 11.5316 21.0757 11.5237 21.0702C10.9177 20.6504 2 14.4725 2 8.6C2 5.25056 4.08968 3 7.2 3C9.37992 3 11.1073 4.62008 12.0036 5.6792ZM2.79997 8.59997C2.79997 14.2 12 20.427 12 20.427V20.4271C12 20.4271 21.2 14.2668 21.2 8.59997C21.2 5.79997 19.6 3.79997 16.8 3.79997C14.0666 3.79997 12 6.99997 12 6.99997C12 6.99997 9.96661 3.79997 7.19997 3.79997C4.39997 3.79997 2.79997 5.79997 2.79997 8.59997Z"
                      fill="#D84727"
                    />
                  </svg>
                </button>
                <ButtonAddToCart />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
