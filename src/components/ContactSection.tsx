import React, { useState } from 'react';
import { 
  PhoneCall, 
  Search, 
  Copy, 
  Check, 
  Users, 
  Mail, 
  Send, 
  ShieldCheck, 
  FileSpreadsheet,
  Sparkles
} from 'lucide-react';
import { 
  DEPARTMENTS, 
  GameEvent, 
  FESTIVAL_INFO, 
  OrganizingCoordinator,
  ORGANIZING_COMMITTEE_COORDINATORS 
} from '../data/festivalData';

interface ContactSectionProps {
  games: GameEvent[];
  organizingCoordinators?: OrganizingCoordinator[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  games, 
  organizingCoordinators = ORGANIZING_COMMITTEE_COORDINATORS 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'organizing' | 'arts' | 'commerce' | 'science'>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Filter organizing committee student coordinators
  const filteredOrganizers = organizingCoordinators.filter((oc) => {
    if (filterCategory !== 'all' && filterCategory !== 'organizing') return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      oc.name.toLowerCase().includes(q) ||
      oc.role.toLowerCase().includes(q) ||
      oc.responsibility.toLowerCase().includes(q) ||
      oc.phone.includes(searchQuery)
    );
  });

  // Filter department game heads
  const filteredGames = games.filter((g) => {
    if (filterCategory === 'organizing') return false;
    if (filterCategory !== 'all' && g.departmentId !== filterCategory) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.departmentName.toLowerCase().includes(q) ||
      (g.heads && g.heads.some((h) =>
        h.name.toLowerCase().includes(q) ||
        h.phone.includes(searchQuery)
      ))
    );
  });

  const handleCopyPhone = (key: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FESTIVAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const totalContacts = organizingCoordinators.length + games.reduce((acc, g) => acc + g.heads.length, 0);

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Official Fest Directory & Helpdesk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Coordinators & Game Heads Contact Directory
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Contact numbers of student coordinators in the organising committee and game heads of all 12 games. Use the copy button to copy any contact number.
          </p>
        </div>

        {/* ================= OFFICIAL EVENT QUERY EMAIL BANNER ================= */}
        <div className="mb-10 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50 border-2 border-indigo-200/80 p-6 sm:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-start gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20 mx-auto md:mx-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[11px] font-bold">
                      Official Event Email Inquiries
                    </span>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">•</span>
                    <span className="text-xs text-slate-600 font-medium hidden sm:inline">Ask questions or send doubts</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    Have queries regarding games or fest registration?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Students can send emails to ask any questions related to rules, schedule, fees, or event guidelines. The organising committee team will reply promptly to your queries.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-indigo-950 font-mono text-xs sm:text-sm font-bold shadow-2xs">
                    <span>{FESTIVAL_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Copy Email and Mailto */}
              <div className="flex sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0 justify-center">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-900 border border-indigo-300 text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition"
                  title="Copy official inquiry email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Copy Email ID</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${FESTIVAL_INFO.email}?subject=PHCASC%20Insolito%202026%20Query`}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow-xs transition"
                  title="Send inquiry email now"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 max-w-5xl mx-auto">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coordinator, game head, or phone..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs scrollbar-none">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition ${
                filterCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Directory
            </button>
            <button
              onClick={() => setFilterCategory('organizing')}
              className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition flex items-center gap-1 ${
                filterCategory === 'organizing'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-indigo-700 hover:text-indigo-900 border border-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Organising Committee ({organizingCoordinators.length})</span>
            </button>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setFilterCategory(dept.id)}
                className={`px-3 py-1.5 rounded-lg font-bold shrink-0 transition ${
                  filterCategory === dept.id
                    ? dept.id === 'arts' ? 'bg-rose-600 text-white shadow-xs' :
                      dept.id === 'commerce' ? 'bg-amber-600 text-white shadow-xs' :
                      'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {dept.shortName} Heads
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter and Excel CSV helper notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 mb-6 max-w-5xl mx-auto px-1 gap-2">
          <span>
            Showing <strong className="text-slate-900">{filteredOrganizers.length + filteredGames.length}</strong> listings in directory
          </span>
        </div>

        {/* ================= SECTION 1: STUDENT COORDINATORS (ORGANISING COMMITTEE) ================= */}
        {filteredOrganizers.length > 0 && (
          <div className="mb-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                    Student Coordinators (Organising Committee)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-[11px] font-bold">
                    {filteredOrganizers.length} Members
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  General fest administration, registration desk help, logistics, and inter-collegiate student queries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredOrganizers.map((coord) => {
                const copyKey = `org-${coord.id}`;
                return (
                  <div
                    key={coord.id}
                    className="p-5 rounded-2xl bg-white border border-indigo-100 hover:border-indigo-300 transition-all shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                          Organising Committee
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">
                          {coord.role}
                        </span>
                      </div>

                      <h4 className="font-black text-slate-900 text-base">
                        {coord.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        {coord.responsibility}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">
                          Mobile Contact
                        </span>
                        <span className="text-sm font-mono font-bold text-slate-900">
                          {coord.phone}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopyPhone(copyKey, coord.phone)}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-800 border border-slate-200 hover:border-indigo-200 text-xs font-bold flex items-center gap-1.5 transition shadow-2xs shrink-0"
                        title={`Copy ${coord.name}'s phone number`}
                      >
                        {copiedKey === copyKey ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= SECTION 2: DEPARTMENT GAME HEADS (12 EVENTS) ================= */}
        {filteredGames.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                    Department Game Heads (12 Games)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    {filteredGames.length} Games
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct student heads for specific game rules, reporting times, apparatus, and round queries.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                        game.departmentId === 'arts' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                        game.departmentId === 'commerce' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {game.departmentName} Department
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {game.type}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {game.name}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs">
                    <div className="text-[11px] text-slate-500 font-semibold mb-2">
                      {game.heads.length > 1 ? `Game Heads (${game.heads.length}):` : 'Game Head:'}
                    </div>

                    <div className="space-y-2">
                      {game.heads.map((head, idx) => {
                        const copyKey = `contact-${game.id}-${idx}`;
                        return (
                          <div key={idx} className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="min-w-0">
                              <div className="text-sm font-bold text-slate-900 truncate">{head.name}</div>
                              <div className="text-xs font-mono text-slate-600 mt-0.5">{head.phone}</div>
                            </div>

                            <button
                              onClick={() => handleCopyPhone(copyKey, head.phone)}
                              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1.5 transition shrink-0 shadow-2xs"
                              title={`Copy ${head.name}'s phone number`}
                            >
                              {copiedKey === copyKey ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-emerald-700">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty Search Fallback */}
        {filteredOrganizers.length === 0 && filteredGames.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 max-w-xl mx-auto">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900">No coordinators found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another coordinator name, game name, or reset the filter.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
              className="mt-3 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
