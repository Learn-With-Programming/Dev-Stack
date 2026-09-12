import { Suspense, use } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";
import Footer from "./components/Footer";
import { type Technology } from "./components/TechCard";
import LoadingTechnology from "./components/LoadingTechnology";

const fetchTechnologies = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) {throw new Error("Failed to fetch data");}
  return res.json();
};

const techPromise = fetchTechnologies();
function TechnologyStack() {
  const technologies = use(techPromise);
  return <TechList technologies={technologies} />;
}

function App() {
  return (
    <div className="min-h-screen  font-sans text-slate-800 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <section className="max-w-7xl mx-auto px-4 md:px-12 mt-12">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900"> Explore the <span className="text-purple-600">Technologies</span></h2>
            <p className="text-sm text-gray-500 mt-1">Pick one technology per category to build your ideal stack.</p>
          </div>

          <Suspense fallback={<LoadingTechnology />}>
            <TechnologyStack />
          </Suspense>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
