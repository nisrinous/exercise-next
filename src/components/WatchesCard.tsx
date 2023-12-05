export default function WatchesCard({
  disc,
  title,
  price,
  fullPrice,
  image,
}: {
  disc?: string | undefined;
  title: string;
  fullPrice?: string | undefined;
  image: string;
  price: string;
}): JSX.Element {
  return (
    <>
      <div className=" w-[255px] h-[403px] bg-white text-left p-6">
        <div className="relative">
          {disc === "NEW" ? (
            <div className="absolute -top-10 right-0">
              <button className="bg-[#01522D] border-none h-[34px] w-[71px] rounded-none text-white flex flex-row px-2 justify-around text-lg items-center">
                {disc}
              </button>
            </div>
          ) : disc === undefined ? null : (
            <div className="absolute -top-10 right-0">
              <button className="bg-[#D84727] border-none h-[34px] w-[103px] rounded-none text-white flex flex-row px-2 justify-around text-lg items-center">
                {disc}% OFF
              </button>
            </div>
          )}
        </div>
        <div className="">
          <img className="my-4 -top-16" src={image}></img>

          <h2 className="text-2xl mb-1 ">{title}</h2>
          {fullPrice ? (
            <p className="mt-3 line-through decoration-[#D93F3F] text-[#777]">
              Rp {fullPrice}
            </p>
          ) : null}
          <p className="mb-3 text-2xl">Rp {price}</p>
        </div>
      </div>
    </>
  );
}
