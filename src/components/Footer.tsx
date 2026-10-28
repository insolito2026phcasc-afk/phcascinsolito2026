import React from 'react';
import { 
  FileText, 
  MapPin, 
  ExternalLink, 
  ArrowUp,
  Sparkles,
  Trophy,
  Mail
} from 'lucide-react';
import { FESTIVAL_INFO, DEPARTMENTS } from '../data/festivalData';
import { NavigationTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectDepartment: (deptId: 'arts' | 'commerce' | 'science') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectDepartment,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="space-y-3.5">
            <a
              href={FESTIVAL_INFO.collegeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-18 h-18">
                <img src="https://phcascstudentportal.mes.ac.in/assets/img/PHCASC-logo.png" alt="" />
              </div>
              <div>
                <span className="font-black text-base text-slate-900 group-hover:text-rose-600 transition-colors">
                  PHCASC INSOLITO 2026
                </span>
                <p className="text-[11px] text-slate-500 font-medium">
                  {FESTIVAL_INFO.college}
                </p>
              </div>
            </a>

            <p className="text-xs text-slate-600 leading-relaxed">
              Official registration and events portal for the annual inter-collegiate mega festival.
            </p>

            <div className="pt-1">
              <a
                href={FESTIVAL_INFO.collegeWebsite}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-rose-700 hover:text-rose-800 hover:underline flex items-center gap-1"
              >
                <span>Visit Official College Website (phcasc.ac.in)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Department Wings */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              Departments (3)
            </h4>
            <ul className="space-y-2">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <button
                    onClick={() => {
                      onSelectDepartment(dept.id as 'arts' | 'commerce' | 'science');
                      onNavigate('games');
                    }}
                    className="hover:text-rose-600 transition text-left font-medium"
                  >
                    {dept.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Pages */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              Fest Navigation
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-rose-600 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('games')} className="hover:text-rose-600 transition">
                  Games & Rules Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rules')} className="hover:text-rose-600 transition">
                  Rules and Regulations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('brochure')} className="hover:text-rose-600 transition">
                  Event Brochure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-rose-600 transition">
                  Game Heads Contact Directory
                </button>
              </li>
            </ul>
          </div>

          {/* College Address */}
          <div>
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Pillai HOC Educational Campus, Rasayani, Tal. Khalapur, Dist. Raigad, Maharashtra 410207</span>
              </div>
              <div className="pt-2 flex items-start gap-2">
                <Mail className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-bold text-slate-700">Official Fest Inquiries:</span>
                  <a
                    href={`mailto:${FESTIVAL_INFO.email}?subject=PHCASC%20Insolito%202026%20Query`}
                    className="font-mono text-indigo-600 hover:text-indigo-800 hover:underline font-semibold block"
                  >
                    {FESTIVAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-500">
              © 2026 Pillai HOC College of Arts, Science and Commerce (Autonomous). All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 flex items-center gap-1.5 transition shadow-2xs"
            title="Back to Top"
          >
            <span className="font-semibold text-xs">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
