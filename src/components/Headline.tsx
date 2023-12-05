export default function Headline({ title }: { title: string }): JSX.Element {
  return (
    <div className="text-left my-10">
      <h1 className="text-4xl mb-2 font-medium">{title}</h1>
      <div className="border-t-[1px] w-28 border-[#333]"></div>
    </div>
  );
}
