import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  ExternalLink, 
  Copy, 
  Check
} from 'lucide-react';
import { GameEvent, FESTIVAL_INFO } from '../data/festivalData';

interface GameDetailsModalProps {
  game: GameEvent | null;
  onClose: () => void;
}

export const GameDetailsModal: React.FC<GameDetailsModalProps> = ({
  game,
  onClose,
}) => {
  const [copiedHeadIndex, setCopiedHeadIndex] = useState<number | null>(null);

  if (!game) return null;

  const handleCopyPhone = (index: number, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedHeadIndex(index);
    setTimeout(() => setCopiedHeadIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                game.departmentId === 'arts' ? 'bg-rose-100 text-rose-800' :
                game.departmentId === 'commerce' ? 'bg-amber-100 text-amber-800' :
                'bg-emerald-100 text-emerald-800'
              }`}>
                {game.departmentName} Department
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                {game.type} ({game.playerCount})
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {game.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-sm text-slate-700">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block font-semibold">Registration Fee</span>
              {game.pricingTiers && game.pricingTiers.length > 1 ? (
                <div className="mt-0.5 space-y-0.5">
                  <div className="text-sm font-black text-emerald-800">Solo: ₹{game.pricingTiers[0].price}</div>
                  <div className="text-sm font-black text-emerald-900">Group (2): ₹{game.pricingTiers[1].price}</div>
                </div>
              ) : (
                <span className="text-xl font-black text-emerald-700">₹{game.price}</span>
              )}
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-500 block font-semibold">Participation Format</span>
              <span className="text-sm font-bold text-slate-900">{game.type} ({game.playerCount})</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-500 block font-semibold">Department</span>
              <span className="text-sm font-bold text-slate-900">{game.departmentName}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Event Description
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700">
              {game.description}
            </div>
          </div>

          {/* Complete Rules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-rose-600" />
              <span>Full Rules & Format Guidelines</span>
            </h4>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 divide-y divide-slate-200/80">
              {game.rules.map((rule, idx) => (
                <div key={idx} className="p-3.5 flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Game Head(s) Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {game.heads.length > 1 ? `Student Game Heads (${game.heads.length})` : 'Student Game Head'}
            </h4>
            <div className={`grid gap-3 ${
              game.heads.length >= 3
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : game.heads.length === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1'
            }`}>
              {game.heads.map((head, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between gap-2.5">
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-500 block font-semibold truncate">
                      {game.heads.length > 1 ? `Game Head ${idx + 1}` : 'Coordinator'}
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block leading-tight truncate">{head.name}</strong>
                    <span className="text-xs text-slate-600 block font-mono mt-0.5 truncate">{head.phone}</span>
                  </div>

                  <button
                    onClick={() => handleCopyPhone(idx, head.phone)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition shrink-0"
                    title={`Copy ${head.name}'s phone number`}
                  >
                    {copiedHeadIndex === idx ? (
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
              ))}
            </div>
          </div>

          {/* Inquiry reminder note */}
          <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-slate-600 flex items-center gap-2">
            <span>
              Have queries or need help registering? Email the organising committee at{' '}
              <a 
                href={`mailto:${FESTIVAL_INFO.email}?subject=Query%20about%20${encodeURIComponent(game.name)}`} 
                className="font-bold text-indigo-700 underline hover:text-indigo-900"
              >
                {FESTIVAL_INFO.email}
              </a>
            </span>
          </div>

        </div>

        {/* Modal Footer / Registration Link */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition"
          >
            Close
          </button>
          <a
            href={game.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black text-xs shadow-xs flex items-center gap-1.5 transition"
          >
            <span>
              {game.pricingTiers && game.pricingTiers.length > 1
                ? `Open Google Registration Form (Solo: ₹${game.pricingTiers[0].price} / Group: ₹${game.pricingTiers[1].price})`
                : `Open Google Registration Form (₹${game.price})`}
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
