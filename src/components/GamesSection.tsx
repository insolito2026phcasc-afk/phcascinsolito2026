import React, { useState } from 'react';
import { 
  Trophy, 
  Search, 
  Users, 
  User, 
  ExternalLink, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  LayoutGrid,
  Table as TableIcon,
  Copy,
  Check,
  FileSpreadsheet
} from 'lucide-react';
import { DEPARTMENTS, GameEvent } from '../data/festivalData';

interface GamesSectionProps {
  games: GameEvent[];
  selectedDepartment: string;
  onSelectDepartment: (deptId: string) => void;
  onOpenGameDetails: (game: GameEvent) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({
  games,
  selectedDepartment,
  onSelectDepartment,
  onOpenGameDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [copiedPhoneKey, setCopiedPhoneKey] = useState<string | null>(null);
  const [expandedRulesId, setExpandedRulesId] = useState<string | null>(null);

  // Filter games based on search, department, and game type
  const filteredGames = games.filter((game) => {
    const matchesDept =
      selectedDepartment === 'all' || game.departmentId === selectedDepartment;
    const matchesType =
      selectedType === 'all' ||
      (selectedType === 'Solo' && (game.type === 'Solo' || game.type.includes('Solo'))) ||
      (selectedType === 'Group' && (game.type === 'Group' || game.type === 'Team' || game.type === 'Duo' || game.type.includes('Group')));
    const matchesSearch =
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.departmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (game.heads && game.heads.some((h) => 
        h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.phone.includes(searchQuery)
      ));

    return matchesDept && matchesType && matchesSearch;
  });

  const handleCopyPhone = (key: string, phone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhoneKey(key);
    setTimeout(() => setCopiedPhoneKey(null), 2500);
  };

  const toggleRules = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedRulesId(expandedRulesId === id ? null : id);
  };

  return (
    <section id="games" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>12 Games Directory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Insolito 2026 Games Guide
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Complete game rules, descriptions, pricing, game heads, and direct Google Form registration links.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-slate-500 font-semibold">Layout:</span>
            <div className="flex p-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'cards'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                  viewMode === 'table'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Overview Table View"
              >
                <TableIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Table Overview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by game name (e.g. Hill Climbing, Cups Mania, Poetry)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Type selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedType === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Types
              </button>
              <button
                onClick={() => setSelectedType('Solo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedType === 'Solo'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Solo
              </button>
              <button
                onClick={() => setSelectedType('Group')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedType === 'Group'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Group / Duo
              </button>
            </div>
          </div>

          {/* Department Tabs Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
            <button
              onClick={() => onSelectDepartment('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold shrink-0 transition ${
                selectedDepartment === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              All Departments ({games.length})
            </button>
            {DEPARTMENTS.map((dept) => {
              const count = games.filter((g) => g.departmentId === dept.id).length;
              const isSelected = selectedDepartment === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => onSelectDepartment(dept.id)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold shrink-0 transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <span>{dept.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter and Excel CSV helper notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 mb-4 px-1 gap-2">
          <span>
            Showing <strong className="text-slate-900">{filteredGames.length}</strong> events
            {selectedDepartment !== 'all' && ` in ${selectedDepartment.toUpperCase()}`}
          </span>
        </div>

        {/* View Mode 1: Cards View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => {
              const isRulesExpanded = expandedRulesId === game.id;

              return (
                <div
                  key={game.id}
                  className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md group"
                >
                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    {/* Top tags: Department & Type */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        game.departmentId === 'arts' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                        game.departmentId === 'commerce' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {game.departmentName} Department
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          {game.type === 'Solo' ? <User className="w-3 h-3 text-slate-500" /> : <Users className="w-3 h-3 text-slate-500" />}
                          {game.type} ({game.playerCount})
                        </span>
                      </div>
                    </div>

                    {/* Game Name & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-rose-600 transition-colors">
                        {game.name}
                      </h3>
                      <div className="shrink-0 text-right">
                        {game.pricingTiers && game.pricingTiers.length > 1 ? (
                          <div className="px-2.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-end">
                            <span className="font-extrabold text-xs text-emerald-800">
                              Solo: <strong className="text-sm font-black">₹{game.pricingTiers[0].price}</strong>
                            </span>
                            <span className="font-extrabold text-xs text-emerald-900 border-t border-emerald-200/80 pt-0.5 mt-0.5">
                              Group (2): <strong className="text-sm font-black">₹{game.pricingTiers[1].price}</strong>
                            </span>
                          </div>
                        ) : (
                          <div className="px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-black text-sm flex items-center gap-1">
                            <span>₹{game.price}</span>
                            <span className="text-[10px] font-normal text-emerald-600">fee</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {game.description}
                    </p>

                    {/* Rules Preview & Toggle */}
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 mb-4">
                      <div 
                        onClick={(e) => toggleRules(game.id, e)}
                        className="flex items-center justify-between cursor-pointer text-xs font-bold text-slate-800 hover:text-slate-950"
                      >
                        <span className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Rules & Format ({game.rules.length})</span>
                        </span>
                        {isRulesExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>

                      {/* Rules list */}
                      <ul className="mt-2.5 space-y-1.5 text-xs text-slate-600">
                        {(isRulesExpanded ? game.rules : game.rules.slice(0, 2)).map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-rose-600 text-[10px] mt-0.5">•</span>
                            <span className="line-clamp-2">{rule}</span>
                          </li>
                        ))}
                      </ul>

                      {game.rules.length > 2 && !isRulesExpanded && (
                        <button
                          onClick={(e) => toggleRules(game.id, e)}
                          className="mt-2 text-[11px] font-bold text-rose-600 hover:text-rose-700 underline"
                        >
                          + View {game.rules.length - 2} more rules
                        </button>
                      )}
                    </div>

                    {/* Game Head(s) Info with individual Copy Number button */}
                    <div className="pt-3 border-t border-slate-100 text-xs">
                      <div className="text-[11px] text-slate-500 font-semibold mb-2">
                        {game.heads.length > 1 ? `Game Heads (${game.heads.length}):` : 'Game Head:'}
                      </div>

                      <div className="space-y-2">
                        {game.heads.map((head, idx) => {
                          const copyKey = `card-${game.id}-${idx}`;
                          return (
                            <div key={idx} className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                              <div className="min-w-0">
                                <div className="font-bold text-slate-900 truncate">{head.name}</div>
                                <div className="font-mono text-slate-600 text-xs">{head.phone}</div>
                              </div>

                              <button
                                onClick={(e) => handleCopyPhone(copyKey, head.phone, e)}
                                className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1 transition shrink-0 shadow-2xs"
                                title={`Copy ${head.name}'s phone number`}
                              >
                                {copiedPhoneKey === copyKey ? (
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

                  {/* Card Footer / Registration Form Action */}
                  <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
                    <button
                      onClick={() => onOpenGameDetails(game)}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition shadow-2xs"
                    >
                      Details
                    </button>

                    <a
                      href={game.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs shadow-xs text-center flex items-center justify-center gap-1.5 transition"
                    >
                      <span>
                        {game.pricingTiers && game.pricingTiers.length > 1
                          ? `Register (Solo: ₹${game.pricingTiers[0].price} / Group: ₹${game.pricingTiers[1].price})`
                          : 'Register via Form'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View Mode 2: Table Overview */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-4">Event Name</th>
                  <th className="py-4 px-4">Department</th>
                  <th className="py-4 px-3">Type</th>
                  <th className="py-4 px-3">Players</th>
                  <th className="py-4 px-3">Entry Fee</th>
                  <th className="py-4 px-4">Description</th>
                  <th className="py-4 px-4">Game Head Contact</th>
                  <th className="py-4 px-4 text-center">Registration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredGames.map((game) => (
                  <tr key={game.id} className="hover:bg-slate-50 transition">
                    <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                      <div>{game.name}</div>
                      <button
                        onClick={() => onOpenGameDetails(game)}
                        className="text-[11px] text-rose-600 hover:underline mt-0.5 inline-block font-semibold"
                      >
                        View Full Rules
                      </button>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                        {game.departmentName}
                      </span>
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        game.type.includes('Solo') && game.type.includes('Group') ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                        game.type === 'Solo' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'
                      }`}>
                        {game.type}
                      </span>
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap text-xs text-slate-600">
                      {game.playerCount}
                    </td>
                    <td className="py-4 px-3 whitespace-nowrap">
                      {game.pricingTiers && game.pricingTiers.length > 1 ? (
                        <div className="text-xs space-y-0.5">
                          <div className="font-bold text-emerald-800">Solo: ₹{game.pricingTiers[0].price}</div>
                          <div className="font-bold text-emerald-900">Group (2): ₹{game.pricingTiers[1].price}</div>
                        </div>
                      ) : (
                        <span className="font-black text-emerald-700">₹{game.price}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-600 max-w-xs line-clamp-3">
                      {game.description}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-xs">
                      <div className="space-y-2">
                        {game.heads.map((head, idx) => {
                          const copyKey = `table-${game.id}-${idx}`;
                          return (
                            <div key={idx} className="border-b border-slate-100 last:border-b-0 pb-1.5 last:pb-0">
                              <div className="font-bold text-slate-900">{head.name}</div>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="font-mono text-slate-600 text-[11px]">{head.phone}</span>
                                <button
                                  onClick={(e) => handleCopyPhone(copyKey, head.phone, e)}
                                  className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600"
                                  title={`Copy ${head.name}'s phone number`}
                                >
                                  {copiedPhoneKey === copyKey ? (
                                    <Check className="w-3 h-3 text-emerald-600" />
                                  ) : (
                                    <Copy className="w-3 h-3" />
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap text-center">
                      <a
                        href={game.googleFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs inline-flex items-center gap-1 shadow-2xs"
                      >
                        <span>Register</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
