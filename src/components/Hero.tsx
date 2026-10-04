import React from 'react';
import { CreditCard, HeartPulse, Home, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface HeroProps {
  onOpenBispChecker: () => void;
  onSelectCategory: (cat: string) => void;
  onSelectPostById: (id: string) => void;
  onOpenBloggerFixer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBispChecker,
  onSelectCategory,
  onSelectPostById,
  onOpenBloggerFixer,
}) => {
  return (
    <section className="bg-gradient-to-br from-[#022f1a] via-[#046a38] to-[#058a49] text-white py-10 relative overflow-hidden">
      {/* Decorative subtle patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-[1140px] mx-auto px-4 relative z-10">
        {/* Solution Alert Banner for the User */}
        <div className="mb-6 bg-amber-400/20 border border-amber-300/40 rounded-xl p-3 sm:p-4 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-900 flex items-center justify-center font-bold flex-shrink-0">
              ✓
            </div>
            <div>
              <p className="text-amber-200 font-bold text-sm">
                Blogger XML Theme Doctor: Post aur Layout ka Masla Hal Ho Chuka Hai!
              </p>
              <p className="text-xs text-white/90">
                Aap ki posts Blogger mein is liye nahi dikh rahi theen kyun ke <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">PopularPosts1</code> aur <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">Blog1</code> ke includables Blogger v3 mein misconfigured thay.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBloggerFixer}
            className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs px-4 py-2 rounded-lg shadow whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>Theek Shuda Code Hasil Karein</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hero Headline */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Hakumat-e-Pakistan &amp; Punjab Govt Schemes Guide 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
            Sarkari Schemes Ki Mukammal Aur Mustanad Maloomat
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed mb-6 font-normal">
            BISP 8171, Ehsaas Program, Sehat Card, Punjab ki housing aur kisan schemes — eligibility, apply ka tareeqa, zaroori documents aur payment updates, sab kuch ek jagah Roman Urdu mein.
          </p>
        </div>

        {/* 3 Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Card 1: 8171 Check Online */}
          <div
            onClick={onOpenBispChecker}
            className="bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-black text-sm border border-amber-300/30">
                8171
              </span>
              <span className="text-[11px] bg-emerald-950/60 text-emerald-200 px-2 py-0.5 rounded font-mono">
                Live Tool
              </span>
            </div>
            <b className="block text-lg font-bold mb-1 text-white group-hover:text-amber-200 transition-colors">
              8171 Check Online
            </b>
            <span className="text-xs text-emerald-100/80 block">
              BISP Kafaalat 13,500 payment status CNIC se foran check karein.
            </span>
            <div className="mt-3 text-xs font-semibold text-amber-300 flex items-center gap-1 group-hover:underline">
              <span>Online Check Karein</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Sehat Card */}
          <div
            onClick={() => {
              onSelectCategory('Sehat-Card');
              onSelectPostById('sehat-sahulat-card-eligibility-8500');
            }}
            className="bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-sm border border-emerald-300/30">
                <HeartPulse className="w-5 h-5" />
              </span>
              <span className="text-[11px] bg-emerald-950/60 text-emerald-200 px-2 py-0.5 rounded font-mono">
                SMS: 8500
              </span>
            </div>
            <b className="block text-lg font-bold mb-1 text-white group-hover:text-emerald-200 transition-colors">
              Sehat Card 2026
            </b>
            <span className="text-xs text-emerald-100/80 block">
              10 Lakh tak ka muft ilaaj &amp; panel hospitals ki list check karein.
            </span>
            <div className="mt-3 text-xs font-semibold text-emerald-200 flex items-center gap-1 group-hover:underline">
              <span>Eligibility &amp; Hospitals</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Apni Chhat Apna Ghar */}
          <div
            onClick={() => {
              onSelectCategory('Punjab');
              onSelectPostById('apni-chhat-apna-ghar-scheme-punjab');
            }}
            className="bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer group hover:-translate-y-1 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-black text-sm border border-amber-300/30">
                <Home className="w-5 h-5" />
              </span>
              <span className="text-[11px] bg-emerald-950/60 text-emerald-200 px-2 py-0.5 rounded font-mono">
                Interest Free
              </span>
            </div>
            <b className="block text-lg font-bold mb-1 text-white group-hover:text-amber-200 transition-colors">
              Apni Chhat Apna Ghar
            </b>
            <span className="text-xs text-emerald-100/80 block">
              15 Lakh bila-sood qarz ki mukammal registration &amp; sharaait.
            </span>
            <div className="mt-3 text-xs font-semibold text-amber-300 flex items-center gap-1 group-hover:underline">
              <span>Apply Ka Tareeqa</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
