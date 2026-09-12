import { useState } from "react";
import TechCard, { type Technology } from "./TechCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechListProps {
  technologies: Technology[];
}

export default function TechList({ technologies }: TechListProps) {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const handleToggle = (tech: Technology) => {
    const exists = selectedTechs.some((item) => item.id === tech.id);
    if (exists) {
      setSelectedTechs(selectedTechs.filter((item) => item.id !== tech.id));
      toast.info(`Removed ${tech.name} from stack`);
    } else {
      setSelectedTechs([...selectedTechs, tech]);
      toast.success(`Added ${tech.name} to stack!`);
    }
  };
  const handleClearAll = () => {
    setSelectedTechs([]);
    toast.warn("Cleared all Technologies");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech) => {const isAdded = selectedTechs.some((item) => item.id === tech.id);
          return ( 
          <TechCard key={tech.id} tech={tech} isAdded={isAdded} onToggle={handleToggle}/>
          );})}
      </div>
      <div className="lg:col-span-1">
        <YourStack selectedTechs={selectedTechs} onRemove={handleToggle}onClearAll={handleClearAll}/>
      </div>
    </div>
  );
}
