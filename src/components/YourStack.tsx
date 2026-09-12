import { type Technology } from "./TechCard";
import { TbTrash } from "react-icons/tb";

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (tech: Technology) => void;
  onClearAll: () => void;
}

// props type is declared
export default function YourStack({ selectedTechs, onRemove,onClearAll,}: YourStackProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky bottom-6">
      <div className="mb-4"><h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
        <p className="text-xs text-gray-400 font-medium">
          {selectedTechs.length}{" "}{selectedTechs.length === 1 ? "Technology" : "Technologies"} Selected</p>
      </div>

      
      <div className="space-y-2 mb-6 max-h-80 overflow-y-auto">
        {selectedTechs.length === 0 ? (
          <div className="text-center py-6 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">
            No technologies selected yet.
          </div>
        ) : (
          selectedTechs.map((tech) => (
            <div key={tech.id} className="flex items-center justify-between p-2.5 bg-gray-50/80 border border-gray-100 rounded-xl" >
              <div className="flex items-center gap-3">
                <img src={tech.icon}alt={tech.name}className="w-6 h-6 object-contain"/>
                <span className="text-sm font-semibold text-slate-800">{tech.name}</span>
              </div>
              <button type="button" onClick={() => onRemove(tech)} aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-red-500 font-bold text-lg px-2"><TbTrash className="text-xl"/>
              </button>
            </div>
          ))
        )}
      </div>
      {selectedTechs.length > 0 && (
        <button onClick={onClearAll} 
        className="w-full py-2.5 border border-red-200 text-red-500 hover:bg-red-50 font-medium text-sm rounded-xl transition-colors">Remove All
        </button>
      )}
    </div>
  );
}
