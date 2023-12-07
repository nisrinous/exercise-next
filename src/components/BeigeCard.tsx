export default function BeigeCard({
  title,
  price,
  fullprice,
  image,
}: {
  title: string;
  fullprice?: string;
  image: string;
  price?: string;
}): JSX.Element {
  return (
    <div className="flex flex-row gap-5">
      <div className="relative w-[131px]">
        <img src="/r25.png"></img>
        <img className="absolute left-7 top-4" src={image}></img>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl text-left w-[190px] mt-1">{title}</h5>
        {fullprice ? (
          <p className="mb-1 line-through decoration-[#D93F3F] text-[#777] font-bold">
            Rp {fullprice}
          </p>
        ) : null}
        <h5 className="text-3xl text-left w-[190px]">{price}</h5>
      </div>
    </div>
  );
}
