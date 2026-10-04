import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SchemeCard } from './components/SchemeCard';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { BloggerFixerModal } from './components/BloggerFixerModal';
import { BispCheckerModal } from './components/BispCheckerModal';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { SCHEMES_POSTS, SchemePost, SCHEME_CATEGORIES } from './data/schemesData';
import { FIXED_BLOGGER_XML } from './data/fixedBloggerXml';
import { 
  FileCode, 
  Download, 
  Copy, 
  Check, 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<SchemePost | null>(null);
  const [bloggerFixerOpen, setBloggerFixerOpen] = useState<boolean>(false);
  const [bispCheckerOpen, setBispCheckerOpen] = useState<boolean>(false);
  const [copiedQuick, setCopiedQuick] = useState<boolean>(false);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return SCHEMES_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'ALL' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.categoryLabel.toLowerCase().includes(q) ||
        post.content.overview.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Popular posts for sidebar
  const popularPosts = useMemo(() => {
    return SCHEMES_POSTS.slice(0, 4);
  }, []);

  const handleQuickCopy = () => {
    navigator.clipboard.writeText(FIXED_BLOGGER_XML);
    setCopiedQuick(true);
    setTimeout(() => setCopiedQuick(false), 2500);
  };

  const handleQuickDownload = () => {
    const blob = new Blob([FIXED_BLOGGER_XML], { type: 'text/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shmscheem-seo-master-FIXED.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSelectPostById = (id: string) => {
    const target = SCHEMES_POSTS.find((p) => p.id === id);
    if (target) {
      setActivePost(target);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f6f3] text-[#1c2420]">
      {/* 1. Header */}
      <Header
        onOpenBloggerFixer={() => setBloggerFixerOpen(true)}
        onOpenBispChecker={() => setBispCheckerOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Top Banner specifically addressing the user's issue */}
      <div className="bg-amber-500 text-stone-950 px-4 py-2.5 border-b border-amber-600 shadow-xs">
        <div className="max-w-[1140px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
              !
            </span>
            <p className="text-xs sm:text-sm font-bold">
              Post Na Dikhne Aur Layout Kharab Hone Ka Hal Tayyar Hai:
              <span className="font-normal ml-1 hidden md:inline">
                Aap ke code mein <code className="bg-amber-600/30 px-1 py-0.5 rounded font-mono text-xs">PopularPosts1</code> widget ke missing includable aur <code className="bg-amber-600/30 px-1 py-0.5 rounded font-mono text-xs">Blog1</code> loop ko theek kar diya gaya hai.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickCopy}
              className="bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs px-3 py-1 rounded shadow transition-colors flex items-center gap-1 cursor-pointer"
            >
              {copiedQuick ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedQuick ? 'Code Copied!' : '1-Click Copy Code'}</span>
            </button>
            <button
              onClick={handleQuickDownload}
              className="bg-stone-100 hover:bg-white text-stone-900 font-bold text-xs px-3 py-1 rounded shadow transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .XML</span>
            </button>
            <button
              onClick={() => setBloggerFixerOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-3 py-1 rounded shadow transition-colors cursor-pointer"
            >
              Wajohat &amp; Guide
            </button>
          </div>
        </div>
      </div>

      {/* 3. Hero Section (Shows when viewing homepage with no deep search) */}
      {selectedCategory === 'ALL' && !searchQuery && (
        <Hero
          onOpenBispChecker={() => setBispCheckerOpen(true)}
          onSelectCategory={setSelectedCategory}
          onSelectPostById={handleSelectPostById}
          onOpenBloggerFixer={() => setBloggerFixerOpen(true)}
        />
      )}

      {/* 4. Active Filter Indicator */}
      {(selectedCategory !== 'ALL' || searchQuery) && (
        <div className="bg-[#034d29] text-white py-4 border-b border-emerald-800">
          <div className="max-w-[1140px] mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="opacity-75">Category / Search:</span>
              <span className="font-bold bg-[#046a38] px-3 py-1 rounded-full border border-emerald-600">
                {selectedCategory !== 'ALL'
                  ? SCHEME_CATEGORIES.find((c) => c.id === selectedCategory)?.name
                  : `Search: "${searchQuery}"`}
              </span>
              <span className="text-xs opacity-75">
                ({filteredPosts.length} schemes maujood hain)
              </span>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="text-xs bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full transition-colors cursor-pointer"
            >
              Filter Khatam Karein (Show All) ✕
            </button>
          </div>
        </div>
      )}

      {/* 5. Main Content & Sidebar Layout */}
      <main className="max-w-[1140px] mx-auto px-4 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
          {/* Main Column: Posts */}
          <div className="min-w-0">
            {/* Section Title */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#046a38]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#034d29]">
                {selectedCategory === 'ALL'
                  ? 'Taaza Tareen Sarkari Schemes'
                  : `${SCHEME_CATEGORIES.find((c) => c.id === selectedCategory)?.name}`}
              </h2>
              <span className="text-xs text-gray-500 font-medium">
                Dastiyab Posts: {filteredPosts.length}
              </span>
            </div>

            {/* Posts Loop */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <SchemeCard
                    key={post.id}
                    post={post}
                    onReadMore={(p) => setActivePost(p)}
                    onSelectCategory={(cat) => setSelectedCategory(cat)}
                  />
                ))}
              </div>
            ) : (
              /* Fallback if no posts match query */
              <div className="bg-white border border-[#d8e2da] rounded-2xl p-10 text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#046a38] flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#034d29] mb-1">
                  Filhal Koi Post Dastiyab Nahi
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-4">
                  Aap ke muntakhab kardah lafz ya category mein abhi koi post nahi mili. Bara-e-meherbani search badal kar koshish karein.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="bg-[#046a38] hover:bg-[#034d29] text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Tamam Schemes Dekhein
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <Sidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            popularPosts={popularPosts}
            onSelectPost={(post) => setActivePost(post)}
            onOpenBloggerFixer={() => setBloggerFixerOpen(true)}
            onOpenBispChecker={() => setBispCheckerOpen(true)}
          />
        </div>
      </main>

      {/* 6. Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenBispChecker={() => setBispCheckerOpen(true)}
        onOpenBloggerFixer={() => setBloggerFixerOpen(true)}
      />

      {/* Floating Action Button for Blogger Theme Fix */}
      <button
        onClick={() => setBloggerFixerOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 border-2 border-amber-300 transition-transform hover:scale-105 cursor-pointer"
        title="Blogger XML Theme Doctor & Code"
      >
        <FileCode className="w-5 h-5 text-stone-950" />
        <span className="text-xs font-black tracking-wide hidden sm:inline">
          Blogger Code Theek Karein
        </span>
      </button>

      {/* Modals */}
      <SchemeDetailModal
        post={activePost}
        onClose={() => setActivePost(null)}
        onOpenBispChecker={() => {
          setActivePost(null);
          setBispCheckerOpen(true);
        }}
      />

      <BloggerFixerModal
        isOpen={bloggerFixerOpen}
        onClose={() => setBloggerFixerOpen(false)}
      />

      <BispCheckerModal
        isOpen={bispCheckerOpen}
        onClose={() => setBispCheckerOpen(false)}
      />
    </div>
  );
}
