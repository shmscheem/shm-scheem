import React from 'react';
import { Calendar, User, Tag, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SchemePost } from '../data/schemesData';

interface SchemeCardProps {
  post: SchemePost;
  onReadMore: (post: SchemePost) => void;
  onSelectCategory: (cat: string) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ post, onReadMore, onSelectCategory }) => {
  return (
    <article className="bg-white border border-[#d8e2da] rounded-xl p-5 sm:p-6 mb-5 shadow-xs hover:shadow-md transition-shadow">
      {/* Category & Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <button
          onClick={() => onSelectCategory(post.category)}
          className="text-xs font-bold bg-[#f2f6f3] hover:bg-[#046a38] text-[#046a38] hover:text-white px-2.5 py-1 rounded-full border border-[#d8e2da] transition-colors cursor-pointer"
        >
          {post.categoryLabel}
        </button>

        {post.highlightBadge && (
          <span className="text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
            {post.highlightBadge}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-2 text-[#1c2420] hover:text-[#046a38] transition-colors">
        <button
          onClick={() => onReadMore(post)}
          className="text-left cursor-pointer hover:underline"
        >
          {post.title}
        </button>
      </h2>

      {/* Meta Header */}
      <div className="text-xs text-[#5c6b62] mb-3 pb-3 border-b border-[#e0e8e2] flex items-center gap-4 flex-wrap">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-[#046a38]" />
          <span>{post.date}</span>
        </span>
        <span className="flex items-center gap-1">
          <User className="w-3.5 h-3.5 text-[#046a38]" />
          <span>By {post.author}</span>
        </span>
        {post.officialSmsCode && (
          <span className="text-emerald-800 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            SMS: {post.officialSmsCode}
          </span>
        )}
      </div>

      {/* Summary Body */}
      <p className="text-sm sm:text-base text-[#1c2420] leading-relaxed mb-4">
        {post.summary}
      </p>

      {/* Quick Key Highlights preview */}
      <div className="bg-[#f9fbf9] border border-[#e2ece5] rounded-lg p-3 mb-4 text-xs">
        <b className="text-[#034d29] block mb-1">Khas Maloomat:</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Eligibility Checklist &amp; Criteria Table</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>Step-by-step Apply Online Form Guide</span>
          </div>
        </div>
      </div>

      {/* Post Footer */}
      <div className="pt-3 border-t border-dashed border-[#d8e2da] flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="text-[#5c6b62]">
          Official Helpline: <b className="text-[#046a38]">{post.officialHelpline || '0800-26477'}</b>
        </span>
        
        <button
          onClick={() => onReadMore(post)}
          className="bg-[#046a38] hover:bg-[#034d29] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer group"
        >
          <span>Mukammal Parhein</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};
