import React from 'react';
import { ArrowUp, ShieldCheck, Heart, FileCode } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenBispChecker: () => void;
  onOpenBloggerFixer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenBispChecker,
  onOpenBloggerFixer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#022f1a] text-[#cfe6d8] mt-12 border-t-4 border-[#046a38]">
      <div className="max-w-[1140px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#046a38] text-white flex items-center justify-center font-black text-sm">
                SH
              </span>
              <h3 className="text-white text-lg font-bold">shmscheem</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#cfe6d8]/90 leading-relaxed mb-4">
              Pakistani government schemes (BISP 8171, Ehsaas, Sehat Card, Punjab schemes) ki mukammal aur mustanad maloomat — eligibility, documents, apply ka tareeqa aur updates Roman Urdu mein.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Mustanad &amp; Verified Maloomat</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white text-base font-bold mb-3 pb-1 border-b border-emerald-800">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <button
                  onClick={onOpenBispChecker}
                  className="text-[#cfe6d8] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>&rarr;</span>
                  <span>BISP 8171 Online Check</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Sehat-Card')}
                  className="text-[#cfe6d8] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>&rarr;</span>
                  <span>Sehat Sahulat Card 2026</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('Punjab')}
                  className="text-[#cfe6d8] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>&rarr;</span>
                  <span>Punjab Housing &amp; Kisan Schemes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBloggerFixer}
                  className="text-amber-300 hover:text-amber-200 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>★</span>
                  <span>Blogger XML Theme Doctor &amp; Code</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white text-base font-bold mb-3 pb-1 border-b border-emerald-800">
              Sarkari Disclaimer
            </h3>
            <p className="text-xs text-[#cfe6d8]/80 leading-relaxed mb-3">
              Ye portal koi sarkari website nahi hai. Tamam maloomat aam awami rehbari ke liye hai — apply ya faisla karne se pehle hamesha official government website ya 8171 helpline se tasdeeq karein. Hum aap ka CNIC, PIN ya personal data kabhi collect ya store nahi karte.
            </p>
            <div className="bg-[#034d29] p-2.5 rounded-lg border border-emerald-800 text-xs text-emerald-200">
              <b>Official BISP Helpline:</b> 0800-26477 (Toll-Free)
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-3.5 text-xs text-[#a9c9b8] bg-[#022414]">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <span>Copyright © 2026 <b>shmscheem</b> — Jumla haqooq mehfooz hain.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#cfe6d8] hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Oopar Jayein</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
