import React, { useState, useEffect } from 'react';
import { ShieldCheck, PhoneCall, Code, CheckCircle, Search, Menu, X, AlertTriangle } from 'lucide-react';

interface HeaderProps {
  onOpenBloggerFixer: () => void;
  onOpenBispChecker: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBloggerFixer,
  onOpenBispChecker,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const days = ['Itwaar', 'Peer', 'Mangal', 'Budh', 'Jumeraat', 'Jumma', 'Hafta'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    setCurrentDate(`${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`);
  }, []);

  const navItems = [
    { id: 'ALL', label: 'Home' },
    { id: 'BISP', label: 'BISP 8171' },
    { id: 'Ehsaas', label: 'Ehsaas Program' },
    { id: 'Sehat-Card', label: 'Sehat Card' },
    { id: 'Punjab', label: 'Punjab Schemes' },
    { id: 'Kisan', label: 'Kisan' },
    { id: 'Youth', label: 'Youth' }
  ];

  return (
    <>
      {/* Top Banner Alert & Date */}
      <div className="bg-[#022f1a] text-[#d7ecdf] text-xs border-b border-white/10">
        <div className="max-w-[1140px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">Hakumat-e-Pakistan Schemes Ki Mustanad Maloomat Portal</span>
            <span className="hidden md:inline text-emerald-300/60">|</span>
            <span className="hidden md:inline text-emerald-300/80">Sirf 8171 SMS par etemad karein</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBloggerFixer}
              className="bg-amber-500 hover:bg-amber-400 text-[#022f1a] font-bold px-2.5 py-0.5 rounded text-[11px] flex items-center gap-1 shadow transition-colors cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Blogger XML Theme Doctor &amp; Code Fix (Active)</span>
            </button>
            <span className="text-white/70 text-[11px] hidden sm:inline">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-[#046a38] shadow-sm">
        <div className="max-w-[1140px] mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div 
            onClick={() => onSelectCategory('ALL')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[#046a38] to-[#034d29] text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              SH
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-[#034d29] tracking-tight">shmscheem</span>
                <span className="text-[10px] font-bold bg-[#046a38]/10 text-[#046a38] px-1.5 py-0.5 rounded border border-[#046a38]/20">
                  Mustanad
                </span>
              </div>
              <p className="text-xs text-[#5c6b62] font-medium leading-none mt-0.5">
                Pakistani Government Schemes Ki A-Z Maloomat
              </p>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Quick 8171 CNIC Checker Button */}
            <button
              onClick={onOpenBispChecker}
              className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-[#034d29] px-3.5 py-2 rounded-lg text-left transition-all flex items-center gap-2.5 shadow-sm group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#046a38] text-white flex items-center justify-center font-bold text-sm shadow">
                8171
              </div>
              <div>
                <span className="text-[11px] text-[#5c6b62] block font-medium">BISP CNIC Status</span>
                <b className="text-xs font-bold text-[#034d29] group-hover:underline">Check Online Abhi Karein &rarr;</b>
              </div>
            </button>

            {/* Helpline Box */}
            <div className="hidden lg:flex items-center gap-3 bg-[#f2f6f3] border border-[#e0e8e2] px-3 py-1.5 rounded-lg text-right">
              <div>
                <span className="text-[10px] text-[#5c6b62] block">BISP Official Helpline (Free)</span>
                <span className="text-xs font-bold text-[#034d29]">0800-26477</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#046a38]/10 flex items-center justify-center text-[#046a38]">
                <PhoneCall className="w-4 h-4" />
              </div>
            </div>

            {/* Blogger Code Fixer Action */}
            <button
              onClick={onOpenBloggerFixer}
              className="bg-[#046a38] hover:bg-[#034d29] text-white font-semibold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow transition-all cursor-pointer"
            >
              <Code className="w-4 h-4 text-amber-300" />
              <span>Blogger Code Dekhein</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation Bar */}
      <nav className="bg-[#046a38] sticky top-0 z-40 shadow-md">
        <div className="max-w-[1140px] mx-auto px-4 flex items-center justify-between">
          {/* Mobile menu toggle button */}
          <div className="md:hidden py-2.5 w-full flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white flex items-center gap-2 font-semibold text-sm bg-[#034d29] px-3 py-1.5 rounded"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>Menu</span>
            </button>

            <span className="text-white text-xs font-bold">
              {navItems.find(n => n.id === selectedCategory)?.label || 'All Schemes'}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center flex-wrap list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = selectedCategory === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(item.id);
                    }}
                    className={`block px-4 py-3 text-sm font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#034d29] text-white border-b-2 border-amber-400'
                        : 'text-white hover:bg-[#034d29] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Inline Quick Search in Nav */}
          <div className="hidden lg:flex items-center my-1.5">
            <div className="relative">
              <input
                type="text"
                placeholder="Scheme search karein..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-[#034d29] text-white placeholder-emerald-200/60 text-xs px-3 py-1.5 pl-8 rounded-full border border-emerald-700/60 focus:outline-none focus:ring-1 focus:ring-amber-300 w-48 focus:w-64 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-emerald-300 absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-2 text-white/70 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#034d29] border-t border-emerald-800 px-4 py-3 space-y-1">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Scheme talash karein..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#022f1a] text-white text-xs px-3 py-2 rounded border border-emerald-700 focus:outline-none"
              />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectCategory(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm font-medium ${
                  selectedCategory === item.id ? 'bg-[#046a38] text-white font-bold' : 'text-emerald-100 hover:bg-[#046a38]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};
