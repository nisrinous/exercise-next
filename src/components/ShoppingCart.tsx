import React, { useState } from "react";
import BeigeCard from "./BeigeCard";

export default function ShoppingCart(): JSX.Element {
  const [displayModal, setDisplayModal] = useState(true);

  function closeModal() {
    setDisplayModal(false);
  }

  return (
    <>
      {displayModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={closeModal}
              ></div>
            </div>

            <div className="px-10 bg-white rounded-none z-10 overflow-hidden shadow-xl transform transition-all max-w-4xl w-full">
              <div className="flex justify-end items-center px-5 py-2 border-b border-gray-200">
                <button onClick={closeModal}>x</button>
              </div>
              <div className="mb-5">
                <BeigeCard
                  title="Way Kambas Mini Ebony"
                  fullprice="1.280.000"
                  price="1.024.000"
                  image="/image15.png"
                />
              </div>
              <div className="mb-5">
                <BeigeCard
                  title="Way Kambas Mini Ebony"
                  fullprice="1.280.000"
                  price="1.024.000"
                  image="/image15.png"
                />
              </div>
              <div className="py-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xl font-medium">Kode Promo</span>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={"indonesia"}
                      className={`ml-2 px-3 py-3 border rounded-md focus:outline-none
                 `}
                    />
                  </div>
                  <span className="text-xl font-medium">Subtotal: </span>
                </div>
              </div>
              <div className=" px-5 py-3 border-t border-gray-200">
                <button className="w-full bg-primary hover:bg-blue-600 px-5 py-2 rounded text-white focus:outline-none">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
