import React, { useState } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  PhoneCall, 
  BookOpen, 
  ExternalLink,
  Trophy,
  Home
} from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

export type NavigationTab = 'home' | 'games' | 'rules' | 'brochure' | 'contact';

interface NavbarProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Hyperlink to official college website (https://phcasc.ac.in) */}
          <div className="flex items-center gap-3">
            <a 
              href={FESTIVAL_INFO.collegeWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 group focus:outline-none"
              title="Visit Pillai HOC College official website (phcasc.ac.in)"
            >
              {/* College Emblem Crest Logo */}
              <div className="w-18 h-18">
                <img src="https://phcascstudentportal.mes.ac.in/assets/img/PHCASC-logo.png" alt="" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
                    INSOLITO <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">2026</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500 transition-colors hidden sm:inline" />
                </div>
                <p className="text-xs text-slate-500 hidden sm:block font-medium">
                  Pillai HOC College of Arts, Science and Commerce (Autonomous)
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition flex items-center gap-1.5 ${
                currentTab === 'home'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavClick('games')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition flex items-center gap-1.5 ${
                currentTab === 'games'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Games & Registration</span>
            </button>
            <button
              onClick={() => handleNavClick('rules')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition flex items-center gap-1.5 ${
                currentTab === 'rules'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Rules & Regulations</span>
            </button>
            <button
              onClick={() => handleNavClick('brochure')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition flex items-center gap-1.5 ${
                currentTab === 'brochure'
                  ? 'bg-purple-50 text-purple-700 border border-purple-200 shadow-xs'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50/50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Event Brochure</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition flex items-center gap-1.5 ${
                currentTab === 'contact'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Coordinators & Game Heads</span>
            </button>
          </nav>

          {/* Right Action button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('games')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:via-rose-700 hover:to-indigo-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              <span>Register for Games</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('brochure')}
              className="p-2 text-purple-700 bg-purple-50 border border-purple-200 rounded-lg"
              title="Brochure"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-lg">
          <div className="text-xs text-slate-500 px-3 py-1 font-semibold uppercase tracking-wider">
            {FESTIVAL_INFO.college}
          </div>
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
              currentTab === 'home' ? 'bg-rose-50 text-rose-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('games')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
              currentTab === 'games' ? 'bg-rose-50 text-rose-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Games & Registration</span>
            <Trophy className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleNavClick('rules')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
              currentTab === 'rules' ? 'bg-rose-50 text-rose-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Rules and Regulations</span>
            <BookOpen className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleNavClick('brochure')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
              currentTab === 'brochure' ? 'bg-purple-50 text-purple-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Official Event Brochure</span>
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-between ${
              currentTab === 'contact' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Coordinators & Game Heads</span>
            <PhoneCall className="w-4 h-4" />
          </button>

          <div className="pt-3 border-t border-slate-200">
            <a
              href={FESTIVAL_INFO.collegeWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl text-xs text-slate-600 bg-slate-100 flex items-center justify-center gap-1.5 font-medium"
            >
              <span>Visit College Website (phcasc.ac.in)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
