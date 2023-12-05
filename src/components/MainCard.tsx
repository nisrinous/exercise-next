export default function MainCard({
  title,
  boldTitle,
  desc,
  image,
}: {
  title: string;
  boldTitle: string;
  desc: string;
  image: string;
}): JSX.Element {
  return (
    <>
      <div className="relative w-[540px] h-[270px] bg-white text-left p-8 ">
        <h2 className="text-2xl mb-3 ">
          {title}
          <span className="font-bold"> {boldTitle}</span>
        </h2>
        <p className="mb-3 w-[345px] text-[#777]">{desc}</p>
        <p className="border-b-[1px] border-[#333] w-28 mb-5 font-semibold">
          Discover Now
        </p>
        <img className="absolute right-0 bottom-2" src={image}></img>
      </div>
    </>
  );
}
