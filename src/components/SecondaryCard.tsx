export default function SecondaryCard({
  title,
  price,
  disc,
  fullprice,
  image,
}: {
  title: string;
  disc: string;
  fullprice: string;
  image: string;
  price: string;
}): JSX.Element {
  return (
    <>
      <div className=" w-[255px] h-[381px] bg-white text-left p-6 ">
        <div className="relative">
          {" "}
          <img className="mb-4 absolute -top-16" src={image}></img>
        </div>
        <div className="mt-48">
          <h2 className="text-2xl mb-1 ">{title}</h2>
          <p className="mb-1 text-[#777]">{disc}% Off</p>
          <p className="mb-1 line-through decoration-[#D93F3F] text-[#777]">
            Rp {fullprice}
          </p>
          <p className="mb-3 text-xl">Rp {price}</p>
        </div>
      </div>
    </>
  );
}
