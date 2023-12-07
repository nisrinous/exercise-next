import ButtonAddToCart from "./ButtonAddToCart";

export default function Jumbotron(): JSX.Element {
  return (
    <div className="relative my-16 container">
      <div className="overflow-hidden bg-[#F1DDC9] text-center">
        <img className="cover" src="/rectangle1.png" alt="rectangle" />
        <div className="absolute -top-7 -right-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="694"
            height="186"
            viewBox="0 0 694 186"
            fill="none"
          >
            <path
              d="M1.2658 143.57L213.999 1.32873L359 175.5L574.43 54.7848L752.472 185.066"
              stroke="#D84727"
              stroke-opacity="0.61"
            />
          </svg>
        </div>
        <div className="absolute top-5 -right-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="686"
            height="197"
            viewBox="0 0 686 197"
            fill="none"
          >
            <path
              d="M0.459886 138.016L199.817 0.882706L342.783 179.098L563.742 50.7618L756.244 196.006"
              stroke="#D84727"
              stroke-opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute top-16 -right-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="679"
            height="224"
            viewBox="0 0 679 224"
            fill="none"
          >
            <path
              d="M0.961118 142.439L183.436 0.836833L330 188L550.408 57.3273L760.266 223.157"
              stroke="#D84727"
              stroke-opacity="0.2"
            />
          </svg>
        </div>
        <div className="absolute -bottom-14 left-4">
          <img src="/jumbotron.png" />
        </div>
        <div className="absolute top-[15%] left-[35%]">
          <h1 className="text-6xl mb-5 text-left">
            WAY KAMBAS<br></br> MINI EBONY
          </h1>
          <div className="border-t-[1px] w-20 border-[#333] "></div>
          <p className="w-[68%] my-5 text-base text-left">
            MATOA Way Kambas - This wood is chosen to represent the Sumatran
            Rhino's skin which is designed with an overlap effect on its strap
            to represent Rhino's skin.
          </p>
          <p className="border-b-[1px] border-[#333] w-[4.5rem] mb-5 font-semibold">
            Discover
          </p>
          <div className="flex flex-row gap-7">
            <ButtonAddToCart icon />
            <button className="border-2 border-[#D84727] bg-none h-14 w-[140px] rounded-none text-white flex justify-center items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="33"
                viewBox="0 0 57 33"
                fill="none"
              >
                <g clip-path="url(#clip0_797_16276)">
                  <path
                    d="M14.9521 19.9208C13.5389 18.9343 11.9891 20.2054 11.9891 20.2054C9.83519 21.6358 6.95444 21.1841 5.33447 19.1621C3.7145 17.14 3.8857 14.2096 5.72995 12.3928C7.5742 10.5759 10.4877 10.4674 12.4602 12.1422C13.2261 12.6116 14.1904 12.6024 14.9474 12.1185C14.9474 12.1185 16.6527 10.6955 14.2502 8.7983H14.3209C10.6549 6.17937 5.61654 6.7709 2.64734 10.1688C-0.321853 13.5668 -0.262972 18.6738 2.78376 22.0014C5.8305 25.329 10.8811 25.8026 14.4858 23.0987C16.5397 21.2157 14.9521 19.9208 14.9521 19.9208Z"
                    fill="#D84727"
                  />
                  <path
                    d="M40.7339 19.9208C39.3207 18.9343 37.7755 20.2054 37.7755 20.2054C35.6232 21.6308 32.7477 21.1775 31.1311 19.1579C29.5145 17.1383 29.6854 14.2129 31.5261 12.3981C33.3667 10.5833 36.2751 10.4725 38.2466 12.1422C39.0114 12.6097 39.9733 12.6005 40.7292 12.1184C40.7292 12.1184 42.4345 10.6955 40.032 8.79828H40.1026C36.4372 6.1857 31.4042 6.78084 28.4397 10.1774C25.4751 13.574 25.5356 18.676 28.5799 22.0003C31.6241 25.3247 36.6697 25.7986 40.2722 23.0987C42.3214 21.2157 40.7339 19.9208 40.7339 19.9208Z"
                    fill="#D84727"
                  />
                  <path
                    d="M20.9303 5.90025C21.9553 5.90025 22.7863 4.89369 22.7863 3.65203C22.7863 2.41037 21.9553 1.40381 20.9303 1.40381C19.9052 1.40381 19.0742 2.41037 19.0742 3.65203C19.0742 4.89369 19.9052 5.90025 20.9303 5.90025Z"
                    fill="#D84727"
                  />
                  <path
                    d="M22.7859 9.19678C22.7361 8.20253 21.9209 7.42212 20.9322 7.42212C19.9435 7.42212 19.1283 8.20253 19.0785 9.19678V22.6576C19.044 23.3469 19.3896 23.9992 19.9773 24.3542C20.5651 24.7093 21.2993 24.7093 21.8871 24.3542C22.4748 23.9992 22.8204 23.3469 22.7859 22.6576V9.19678Z"
                    fill="#D84727"
                  />
                  <path
                    d="M46.8345 5.90025C47.8596 5.90025 48.6906 4.89369 48.6906 3.65203C48.6906 2.41037 47.8596 1.40381 46.8345 1.40381C45.8095 1.40381 44.9785 2.41037 44.9785 3.65203C44.9785 4.89369 45.8095 5.90025 46.8345 5.90025Z"
                    fill="#D84727"
                  />
                  <path
                    d="M48.6902 9.19678C48.6404 8.20253 47.8252 7.42212 46.8365 7.42212C45.8478 7.42212 45.0326 8.20253 44.9828 9.19678V22.6576C44.9483 23.3469 45.2939 23.9992 45.8816 24.3542C46.4694 24.7093 47.2036 24.7093 47.7914 24.3542C48.3791 23.9992 48.7247 23.3469 48.6902 22.6576V9.19678Z"
                    fill="#D84727"
                  />
                  <path
                    d="M56.7078 2.34302C56.7423 1.65377 56.3967 1.00147 55.809 0.646416C55.2212 0.291364 54.487 0.291364 53.8992 0.646416C53.3115 1.00147 52.9659 1.65377 53.0004 2.34302V9.19677V22.6576C52.9659 23.3469 53.3115 23.9992 53.8992 24.3542C54.487 24.7093 55.2212 24.7093 55.809 24.3542C56.3967 23.9992 56.7423 23.3469 56.7078 22.6576V9.19677V2.34302Z"
                    fill="#D84727"
                  />
                  <path
                    d="M26.583 27.818C25.7445 27.0212 24.3031 27.5382 24.3031 27.5382C23.4103 28.4404 22.1974 28.9476 20.9325 28.9476C19.6676 28.9476 18.4547 28.4404 17.562 27.5382C17.562 27.5382 16.1158 27.0212 15.2773 27.818C14.6931 28.4163 14.5546 29.3237 14.9334 30.071C16.5111 31.6964 18.6729 32.6127 20.9302 32.6127C23.1874 32.6127 25.3493 31.6964 26.9269 30.071C27.3103 29.3245 27.1714 28.4142 26.583 27.818Z"
                    fill="#D84727"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_797_16276">
                    <rect width="57" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute -bottom-7 right-20">
          <div className="flex flex-row gap-4">
            <button className="border-2 border-[#D84727] bg-none h-14 w-[60px] rounded-none text-white flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22 5L10.5 16.5L22 28"
                  stroke="#D84727"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#D84727] border-none h-14 w-[60px] rounded-none text-white flex flex-row px-2 justify-around text-lg items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10 5L21.5 16.5L10 28"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
