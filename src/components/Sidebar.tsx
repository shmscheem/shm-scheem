import React from 'react';
import { Search, ShieldAlert, Award, FileCode, ExternalLink, PhoneCall, CheckCircle2 } from 'lucide-react';
import { SchemePost, SCHEME_CATEGORIES, OFFICIAL_SMS_CODES } from '../data/schemesData';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  popularPosts: SchemePost[];
  onSelectPost: (post: SchemePost) => void;
  onOpenBloggerFixer: () => void;
  onOpenBispChecker: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  popularPosts,
  onSelectPost,
  onOpenBloggerFixer,
  onOpenBispChecker,
}) => {
  return (
    <aside className="space-y-5">
      {/* 1. Blogger Fix Alert Callout Widget */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-stone-950 p-4 rounded-xl shadow-sm border border-amber-400">
        <div className="flex items-center gap-2 font-black text-sm mb-1">
          <FileCode className="w-5 h-5 text-stone-900" />
          <span>Blogger Theme Doctor</span>
        </div>
        <p className="text-xs text-stone-900 leading-snug mb-3 font-medium">
          Posts na dikhne aur layout kharab hone ka theek shuda XML code tayyar hai!
        </p>
        <button
          onClick={onOpenBloggerFixer}
          className="w-full bg-stone-950 hover:bg-stone-900 text-amber-300 font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow cursor-pointer"
        >
          <span>Fixed XML Code Dekhein</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. Official Search Widget */}
      <div className="bg-white border border-[#d8e2da] rounded-xl p-4 shadow-2xs">
        <h3 className="text-base font-bold text-[#034d29] pb-2 mb-3 border-b-2 border-[#046a38]">
          Talash Karein
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Scheme ka naam likhein..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full text-xs py-2.5 pl-3 pr-8 border border-[#d8e2da] rounded-lg focus:outline-none focus:border-[#046a38]"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
        </div>
      </div>

      {/* 3. Quick 8171 Live Checker Widget */}
      <div className="bg-[#f0f8f3] border-l-4 border-[#046a38] border-y border-r border-[#c9e3d2] rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <b className="text-sm text-[#034d29]">8171 CNIC Portal</b>
          <span className="text-[10px] font-bold bg-[#046a38] text-white px-2 py-0.5 rounded">Free</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">
          BISP Kafaalat 13,500 qist aur NSER survey record online tasdeeq karein.
        </p>
        <button
          onClick={onOpenBispChecker}
          className="w-full bg-[#046a38] hover:bg-[#034d29] text-white font-bold text-xs py-2 px-3 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          Online Status Check Karein &rarr;
        </button>
      </div>

      {/* 4. About shmscheem Box */}
      <div className="bg-gradient-to-br from-[#f0f9f3] to-white border border-[#d8e2da] border-l-4 border-l-[#046a38] rounded-xl p-4 shadow-2xs">
        <h3 className="text-base font-bold text-[#034d29] mb-2">
          shmscheem Kya Hai?
        </h3>
        <p className="text-xs text-[#1c2420] leading-relaxed mb-2.5">
          <b>shmscheem</b> Pakistani government schemes ki A-Z maloomat ka mustanad zariya hai. Har scheme ki eligibility, apply ka tareeqa, zaroori documents aur latest updates Roman Urdu mein.
        </p>
        <p className="text-[11px] text-[#5c6b62] leading-tight">
          <b>Note:</b> Hum koi sarkari idara nahi — maloomat sirf rehbari ke liye hai, faisla hamesha official website se verify kar ke karein.
        </p>
      </div>

      {/* 5. Official SMS Codes */}
      <div className="bg-white border border-[#d8e2da] rounded-xl p-4 shadow-2xs">
        <h3 className="text-base font-bold text-[#034d29] pb-2 mb-3 border-b-2 border-[#046a38]">
          Sarkari SMS Verification Codes
        </h3>
        <div className="space-y-2">
          {OFFICIAL_SMS_CODES.map((item, i) => (
            <div key={i} className="text-xs border-b border-gray-100 pb-2 last:border-none last:pb-0">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-[#046a38] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  {item.code}
                </span>
                <span className="text-[10px] text-gray-500">{item.dept}</span>
              </div>
              <p className="text-[11px] text-gray-700 mt-1 leading-snug">
                {item.service}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-red-50 border border-red-200 rounded p-2 text-[11px] text-red-800 flex items-start gap-1.5">
          <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span>
            <b>Khabardaar:</b> Kisi 11-digit mobile number se anay walay SMS par paise transfer na karein, sirf 8171/8500 official hain!
          </span>
        </div>
      </div>

      {/* 6. Popular Posts (Maqbool Posts) */}
      <div className="bg-white border border-[#d8e2da] rounded-xl p-4 shadow-2xs">
        <h3 className="text-base font-bold text-[#034d29] pb-2 mb-3 border-b-2 border-[#046a38]">
          Maqbool Posts
        </h3>
        <ul className="space-y-3 list-none p-0 m-0">
          {popularPosts.map((post) => (
            <li
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer border-b border-dashed border-gray-200 pb-2.5 last:border-none last:pb-0"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#046a38]/10 text-[#046a38] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  ★
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#046a38] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[10px] text-[#5c6b62] block mt-0.5">
                    {post.date}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 7. Categories / Labels */}
      <div className="bg-white border border-[#d8e2da] rounded-xl p-4 shadow-2xs">
        <h3 className="text-base font-bold text-[#034d29] pb-2 mb-3 border-b-2 border-[#046a38]">
          Categories (Labels)
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {SCHEME_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#046a38] text-white border-[#046a38] font-bold'
                    : 'bg-[#f2f6f3] text-[#1c2420] border-[#d8e2da] hover:bg-[#046a38] hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
