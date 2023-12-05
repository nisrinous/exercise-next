const SkeletonWatchCard = () => {
  return (
    <div className="flex flex-col w-64 bg-white shadow-md rounded-md p-4">
      <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 w-2/4 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonWatchCard;
