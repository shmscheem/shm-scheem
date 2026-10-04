import React, { useState } from 'react';
import { X, Copy, Check, Download, AlertTriangle, CheckCircle2, FileCode, ExternalLink, HelpCircle, Layers, ShieldCheck, Sparkles, Image as ImageIcon } from 'lucide-react';
import { FIXED_BLOGGER_XML } from '../data/fixedBloggerXml';

interface BloggerFixerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerFixerModal: React.FC<BloggerFixerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'screenshot' | 'solution' | 'code' | 'guide'>('screenshot');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(FIXED_BLOGGER_XML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([FIXED_BLOGGER_XML], { type: 'text/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shmscheem-seo-master-FIXED-v2.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-[#d8e2da] max-h-[95vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#022f1a] via-[#046a38] to-[#034d29] text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-bold text-lg shadow">
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">Blogger Layout &amp; Post Visibility Doctor</h2>
                <span className="bg-amber-400 text-stone-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Screenshot Ka Hal
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                Aap ke Blogger Layout screenshot mein Page Body khali hone ka 100% technical hal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold flex-shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('screenshot')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'screenshot'
                ? 'border-[#046a38] text-[#046a38]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-amber-600" />
            <span>Aap Ke Screenshot Ka Analysis</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'code'
                ? 'border-[#046a38] text-[#046a38]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <FileCode className="w-4 h-4 text-[#046a38]" />
            <span>Naya Fixed XML Code (v2.0)</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-[#046a38] text-[#046a38]'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Install &amp; Restore Guide</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: SCREENSHOT ANALYSIS */}
          {activeTab === 'screenshot' && (
            <div className="space-y-5">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <h3 className="text-base font-bold text-red-900 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Aap Ke Screenshot Mein 3 Barray Masail Saaf Nazar Aa Rahe Hain:</span>
                </h3>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                  Aap ke screenshot (<code className="font-mono bg-red-100 text-red-900 px-1 py-0.5 rounded">blogger.com/blog/layout/35555388868775053</code>) ko dekh kar pata chalta hai ke Blogger engine ne theme ke layout ko kyun khali kar diya tha:
                </p>
              </div>

              {/* 3 Issues Identified Directly From Screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Page Body Empty */}
                <div className="border border-red-200 bg-white rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Page Body Ka Dabba Khali Tha</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    Screenshot mein <b className="text-red-700">&quot;Page Body&quot;</b> ke andar koi <b>&quot;Blog Posts&quot;</b> ka card nahi hai aur na hi &quot;+ Add a Gadget&quot; ka button hai.
                  </p>
                  <p className="text-xs text-gray-800 font-semibold bg-red-50 p-2 rounded">
                    <b>Wajah:</b> XML mein <code className="text-red-800 font-mono text-[11px]">showaddelement=&apos;false&apos;</code> aur <code className="text-red-800 font-mono text-[11px]">locked=&apos;true&apos;</code> laga tha, jis se Blogger layout ne &apos;Blog Posts&apos; ko hide kar diya!
                  </p>
                </div>

                {/* 2. 7 Bullet Points */}
                <div className="border border-amber-200 bg-white rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-stone-900 font-bold text-xs flex items-center justify-center mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Oopar 7 Dots (• • • • • • •)</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    Screenshot mein Page Body ke theek oopar <b>7 kaalay dots</b> nazar aa rahe hain.
                  </p>
                  <p className="text-xs text-gray-800 font-semibold bg-amber-50 p-2 rounded">
                    <b>Wajah:</b> Ye Navigation Menu ke 7 links thay (Home, BISP, Ehsaas, Sehat Card, Punjab, Kisan, Youth). Blogger Layout CSS na hone ki wajah se wo dots ban gaye. Hum ne ab unhein layout mode mein hide kar diya hai!
                  </p>
                </div>

                {/* 3. Search & Sidebar Missing */}
                <div className="border border-blue-200 bg-white rounded-xl p-4 shadow-2xs">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Search &amp; Sidebar Widgets</h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    Search section khali tha aur Sidebar mein widgets missing thay sirf &quot;+ Add a Gadget&quot; dikh raha tha.
                  </p>
                  <p className="text-xs text-gray-800 font-semibold bg-blue-50 p-2 rounded">
                    <b>Wajah:</b> Blogger database mein widget placement unlinked thi. Ab tamam widgets ko <code className="text-blue-800 font-mono text-[11px]">showaddelement=&apos;yes&apos;</code> ke sath re-link kar diya gaya hai.
                  </p>
                </div>
              </div>

              {/* What the New Fix Does */}
              <div className="bg-[#f0f8f3] border border-[#c9e3d2] rounded-xl p-4">
                <h4 className="font-bold text-[#034d29] text-sm flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Ab Naya Code Lagane Ke Baad Layout Mein Kya Hoga?</span>
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-[#1c2420]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span><b>Page Body</b> ke andar <b className="text-emerald-800">&quot;Blog Posts&quot;</b> ka dabba (gadget) wapis aa jayega!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>Agar kabhi zarurat ho toh Page Body mein <b className="text-emerald-800">&quot;+ Add a Gadget&quot;</b> ka option bhi khul chuka hai!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>Wo 7 be-faida black dots (<code className="font-mono text-xs">• • • • • • •</code>) Layout screen se bilkul khatam ho jayenge!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>Jab Page Body mein Blog Posts widget active hoga toh <b>live website par aap ki saari posts foran show ho jayengi!</b></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('code')}
                  className="bg-[#046a38] hover:bg-[#034d29] text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer transition-colors"
                >
                  <FileCode className="w-4 h-4 text-amber-300" />
                  <span>Theek Shuda Code Copy Karein (v2.0)</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .XML File</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: FIXED CODE */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <div>
                  <span className="font-bold text-sm text-gray-800 block">shmscheem-seo-master-FIXED-v2.xml</span>
                  <span className="text-xs text-emerald-700 font-semibold">
                    ✓ Layout Editor Compatible • showaddelement=&apos;yes&apos; • No Leaking Dots
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="bg-[#046a38] hover:bg-[#034d29] text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Code Copy Ho Gaya!' : 'Poora Code Copy Karein'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download File</span>
                  </button>
                </div>
              </div>

              {/* Code Box with Syntax Styling */}
              <div className="relative border border-gray-300 rounded-xl overflow-hidden shadow-inner bg-[#1a1e24] text-emerald-300 font-mono text-xs">
                <div className="bg-[#12151a] text-gray-400 px-4 py-2 border-b border-gray-700 flex items-center justify-between text-[11px]">
                  <span>XML Template File (Layout Fixed v2.0)</span>
                  <span>Ready for Blogger Edit HTML</span>
                </div>
                <pre className="p-4 max-h-[380px] overflow-y-auto overflow-x-auto text-[12px] leading-relaxed select-all">
                  <code>{FIXED_BLOGGER_XML}</code>
                </pre>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <b>Tafseel:</b> Is XML mein <code className="font-mono bg-emerald-100 text-emerald-900 px-1 py-0.5 rounded">&lt;b:section id=&apos;page_body&apos; showaddelement=&apos;yes&apos;&gt;</code> laga diya hai. Is se Blogger Layout editor mein &quot;Blog Posts&quot; ka gadget 100% zinda ho jata hai.
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: INSTALLATION GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-5">
              <div className="border border-emerald-300 bg-emerald-50 rounded-xl p-4">
                <h3 className="font-bold text-[#034d29] text-base mb-1">
                  Blogger Mein Naya Code Paste Karne Aur Layout Check Karne Ka Tareeqa
                </h3>
                <p className="text-xs text-emerald-800">
                  Ye steps follow karein, aap ka Layout aur Posts foran restore ho jayengi:
                </p>
              </div>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#046a38] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Theme &gt; Edit HTML Mein Jayein</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Blogger dashboard par jayein, left side se <b>&quot;Theme&quot;</b> par click karein. Phir orange button ke sath drop-down (▼) se <b>&quot;Edit HTML&quot;</b> kholein.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#046a38] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Saara Purana Code Replace Karein</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Editor mein click kar ke <kbd className="bg-gray-100 border px-1.5 py-0.5 rounded font-mono text-[11px]">Ctrl + A</kbd> karein, phir delete karein. Ab ye naya v2.0 code <kbd className="bg-gray-100 border px-1.5 py-0.5 rounded font-mono text-[11px]">Ctrl + V</kbd> kar ke paste kar dein.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#046a38] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Save (Floppy Icon) Par Click Karein</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Top right corner mein <b>Save</b> (Floppy Disk) icon par click karein aur &quot;Update Successful&quot; ka intezar karein.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#046a38] text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Layout (لی آؤٹ) Refresh Karein</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Ab left menu se <b>&quot;Layout&quot;</b> par jayein aur page ko refresh karein (<kbd className="bg-gray-100 border px-1.5 py-0.5 rounded font-mono text-[11px]">Ctrl + F5</kbd>).
                      Aap dekhenge ke <b>&quot;Page Body&quot;</b> ke andar <b>&quot;Blog Posts&quot;</b> ka dabba aa chuka hoga aur oopar wale 7 dots khatam ho chukay honge!
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Agar Page Body Phir Bhi Khali Rahay (Emergency Backup Step):</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Chunkay hum ne ab <code className="font-mono bg-gray-100 text-gray-800 px-1 py-0.5 rounded">showaddelement=&apos;yes&apos;</code> kar diya hai, agar Blog Posts dabba na dikhe, toh aap <b>&quot;Page Body&quot;</b> ke andar <b>&quot;+ Add a Gadget&quot;</b> par click kar ke direct <b>&quot;Blog Posts&quot;</b> ko select kar sakte hain!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>shmscheem Layout Fix v2.0 — Guaranteed Blogger Layout Display</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="bg-[#046a38] hover:bg-[#034d29] text-white font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 shadow transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Code Copied!' : 'Copy Fixed Code (v2.0)'}</span>
            </button>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Band Karein
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
