import { FaStar } from "react-icons/fa";

export interface Technology {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  badge: string;
  badgeColor: string;
  rating: number;
  icon: string;
}

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onToggle: (tech: Technology) => void;
}

export default function TechCard({ tech, isAdded, onToggle }: TechCardProps) {
  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col justify-between rounded-xl">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center p-1 border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" /></div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${tech.badgeColor}`}>{tech.badge}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">{tech.description}</p>
      </div>
      
        {/* tech category star icon change */}
      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 border-t border-gray-50 pt-3">
          <span className="font-medium text-gray-600">{tech.category}</span>
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tech.level}</span>
          <span className="text-amber-500 font-semibold flex items-center gap-1"><FaStar />{tech.rating.toFixed(1)}</span>
        </div>

        <button type="button" onClick={() => onToggle(tech)} className={`btn btn-sm w-full normal-case font-medium rounded-lg transition-colors 
          ${isAdded ? "bg-green-200 text-green-600 font-bold hover:bg-green-100 border-none" : "bg-slate-900 hover:bg-slate-800 text-white border-none"}`}
          disabled={isAdded}>{isAdded ? "Added" : "Add to Stack"}</button>
      </div>
    </div>
  );
}
