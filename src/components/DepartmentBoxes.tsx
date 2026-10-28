import React from 'react';
import { 
  Palette, 
  Briefcase, 
  FlaskConical, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { DEPARTMENTS, GameEvent } from '../data/festivalData';

interface DepartmentBoxesProps {
  games: GameEvent[];
  onSelectDepartmentAndNavigate: (deptId: 'arts' | 'commerce' | 'science') => void;
}

const DEPT_ICONS: Record<string, React.ReactNode> = {
  'arts': <Palette className="w-7 h-7 text-rose-600" />,
  'commerce': <Briefcase className="w-7 h-7 text-amber-600" />,
  'science': <FlaskConical className="w-7 h-7 text-emerald-600" />,
};

export const DepartmentBoxes: React.FC<DepartmentBoxesProps> = ({
  games,
  onSelectDepartmentAndNavigate,
}) => {
  const getDeptGameCount = (deptId: string) => {
    return games.filter((g) => g.departmentId === deptId).length;
  };

  return (
    <section id="departments" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-rose-600" />
            <span>Academic Wings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Department-Wise Games Box
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Click on your department to explore game details, rules, registration forms, and game heads.
          </p>
        </div>

        {/* 3 Department Cards Grid (Arts, Commerce, Science) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DEPARTMENTS.map((dept) => {
            const count = getDeptGameCount(dept.id);

            return (
              <div
                key={dept.id}
                onClick={() => onSelectDepartmentAndNavigate(dept.id as 'arts' | 'commerce' | 'science')}
                className="group relative cursor-pointer rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                      {DEPT_ICONS[dept.id]}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {count} Games
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-rose-600 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* "Go to [Dept]" button faithful to the original website screenshot */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-slate-900 transition-all shadow-xs"
                  >
                    <span>Go to {dept.shortName}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
