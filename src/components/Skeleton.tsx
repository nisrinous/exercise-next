const SkeletonWatchCard = () => {
  return (
    <div className=" relative w-[255px] bg-white text-left p-6 h-[403px]">
      <div className=" absolute -top-4 right-6 h-[34px] w-[90px] bg-gray-300 rounded mb-2"></div>
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4 my-4 -top-16"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-2/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
    </div>
  );
};

export default SkeletonWatchCard;
