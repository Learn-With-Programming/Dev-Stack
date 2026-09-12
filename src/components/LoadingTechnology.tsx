const LoadingTechnology = () => {
  return (
    <div className="bg-white border border-gray-100 p-5 rounded-xl space-y-4 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-5 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-5 bg-gray-200 rounded w-1/2"></div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
      <div className="h-8 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default function LoadingData() {
  const techItems = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {techItems.map((item) => (<LoadingTechnology key={item} />))}
    </div>
  );
}
