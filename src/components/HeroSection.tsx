import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  FileText, 
  Trophy, 
  Users
} from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface HeroSectionProps {
  onOpenBrochure: () => void;
  onExploreGames: () => void;
  onOpenHelpdesk: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBrochure,
  onExploreGames,
  onOpenHelpdesk,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200">
      
      {/* Subtle light background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-amber-200/30 via-rose-100/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top College Badge */}
        <div className="text-center mb-5">
          <a
            href={FESTIVAL_INFO.collegeWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs text-slate-700 shadow-xs hover:border-slate-400 transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900 tracking-wide uppercase text-[11px]">Mahatma Education Society's</span>
            <span className="text-slate-400">•</span>
            <span>PHCASC Rasayani</span>
          </a>
        </div>

        {/* Primary Welcome Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
              PHCASC Insolito 2026
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The grand inter-collegiate festival organized by Pillai HOC College of Arts, Science and Commerce(Autonomous), bringing together Arts, Commerce, and Science participants.
          </p>
        </div>

        {/* Orange Announcement Banner (Faithful to original website screenshot in clean light mode) */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 p-0.5 shadow-md">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-[15px] p-5 sm:p-6 text-center text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner">
                    <Sparkles className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-xl tracking-tight text-white">
                      Registration for Insolito 2026 is now open!
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100 font-medium mt-0.5">
                      Explore department games, view rules, and register your spot today!
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={onExploreGames}
                    className="px-5 py-2.5 rounded-xl bg-white text-orange-700 font-black text-sm hover:bg-amber-50 shadow-sm hover:shadow transition flex items-center gap-1.5"
                  >
                    <span>Click here to register</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Inquiry sub-banner */}
              <div className="mt-3.5 pt-3 border-t border-white/25 flex flex-wrap items-center justify-center gap-1.5 text-xs text-amber-100">
                <span>Have queries or doubts?</span>
                <button
                  onClick={onOpenHelpdesk}
                  className="font-black underline text-white hover:text-amber-200 transition"
                >
                  Contact Organising Committee & Game Heads
                </button>
                <span>or email</span>
                <a
                  href={`mailto:${FESTIVAL_INFO.email}`}
                  className="font-mono font-bold text-white underline hover:text-amber-200 transition"
                >
                  {FESTIVAL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metrics Cards (Cash card removed as requested in prompt item 5) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="flex justify-center mb-1 text-amber-600">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900">12 Games</div>
            <div className="text-xs text-slate-500 font-medium">Solo & Group Competitions</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="flex justify-center mb-1 text-indigo-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900">3 Departments</div>
            <div className="text-xs text-slate-500 font-medium">Arts, Commerce & Science</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">
            <div className="flex justify-center mb-1 text-rose-600">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-slate-900">2 Dec 2026</div>
            <div className="text-xs text-slate-500 font-medium">PHCASC Campus, Rasayani</div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreGames}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm flex items-center gap-2 transition"
          >
            <span>Explore All 12 Games</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-purple-700 border border-purple-300 font-bold text-sm shadow-xs flex items-center gap-2 transition"
          >
            <FileText className="w-4 h-4 text-purple-600" />
            <span>Open Event Brochure</span>
          </button>
        </div>

      </div>
    </section>
  );
};
