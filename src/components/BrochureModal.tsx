import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Sparkles, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { FESTIVAL_INFO, GameEvent } from '../data/festivalData';

interface BrochureModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  games: GameEvent[];
  isStandaloneView?: boolean;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  games,
}) => {
  const [activePage, setActivePage] = useState<number>(1);
  const totalPages = 3;

  const artsCommerceGames = games.filter((g) => g.departmentId === 'arts' || g.departmentId === 'commerce');
  const scienceGames = games.filter((g) => g.departmentId === 'science');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-100 min-h-[85vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Actions */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-slate-900">
                  Official Event Brochure
                </h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  3 Pages
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Pillai HOC College of Arts, Science and Commerce(Autonomous) • Insolito 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
              title="Open or Download uploaded brochure.pdf"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open brochure.pdf</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
              title="Print Brochure"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Horizontal Page Navigation Tabs */}
        <div className="bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xs mb-6 flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActivePage(1)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activePage === 1
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>Page 1: Cover Page</span>
            </button>
            <button
              onClick={() => setActivePage(2)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activePage === 2
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>Page 2: Arts & Commerce</span>
            </button>
            <button
              onClick={() => setActivePage(3)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${
                activePage === 3
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>Page 3: Science Department</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
              disabled={activePage === 1}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-black text-slate-700">
              {activePage} / {totalPages}
            </span>
            <button
              onClick={() => setActivePage((prev) => Math.min(totalPages, prev + 1))}
              disabled={activePage === totalPages}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Landscape/Horizontal Brochure Container (Aspect Ratio ~ 16:9 / Horizontal Canvas) */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-xl overflow-hidden min-h-[520px] transition-all">
          
          {/* ================= PAGE 1: COVER PAGE ================= */}
          {activePage === 1 && (
            <div className="relative p-8 sm:p-14 text-center flex flex-col justify-between min-h-[520px] bg-gradient-to-br from-amber-50 via-white to-rose-50 border-8 border-white">
              
              <div className="max-w-3xl mx-auto space-y-3">
                <p className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
                  Mahatma Education Society's
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  PILLAI HOC COLLEGE OF ARTS, SCIENCE & COMMERCE (AUTONOMOUS)
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Rasayani, Tal. Khalapur, Dist. Raigad • Affiliated to University of Mumbai • NAAC Accredited "A+" Grade in Cycle II
                </p>
              </div>

              <div className="my-8 py-10 px-6 rounded-3xl bg-gradient-to-r from-amber-500 via-rose-600 to-indigo-600 text-white shadow-lg max-w-4xl mx-auto w-full">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider mb-3 backdrop-blur-xs">
                  Annual Inter-Collegiate Mega Fest 2026
                </span>
                <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-none mb-3">
                  INSOLITO 2026
                </h1>
                <p className="text-base sm:text-xl font-bold text-amber-100 max-w-xl mx-auto">
                  Arts • Commerce • Science
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto w-full text-left text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block font-semibold">Fest Dates</span>
                  <strong className="text-slate-900 font-bold text-sm">2 December 2026</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block font-semibold">Venue</span>
                  <strong className="text-slate-900 font-bold text-sm">PHCASC Rasayani</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <span className="text-slate-400 block font-semibold">Total Games</span>
                  <strong className="text-slate-900 font-bold text-sm">12 Official Games</strong>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActivePage(2)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
                >
                  <span>Go to Page 2 (Games Part 1)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= PAGE 2: GAMES PART 1 (ARTS & COMMERCE) ================= */}
          {activePage === 2 && (
            <div className="p-6 sm:p-10 min-h-[520px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Page 2 of 3</span>
                    <h3 className="text-2xl font-black text-slate-900">Arts & Commerce Games Details</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200">
                    6 Events
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {artsCommerceGames.map((game) => (
                    <div
                      key={game.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-bold text-slate-900 text-sm">{game.name}</h4>
                          {game.pricingTiers && game.pricingTiers.length > 1 ? (
                            <span className="text-[11px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Solo: ₹{game.pricingTiers[0].price} | Group (2): ₹{game.pricingTiers[1].price}
                            </span>
                          ) : (
                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              ₹{game.price}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-500 mb-2">
                          {game.departmentName} Department • {game.type} ({game.playerCount})
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {game.description}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs space-y-1">
                        {game.heads.map((h, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-slate-500 font-medium">{game.heads.length > 1 ? `Head ${i + 1}:` : 'Head:'} <strong className="text-slate-900">{h.name}</strong></span>
                            <span className="font-mono text-slate-700 font-semibold text-[11px]">{h.phone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActivePage(1)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Page 1</span>
                </button>
                <button
                  onClick={() => setActivePage(3)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1"
                >
                  <span>Go to Page 3 (Science Games)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= PAGE 3: GAMES PART 2 (SCIENCE DEPARTMENT) ================= */}
          {activePage === 3 && (
            <div className="p-6 sm:p-10 min-h-[520px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Page 3 of 3</span>
                    <h3 className="text-2xl font-black text-slate-900">Science Department Games Details</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    6 Science Events
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {scienceGames.map((game) => (
                    <div
                      key={game.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{game.name}</h4>
                          {game.pricingTiers && game.pricingTiers.length > 1 ? (
                            <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                              Solo: ₹{game.pricingTiers[0].price} | Grp: ₹{game.pricingTiers[1].price}
                            </span>
                          ) : (
                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                              ₹{game.price}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] font-semibold text-slate-500 mb-1.5">
                          {game.type} ({game.playerCount})
                        </div>
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                          {game.description}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-200 text-[11px] space-y-1">
                        {game.heads.map((h, i) => (
                          <div key={i} className="flex items-center justify-between gap-1">
                            <span className="text-slate-600 font-medium truncate">
                              {game.heads.length > 1 ? `H${i + 1}: ` : ''}{h.name}
                            </span>
                            <span className="font-mono text-slate-800 font-semibold shrink-0">{h.phone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActivePage(2)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Page 2 (Arts & Commerce)</span>
                </button>
                <div className="text-xs text-slate-500 font-medium">
                  End of Brochure • PHCASC Insolito 2026
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
