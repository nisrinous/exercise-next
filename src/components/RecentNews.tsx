export default function RecentNews(): JSX.Element {
  return (
    <div className="relative my-16 container">
      <div className="overflow-hidden text-center">
        <img className="absolute -right-[23.9rem] -top-20" src="/r21.png"></img>
        <div className="absolute -right-[23.9rem] -top-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="738"
            height="266"
            viewBox="0 0 738 266"
            fill="none"
          >
            <path
              d="M1 109L233 1L339 181L581 109L737 265"
              stroke="#D84727"
              stroke-opacity="0.61"
            />
          </svg>
        </div>
        <div className="absolute -right-[23.9rem] -top-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="740"
            height="280"
            viewBox="0 0 740 280"
            fill="none"
          >
            <path
              d="M1 106L219 1L333 199L571 106L739 279"
              stroke="#D84727"
              stroke-opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute -right-[23.9rem] -top-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="740"
            height="310"
            viewBox="0 0 740 310"
            fill="none"
          >
            <path
              d="M1 113L203 1L331 217L557 113L739 309"
              stroke="#D84727"
              stroke-opacity="0.2"
            />
          </svg>
        </div>
        <div className="absolute -right-[23.9rem] bottom-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="376"
            height="218"
            viewBox="0 0 376 218"
            fill="none"
          >
            <path
              d="M1 109L181 1L309 217L400 155"
              stroke="#D84727"
              stroke-opacity="0.4"
            />
          </svg>
        </div>
        <div className="absolute -right-[23.9rem] bottom-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="376"
            height="228"
            viewBox="0 0 376 228"
            fill="none"
          >
            <path
              d="M1 97L170 1L300 227L414 145"
              stroke="#D84727"
              stroke-opacity="0.61"
            />
          </svg>
        </div>
        <img className="absolute -right-28" src="/image13.png"></img>

        <div className="py-28">
          <p className="text-left text-xl text-[#777] my-6">Where To Travel</p>
          <h2 className="text-4xl w-96 text-left">
            Matoa Where To Travel? Yogyakarta
          </h2>
          <button className="border-2 border-[#D84727] bg-none h-[58px] w-[160px] rounded-none text-[#D84727] flex justify-center items-center my-16">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}
