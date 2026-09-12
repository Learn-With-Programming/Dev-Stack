import bannerStackImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="btn bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-none font-medium px-6 py-3 rounded-lg shadow-md normal-case">
              Explore Technologies
            </button>
            <button className="btn btn-outline border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg normal-case">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={bannerStackImg} alt="Development Stack Illustration" className="w-full max-w-lg object-contain drop-shadow-xl"/>
        </div>
      </div>
    </section>
  );
}
