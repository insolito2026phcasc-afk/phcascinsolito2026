import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle 
} from 'lucide-react';
import { GENERAL_RULES } from '../data/festivalData';

const FAQS = [
  {
    q: 'Can students from other colleges participate in Insolito 2026?',
    a: 'Yes! Insolito is a premier inter-collegiate festival open to bona-fide college students across universities and colleges.',
  },
  {
    q: 'Is on-the-spot registration available on the day of the fest?',
    a: 'Yes, spot registrations are permitted at the campus helpdesk strictly until 30 minutes prior to the respective event scheduled start time, subject to slot availability.',
  },
  {
    q: 'Can one participant register for multiple games across departments?',
    a: 'Yes, as long as the time slots of the selected games do not clash.',
  },
  {
    q: 'What should I carry with me on the day of the event?',
    a: 'You must carry your valid College Identity Card (or fee receipt) along with your Google Form registration confirmation.',
  },
];

export const RulesSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="rules" className="py-12 sm:py-16 bg-slate-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Event Guidelines</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Rules and Regulations of the Event
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            All registered participants must strictly comply with the following instructions to ensure fair play, safety, and campus decorum.
          </p>
        </div>

        {/* General Rules Box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs max-w-5xl mx-auto mb-12">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4 mb-6">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center font-bold">
              ✓
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              General Rules and Regulations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GENERAL_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-white text-slate-700 text-xs font-bold flex items-center justify-center border border-slate-200">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {rule.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-950">Important Notice:</strong> College ID cards and receipts are compulsory. Participants must adhere to the instructions. Do not harm any game property.
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        

      </div>
    </section>
  );
};
