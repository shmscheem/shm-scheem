import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Share2, Printer, ArrowLeft } from 'lucide-react';
import { SchemePost } from '../data/schemesData';

interface SchemeDetailModalProps {
  post: SchemePost | null;
  onClose: () => void;
  onOpenBispChecker: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  post,
  onClose,
  onOpenBispChecker,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-[#d8e2da] max-h-[94vh] flex flex-col">
        {/* Top Bar */}
        <div className="bg-[#022f1a] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-emerald-200 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Wapis Schemes List Par Jayein</span>
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Post Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold bg-[#046a38] text-white px-2.5 py-1 rounded">
                {post.categoryLabel}
              </span>
              {post.highlightBadge && (
                <span className="text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded">
                  {post.highlightBadge}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#034d29] leading-tight mb-3">
              {post.title}
            </h1>

            <div className="text-xs text-[#5c6b62] pb-3 border-b border-[#e0e8e2] flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#046a38]" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#046a38]" />
                <span>By {post.author}</span>
              </span>
              {post.officialSmsCode && (
                <span className="text-[#046a38] font-bold font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Official SMS Code: {post.officialSmsCode}
                </span>
              )}
            </div>
          </div>

          {/* Post Overview */}
          <div className="text-base text-gray-800 leading-relaxed space-y-4">
            <p className="text-lg font-medium text-gray-900 border-l-4 border-[#046a38] pl-3 py-1 bg-[#f9fbf9]">
              {post.content.overview}
            </p>
          </div>

          {/* Quick Action Button for BISP */}
          {post.category === 'BISP' && (
            <div className="bg-gradient-to-r from-emerald-500/10 to-[#046a38]/20 border border-emerald-300 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <b className="text-sm text-[#034d29] block">Apna 8171 Status Check Karein:</b>
                <span className="text-xs text-gray-600">Ghar bethe CNIC daal kar Kafaalat aur wazaif check karein.</span>
              </div>
              <button
                onClick={onOpenBispChecker}
                className="bg-[#046a38] hover:bg-[#034d29] text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition-colors cursor-pointer"
              >
                8171 Online Check Kholain &rarr;
              </button>
            </div>
          )}

          {/* Official Eligibility Table */}
          <div>
            <h2 className="text-lg font-bold text-[#034d29] mb-3 pb-2 border-b-2 border-[#d8e2da] flex items-center gap-2">
              <span>Aheliat Ka Meyaar (Eligibility Criteria)</span>
            </h2>
            <div className="overflow-x-auto border border-[#d8e2da] rounded-xl shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#046a38] text-white">
                    {post.content.eligibilityTable.headers.map((h, i) => (
                      <th key={i} className="p-3 font-semibold whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {post.content.eligibilityTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#f9fbf9]'}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 align-top font-medium text-gray-800">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div>
            <h2 className="text-lg font-bold text-[#034d29] mb-3 pb-2 border-b-2 border-[#d8e2da]">
              Zaroori Dastawaiz (Required Documents Checklist)
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-800 bg-[#fbfdfb] p-4 rounded-xl border border-[#e0e8e2]">
              {post.content.requiredDocuments.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Apply Steps */}
          <div>
            <h2 className="text-lg font-bold text-[#034d29] mb-3 pb-2 border-b-2 border-[#d8e2da]">
              Darkhwast Jama Karwane Ka Tareeqa (How to Apply)
            </h2>
            <div className="space-y-3">
              {post.content.howToApplySteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-[#046a38] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Warning / Callout */}
          {post.content.officialWarning && (
            <div className="border-l-4 border-amber-500 bg-[#fffdf2] p-4 rounded-r-xl">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-amber-900 mb-1">Khabardaar &amp; Hidayat:</h4>
                  <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                    {post.content.officialWarning}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQs Accordion */}
          {post.content.faqs.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#034d29] mb-3 pb-2 border-b-2 border-[#d8e2da]">
                Aam Maloomat &amp; Sawalat (Frequently Asked Questions)
              </h2>
              <div className="space-y-2">
                {post.content.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full text-left p-3.5 bg-[#f9faf9] hover:bg-[#f2f6f3] flex items-center justify-between text-xs sm:text-sm font-bold text-[#034d29] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-700" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                      </button>
                      {isOpen && (
                        <div className="p-3.5 bg-white text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3 flex items-center justify-between flex-shrink-0 text-xs text-gray-500">
          <span>Official Helpline: <b className="text-[#046a38]">{post.officialHelpline || '0800-26477'}</b></span>
          <button
            onClick={onClose}
            className="bg-[#046a38] hover:bg-[#034d29] text-white font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Band Karein
          </button>
        </div>
      </div>
    </div>
  );
};
