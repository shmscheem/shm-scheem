import React, { useState } from 'react';
import { X, Search, ShieldCheck, CheckCircle2, AlertTriangle, AlertCircle, RefreshCw, FileText, Phone } from 'lucide-react';

interface BispCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BispCheckerModal: React.FC<BispCheckerModalProps> = ({ isOpen, onClose }) => {
  const [cnic, setCnic] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaNum] = useState(() => Math.floor(1000 + Math.random() * 9000).toString());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    status: 'eligible' | 'under-survey' | 'ineligible';
    cnic: string;
    familyHead: string;
    pmtScore: number;
    kafaalatAmount: number;
    taleemiWazaifAmount: number;
    totalAmount: number;
    paymentStatus: string;
    touchpoint: string;
    surveyDate: string;
    message: string;
  }>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  // Handle CNIC input with auto-formatting: 35201-1234567-1
  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 13) val = val.substring(0, 13);
    
    // Format
    let formatted = val;
    if (val.length > 5 && val.length <= 12) {
      formatted = `${val.slice(0, 5)}-${val.slice(5)}`;
    } else if (val.length > 12) {
      formatted = `${val.slice(0, 5)}-${val.slice(5, 12)}-${val.slice(12)}`;
    }
    setCnic(formatted);
    setError('');
  };

  const handleQuickFill = (type: 'eligible' | 'under-survey' | 'ineligible') => {
    if (type === 'eligible') {
      setCnic('35202-8472910-4');
    } else if (type === 'under-survey') {
      setCnic('38403-1948201-6');
    } else {
      setCnic('61101-9283741-9');
    }
    setCaptcha(captchaNum);
    setError('');
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const rawCnic = cnic.replace(/\D/g, '');
    if (rawCnic.length !== 13) {
      setError('Bara-e-meherbani mukammal 13-digit CNIC number darj karein.');
      return;
    }

    if (captcha.trim() !== captchaNum) {
      setError('Tasdeeqi Code (Captcha) durust nahi hai.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    // Realistic lookup response
    setTimeout(() => {
      setLoading(false);
      const lastDigit = parseInt(rawCnic.slice(-1));

      if (rawCnic === '3840319482016' || lastDigit === 6 || lastDigit === 7) {
        setResult({
          status: 'under-survey',
          cnic: cnic,
          familyHead: 'Zainab Bibi',
          pmtScore: 36,
          kafaalatAmount: 0,
          taleemiWazaifAmount: 0,
          totalAmount: 0,
          paymentStatus: 'NSER Dynamic Survey Zaroori Hai',
          touchpoint: 'Qareebi BISP Tehsil Registration Desk',
          surveyDate: 'Registration Pending',
          message: 'Aap ka gharana BISP NSER Dynamic Registry mein shamil nahi hai ya aap ka survey 3 saal se purana ho chuka hai. Foran apne qareebi BISP Tehsil Center ja kar naya survey karwayein.'
        });
      } else if (rawCnic === '6110192837419' || lastDigit === 9) {
        setResult({
          status: 'ineligible',
          cnic: cnic,
          familyHead: 'Parveen Akhtar',
          pmtScore: 42.5,
          kafaalatAmount: 0,
          taleemiWazaifAmount: 0,
          totalAmount: 0,
          paymentStatus: 'Ghair-Ahel (PMT Score > 32)',
          touchpoint: 'N/A',
          surveyDate: 'March 2025',
          message: 'Aap ka PMT (Poverty Score) 32 se zayed hai ya khandan ka koi fard sarkari mulazimat / tax filer record mein maujood hai. Is liye aap filhal Kafaalat ke liye ahel nahi hain.'
        });
      } else {
        setResult({
          status: 'eligible',
          cnic: cnic,
          familyHead: 'Kulsoom Bibi',
          pmtScore: 24.8,
          kafaalatAmount: 13500,
          taleemiWazaifAmount: 5500,
          totalAmount: 19000,
          paymentStatus: 'Raqam Account Mein Muntaqil Kar Di Gayi Hai',
          touchpoint: 'HBL Konnect / Bank Alfalah BFL Agent ya BISP Cash Center',
          surveyDate: 'October 2024 (Verified)',
          message: 'Mubarak ho! Aap BISP Benazir Kafaalat Program ke liye mukammal ahel hain. Aap ki nayi sah-mahi qist aur 2 bachon ke Taleemi Wazaif jari ho chukay hain.'
        });
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-[#d8e2da] max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#022f1a] to-[#046a38] text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center font-black text-base shadow">
              8171
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">8171 Web Portal CNIC Check</h2>
              <p className="text-xs text-emerald-200/90">BISP Kafaalat &amp; Taleemi Wazaif Status Check</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Quick Demo Fillers */}
          <div className="bg-[#f0f8f3] border border-[#c9e3d2] rounded-xl p-3">
            <span className="text-[11px] font-bold text-[#046a38] uppercase tracking-wider block mb-1.5">
              Quick Test CNICs (Testing ke liye click karein):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleQuickFill('eligible')}
                className="text-xs bg-white border border-emerald-300 hover:bg-emerald-50 text-[#034d29] px-2.5 py-1 rounded font-medium shadow-2xs"
              >
                ✓ Ahel Candidate (Rs. 13,500)
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('under-survey')}
                className="text-xs bg-white border border-amber-300 hover:bg-amber-50 text-amber-800 px-2.5 py-1 rounded font-medium shadow-2xs"
              >
                ⚠ NSER Survey Required
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('ineligible')}
                className="text-xs bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-2.5 py-1 rounded font-medium shadow-2xs"
              >
                ✕ Ghair-Ahel (Score &gt; 32)
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleCheck} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Khatoon Ka CNIC (Shanakhti Card Number) *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 35201-1234567-1"
                  value={cnic}
                  onChange={handleCnicChange}
                  maxLength={15}
                  className="w-full text-base sm:text-lg font-mono tracking-wider px-3.5 py-2.5 border-2 border-[#d8e2da] rounded-xl focus:border-[#046a38] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-3 text-xs text-gray-400 font-mono">
                  {cnic.replace(/\D/g, '').length}/13 Digits
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">
                Gharana ki khatoon ka 13-digit CNIC darj karein (dashes khud ba khud lag jayenge).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Tasdeeqi Code (Captcha) *
                </label>
                <input
                  type="text"
                  placeholder="Code likhein"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="w-full text-base font-mono px-3.5 py-2 border-2 border-[#d8e2da] rounded-xl focus:border-[#046a38] focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-emerald-950 text-amber-300 font-mono font-bold text-xl py-2 px-4 rounded-xl text-center tracking-widest select-none border border-emerald-800">
                  {captchaNum}
                </div>
                <button
                  type="button"
                  onClick={() => setCaptcha(captchaNum)}
                  className="text-xs text-[#046a38] hover:underline whitespace-nowrap p-2 font-medium"
                >
                  Auto Fill
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#046a38] hover:bg-[#034d29] text-white font-bold py-3 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>8171 Database Se Check Ho Raha Hai...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Maloomat Maloom Karein (Check Status)</span>
                </>
              )}
            </button>
          </form>

          {/* Results Output */}
          {result && (
            <div className={`rounded-xl p-4 border animate-in slide-in-from-bottom-2 duration-200 ${
              result.status === 'eligible' 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                : result.status === 'under-survey' 
                ? 'bg-amber-50 border-amber-300 text-amber-950' 
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-black/10">
                {result.status === 'eligible' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-sm">{result.paymentStatus}</h4>
                  <span className="text-xs opacity-75 font-mono">CNIC: {result.cnic} | Sarbarah: {result.familyHead}</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-3">{result.message}</p>

              {result.status === 'eligible' && (
                <div className="bg-white/80 rounded-lg p-3 border border-emerald-200 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Benazir Kafaalat (Qist):</span>
                    <b className="text-emerald-800">Rs. {result.kafaalatAmount.toLocaleString()}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Benazir Taleemi Wazaif (2 Bachay):</span>
                    <b className="text-emerald-800">Rs. {result.taleemiWazaifAmount.toLocaleString()}</b>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-1 font-bold text-sm">
                    <span className="text-emerald-950">Kul Wasool Shuda Raqam:</span>
                    <span className="text-emerald-700">Rs. {result.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200 text-[11px] text-gray-500">
                    <b>Raqam Wasool Karne Ka Markaz:</b> {result.touchpoint}
                  </div>
                </div>
              )}

              {/* Warning note */}
              <div className="mt-3 bg-amber-500/10 border border-amber-400/30 rounded p-2 text-[11px] text-amber-900 flex items-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  <b>Zaroori Hidayat:</b> Biometric verification ke waqt poori raqam rasid ke mutabiq hasil karein. Kisi agent ko koi katoti ya fees na dein.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-5 py-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#046a38]" />
            <span>Toll-Free Helpline: 0800-26477</span>
          </div>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-1.5 rounded-lg transition-colors"
          >
            Band Karein
          </button>
        </div>
      </div>
    </div>
  );
};
