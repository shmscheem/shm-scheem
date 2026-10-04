export interface SchemePost {
  id: string;
  title: string;
  category: 'BISP' | 'Punjab' | 'Sehat-Card' | 'Ehsaas' | 'Kisan' | 'Youth';
  categoryLabel: string;
  date: string;
  author: string;
  summary: string;
  highlightBadge?: string;
  officialHelpline?: string;
  officialSmsCode?: string;
  content: {
    overview: string;
    eligibilityTable: {
      headers: string[];
      rows: string[][];
    };
    requiredDocuments: string[];
    howToApplySteps: string[];
    officialWarning?: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

export const SCHEMES_POSTS: SchemePost[] = [
  {
    id: 'bisp-8171-online-check-2026',
    title: 'BISP 8171 Payment 13,500 Check Online: Benazir Kafaalat New Installment & Biometric Updates',
    category: 'BISP',
    categoryLabel: 'BISP 8171',
    date: '3rd October 2026',
    author: 'shmscheem Team',
    highlightBadge: 'Nayi Qist: Rs. 13,500 Jari',
    officialHelpline: '0800-26477',
    officialSmsCode: '8171',
    summary: 'BISP Benazir Kafaalat ki nayi sah-mahi qist 13,500 rupay jari ho chuki hai. Apna CNIC 8171 par bhej kar ya official web portal se ghar bethe eligibility aur raqam check karne ka aasan tareeqa parhein.',
    content: {
      overview: 'Hakumat-e-Pakistan ne Benazir Income Support Programme (BISP) Kafaalat ki sah-mahi imdadi raqam barha kar 13,500 rupay kar di hai. Ye raqam mustahiq khawateen ko biometric verification ke zariye HBL Konnect, Bank Alfalah BFL agents, aur makhsoos cash centers se faraham ki ja rahi hai.',
      eligibilityTable: {
        headers: ['Meyaar / Condition', 'Tafseelat', 'Kaisi Tasdeeq Hogi'],
        rows: [
          ['PMT Score (Poverty Score)', 'Score 32 ya is se kam hona lazmi hai', 'Dynamic NSER Registry Survey'],
          ['Family Head', 'Sirf shadi shuda ya bewa/talaq-yafta aurat', 'Nadra Family Tree Verification'],
          ['Sarkari Mulazimat', 'Khandan ka koi fard sarkari mulazim na ho', 'AGPR Database Cross Check'],
          ['Gari / Land Ownership', 'Naam par gari ya 12 acre se zayed zameen na ho', 'Excise & Revenue Board Check'],
          ['Passport / Foreign Travel', 'Bahar mulk safar ka record na ho (Haj/Umrah mustasna)', 'FIA & Immigration Database']
        ]
      },
      requiredDocuments: [
        'Asal CNIC (Computerized National Identity Card) jo expire na hua ho',
        'BISP se registered SIM card jo mustahiq khatoon ke apne CNIC par ho',
        'Bachon ke Bay-Form (agar Taleemi Wazaif ke liye register karwana ho)',
        'Bewa khawateen ke liye shohar ka death certificate (Nadra se tasdeeq shuda)',
        'Mazoori ki soorat mein Nadra Special CNIC with wheelchair logo'
      ],
      howToApplySteps: [
        'Pehlay apne mobile se 13-digit CNIC baghair dashes ke "8171" par SMS karein.',
        'Agar 8171 se jawabi SMS aaye ke "Aap Kafaalat ke liye ahel hain", toh qareebi Tehsil BISP office ya HBL Konnect agent par jayein.',
        'Agar message aaye ke "Aap ka survey nahi hua", toh qareebi BISP Tehsil Center ja kar NSER Dynamic Registration desk par apna naya survey karwayein.',
        'Biometric thumb verification ke baad poori raqam (Rs. 13,500) rasid ke sath wasool karein. Kisi agent ko koi fees ya deduction na dein!'
      ],
      officialWarning: 'Hamesha yaad rakhein ke BISP ka official SMS sirf aur sirf "8171" se aata hai. Agar koi shakhs 11-digit mobile number (+92 3XX-XXXXXXX) se message bhej kar raqam ya OTP mangay toh wo 100% fraud hai. Foran FIA Cyber Crime (1991) par report karein.',
      faqs: [
        {
          question: '8171 par CNIC bhejne ke charges kitnay hain?',
          answer: '8171 par SMS bhejna bilkul muft (Free) hai. Kisi network par balance hona zaroori nahi.'
        },
        {
          question: 'Agar biometric thumb match na ho toh raqam kaise milegi?',
          answer: 'Agar 3 dafa biometric scan fail ho jaye toh BISP Tehsil Office ja kar BFL/HBL OTP verification form bharein ya Nadra se finger prints re-verification karwayein.'
        },
        {
          question: 'BISP 13,500 ke sath bachon ka wazeefa kab milta hai?',
          answer: 'Benazir Taleemi Wazaif ki raqam BISP Kafaalat ke sath hi transfer hoti hai, bashart-e-k school attendance 70% se zayed ho.'
        }
      ]
    }
  },
  {
    id: 'apni-chhat-apna-ghar-scheme-punjab',
    title: 'Maryam Nawaz "Apni Chhat Apna Ghar" Scheme: 15 Lakh Bila-Sood Qarz Apply Ka Tareeqa',
    category: 'Punjab',
    categoryLabel: 'Punjab Schemes',
    date: '2nd October 2026',
    author: 'shmscheem Team',
    highlightBadge: '15 Lakh Interest-Free Loan',
    officialHelpline: '0800-09100',
    officialSmsCode: '8800',
    summary: 'Hakumat-e-Punjab ki taraf se 5 marla shehri aur 10 marla dehi zameen ke maalkaan ke liye 15 lakh rupay tak bila-sood qarz ki mukammal registration shuru. Mahana qist sirf Rs. 14,000.',
    content: {
      overview: 'Wazir-e-Aala Punjab Maryam Nawaz Sharif ne be-ghar afraad aur kacha makaan rakhne walon ke liye "Apni Chhat Apna Ghar" project launch kiya hai. Is scheme ke tehat 15 lakh rupay tak ka loan baghair kisi sood ya markup ke diya jata hai, jis ki wapsi 7 saal ke asaan iqsaat mein hoti hai.',
      eligibilityTable: {
        headers: ['Eligibility Item', 'Shart (Criteria)', 'Zaroori Dastawaiz'],
        rows: [
          ['Sakonat (Domicile)', 'Punjab ka rehaishi hona lazmi hai', 'Punjab Domicile Certificate'],
          ['Plot Size (Shehri)', 'Shehri ilaqon mein 1 se 5 Marla ka zati plot', 'Fard Malkiat / Registry'],
          ['Plot Size (Dehi)', 'Dehi ilaqon mein 1 se 10 Marla ka plot', 'Aks Shajra & Patwari Tasdeeq'],
          ['Criminal Record', 'Kisi sangin jurm ya bank defaulter na ho', 'Police Khidmat Markaz Character Certificate'],
          ['Monthly Income', 'Khandan ki kul aamdani 60,000 se kam honi chahiye', 'Salary Slip ya Halaf-nama']
        ]
      },
      requiredDocuments: [
        'Darkhwast guzar aur ahel-e-khana ke CNIC copies',
        'Zameen / Plot ki Fard Malkiat (jo Punjab Land Record Authority PLRA se verified ho)',
        'Plot ki site photos (char dewari ya khali plot)',
        'Bila-sood qarz ke iqrar-nama affidavit (Rs. 100 E-Stamp paper)',
        'Active mobile number aur bank account details'
      ],
      howToApplySteps: [
        'Official online portal (acag.punjab.gov.pk) par jayein ya PITB app download karein.',
        'Apna CNIC number darj kar ke naya account banayein aur OTP verify karein.',
        'Form mein apni zameen ki fard number aur plot ka size darj karein.',
        'Zaroori documents scan kar ke upload karein aur submit par click karein.',
        'Punjab Housing & Town Planning Agency (PHATA) ki team plot ki physical verification karegi aur loan 3 aasan iqsaat mein bank account mein bhej diya jayega.'
      ],
      officialWarning: 'PHATA ya kisi sarkari idaray ka numayinda loan manzoor karwane ke liye rishwat ya processing fee cash nahi leta. Tamam processing bilkul muft hai.',
      faqs: [
        {
          question: 'Kya rental makaan mein rehne wale apply kar sakte hain?',
          answer: 'Darkhwast guzar ke naam par 5 marla (shehr) ya 10 marla (gaaon) ka plot hona lazmi hai jahan makaan tameer kiya ja sakay.'
        },
        {
          question: 'Loan ki mahana qist kitni hogi?',
          answer: 'Pehlay 3 maah tameer ke dauran koi qist nahi hoti. Us ke baad taqreeban 14,000 rupay mahana aasan qist 7 saal mein ada karni hogi.'
        }
      ]
    }
  },
  {
    id: 'punjab-kisan-card-tractor-scheme',
    title: 'Punjab Kisan Card & CM Green Tractor Scheme: Subsidy, Khad & Solar Tube-Well Updates',
    category: 'Kisan',
    categoryLabel: 'Kisan',
    date: '1st October 2026',
    author: 'shmscheem Team',
    highlightBadge: 'Rs. 1.5 Lakh Khad Subsidy',
    officialHelpline: '0800-17000',
    officialSmsCode: '9966',
    summary: 'Punjab bhar ke kisanon ke liye Kisan Card ke zariye 1.5 lakh tak bila-sood qarz khad aur beej ke liye, aur Green Tractor Scheme mein 10 lakh rupay flat subsidy ka ailan. Registration ka mukammal amal.',
    content: {
      overview: 'Hakumat-e-Punjab ne kisanon ki maali madad aur faslon ki pedawar barhane ke liye "CM Kisan Card" jari kiya hai. Is card ke zariye kisan registered dealers se DAP khad, Urea, aur beej par foran subsidy hasil kar sakte hain aur Bank of Punjab ke zariye bila-sood qarz hasil kar sakte hain.',
      eligibilityTable: {
        headers: ['Kisan Category', 'Arazi (Land)', 'Fawaid & Sahulat'],
        rows: [
          ['Chhotay Kisan', '1 se 12.5 Acre zameen', 'Rs. 1,50,000 bila-sood qarz (6 maah muddat)'],
          ['Tractor Scheme', '1 se 50 Acre record', 'Rs. 10 Lakh flat subsidy har tractor par'],
          ['Solar Tube-Well', 'Barani / Canal irrigated arazi', '75% government subsidy solar system par'],
          ['Card Validity', 'Punjab Agriculture Department verified', 'Har fasal (Rabi & Kharif) par renewal']
        ]
      },
      requiredDocuments: [
        'Kisan ka CNIC aur registered SIM (jo apne naam par ho)',
        'PLRA Computerized Fard Malkiat (Zameen ka record)',
        'Biometric verification slip',
        'Bank of Punjab (BOP) branch account opening form'
      ],
      howToApplySteps: [
        'Apne mobile se message type karein: "PKC space CNIC Number" aur "9966" par send karein.',
        'Jawabi message mein verification ke baad qareebi Agriculture Extension Office ja kar biometric tasdeeq karwayein.',
        'Tasdeeq ke baad Bank of Punjab se apna Kisan ATM Card wasool karein.',
        'Registered dealer ke POS machine par card swipe kar ke sasti khad aur beej wasool karein.'
      ],
      officialWarning: 'Black market ya ghair-tasdeeq shuda dealers se khad khareedne par subsidy nahi milegi. Sirf official POS dealers se khareedari karein.',
      faqs: [
        {
          question: 'Qarz wapas kab karna hoga?',
          answer: 'Fasal ki katai ke baad (6 maah ke andar) asool shuda raqam BOP branch mein wapas jama karwani hoti hai taake agli fasal ke liye naya loan mil sakay.'
        }
      ]
    }
  },
  {
    id: 'sehat-sahulat-card-eligibility-8500',
    title: 'Sehat Sahulat Card 2026: 10 Lakh Tak Ka Muft Ilaaj & Panel Hospitals List Check',
    category: 'Sehat-Card',
    categoryLabel: 'Sehat Card',
    date: '30th September 2026',
    author: 'shmscheem Team',
    highlightBadge: '10 Lakh Free Treatment',
    officialHelpline: '0800-07514',
    officialSmsCode: '8500',
    summary: 'Qaumi Sehat Card ke zariye dil ke operations, cancer, dialyses aur maternity ka muft ilaaj private aur sarkari panel hospitals mein. Apna CNIC 8500 par SMS kar ke aheliat janiye.',
    content: {
      overview: 'Sehat Sahulat Program Pakistan ke aam shehriyon ko mehangay aur emergency ilajat ke liye 10 lakh rupay salana tak ka health insurance cover faraham karta hai. KPK, Punjab, aur Islamabad ke shehri apne CNIC ke zariye behtareen private hospitals mein dakhil ho sakte hain.',
      eligibilityTable: {
        headers: ['Bimari / Procedure', 'Coverage Limit', 'Panel Hospitals'],
        rows: [
          ['Dil ke Amraaz (Angioplasty / Bypass)', 'Full cover under 10 Lakh', 'PIC, Shifa, Doctors Hospital etc.'],
          ['Cancer & Chemotherapy', 'Special package treatment', 'Shaukat Khanum, INMOL, NORI'],
          ['Dialyses (Gurday ka ilaaj)', 'Regular weekly dialyses covered', 'All recognized kidney centers'],
          ['Maternity & C-Section', 'Complete delivery package', 'All panel gynecological clinics'],
          ['Accidental Trauma / Surgery', 'Immediate emergency admission', 'Designated 24/7 emergency panel hospitals']
        ]
      },
      requiredDocuments: [
        'Mareez ka asal CNIC Card',
        'Bachon ke ilaaj ke liye Nadra Bay-Form',
        'Nadra Family Tree Certificate (agar zaroorat pesh aaye)'
      ],
      howToApplySteps: [
        'Apna 13-digit CNIC number SMS mein likh kar "8500" par send karein.',
        'Agar aap ahel hain toh message mein aap ka family number aur Sehat Card entitlement aayegi.',
        'Bimari ya dakhlay ki soorat mein kisi bhi panel hospital ke "Sehat Sahulat Desk" par CNIC pesh karein.',
        'Hospital desk aap ka biometric verify karega aur admission bila-muawza ho jayegi.'
      ],
      officialWarning: 'Kisi hospital ko Sehat Card ke dakhlay par koi advance cash ya dawai ke izafi paise ada na karein. Shikayat ki soorat mein 0800-07514 par call karein.',
      faqs: [
        {
          question: 'Kya OPD (doctor ki normal fees) covered hai?',
          answer: 'Sehat Card sirf Indoor patient (hospital mein dakhil hone wale marz) aur surgery ko cover karta hai. Mamooli OPD covered nahi hai.'
        }
      ]
    }
  },
  {
    id: 'benazir-taleemi-wazaif-registration',
    title: 'Benazir Taleemi Wazaif 2026: Primary se College Tak Bachon Ke Wazeefa Form & Amount',
    category: 'Ehsaas',
    categoryLabel: 'Ehsaas Program',
    date: '28th September 2026',
    author: 'shmscheem Team',
    highlightBadge: 'Bachon Ka Wazeefa: Rs. 2,000 - 4,500',
    officialHelpline: '0800-26477',
    officialSmsCode: '8171',
    summary: 'BISP Kafaalat mustahiq khandan ke bachon ke liye Benazir Taleemi Wazaif mein larke aur larkiyon ke liye sah-mahi wazeefa barha diya gaya hai. Primary, Middle, High aur Higher Secondary ke talaba register karwayein.',
    content: {
      overview: 'Gharanon mein taleem ko farogh dene aur school se bahar bachon ko wapis lane ke liye BISP Taleemi Wazaif diye ja rahe hain. Larkiyon ki taleem ke liye wazeefa ki raqam larkon se zayed muqarrar ki gayi hai taake female education ko support kiya ja sakay.',
      eligibilityTable: {
        headers: ['Class Level', 'Larkon Ka Sah-mahi Wazeefa', 'Larkiyon Ka Sah-mahi Wazeefa'],
        rows: [
          ['Primary (Class 1 - 5)', 'Rs. 2,000', 'Rs. 2,500'],
          ['Secondary (Class 6 - 8)', 'Rs. 3,000', 'Rs. 3,500'],
          ['High School (Class 9 - 10)', 'Rs. 3,500', 'Rs. 4,000'],
          ['Higher Secondary (Class 11 - 12)', 'Rs. 4,000', 'Rs. 4,500'],
          ['Primary Graduation Bonus', 'Rs. 3,000 (One-time)', 'Rs. 3,000 (One-time)']
        ]
      },
      requiredDocuments: [
        'Walida ka asal CNIC (jo BISP Kafaalat mein ahel ho)',
        'Bachay ka Nadra Bay-Form',
        'School ke Headmaster / Principal se tasdeeq shuda Admission Slip jis par bacha ka roll number aur class darj ho'
      ],
      howToApplySteps: [
        'BISP Tehsil Office se Taleemi Wazaif Admission Slip hasil karein ya online download karein.',
        'Bachay ke school ke headmaster se is slip par stamp aur sign karwayein.',
        'Walida bachay ke Bay-Form aur is slip ke sath BISP Tehsil Center jayein.',
        'Entry ke baad har 3 maah baad 70% attendance hone par raqam Kafaalat account mein aayegi.'
      ],
      faqs: [
        {
          question: 'Attendance kitni zaroori hai?',
          answer: 'School mein kam az kam 70% hazri lazmi hai. Agar hazri kam hogi toh us sah-mahi ka wazeefa block ho jata hai.'
        }
      ]
    }
  },
  {
    id: 'himmat-card-special-persons-punjab',
    title: 'Himmat Card Scheme: Mazoor Afraad Ke Liye 10,500 Rupay Mahana Wazifa & ATM Card',
    category: 'Youth',
    categoryLabel: 'Youth & Social',
    date: '26th September 2026',
    author: 'shmscheem Team',
    highlightBadge: 'Rs. 10,500 Mahana Wazifa',
    officialHelpline: '1312',
    officialSmsCode: '8171',
    summary: 'Punjab Social Protection Authority (PSPA) ne na-bina aur makhsoos mazoori ke hamil afraad ke liye Himmat Card jari kar diya hai. Bank of Punjab ke ATM se baghair kisi katori ke raqam wasool karein.',
    content: {
      overview: 'CM Punjab Himmat Card scheme ke zariye sobay ke taqreeban 65,000 ghair-fauji mazoor afraad ko jo kamane ke qabil nahi hain, maali khudh-mukhtari faraham ki ja rahi hai. Har mustahiq shakhs ko Bank of Punjab ka ATM card diya jata hai.',
      eligibilityTable: {
        headers: ['Condition', 'Criteria', 'Department'],
        rows: [
          ['Disability Type', 'Darja Awwal (Level 1 / severe disability)', 'Social Welfare Assessment Board'],
          ['Nadra CNIC', 'Wheelchair logo wala special CNIC', 'Nadra Special Registration Desk'],
          ['Government Job', 'Kisi sarkari ya semi-govt idaray mein mulazim na ho', 'PSPA Database'],
          ['Age Limit', '18 saal se zayed umar ke afrad', 'CNIC record verification']
        ]
      },
      requiredDocuments: [
        'Nadra Special CNIC with wheelchair emblem',
        'District Disability Board ka Medical Certificate',
        'Punjab Domicile aur 2 adad passport size tasweerein'
      ],
      howToApplySteps: [
        'Social Welfare Department ke qareebi office jayein aur Disability Certificate hasil karein.',
        'Nadra se wheelchair logo wala CNIC update karwayein.',
        'PSPA ke official portal par online register hon ya Social Welfare Office mein documents jama karwayein.',
        'Bank of Punjab ki branch se apna Himmat Card wasool karein aur ATM pin generate karein.'
      ],
      faqs: [
        {
          question: 'Kya ye raqam life-time milti rahegi?',
          answer: 'Jee haan, jab tak mustahiq fard scheme ke criteria par poora utarta hai, har 3 maah baad us ke account mein raqam muntaqil hoti rahegi.'
        }
      ]
    }
  }
];

export const SCHEME_CATEGORIES = [
  { id: 'ALL', name: 'All Schemes' },
  { id: 'BISP', name: 'BISP 8171' },
  { id: 'Punjab', name: 'Punjab Schemes' },
  { id: 'Sehat-Card', name: 'Sehat Card' },
  { id: 'Ehsaas', name: 'Ehsaas Program' },
  { id: 'Kisan', name: 'Kisan' },
  { id: 'Youth', name: 'Youth' }
];

export const OFFICIAL_SMS_CODES = [
  { code: '8171', service: 'BISP Kafaalat, Dynamic Survey & Taleemi Wazaif', dept: 'Federal Govt', status: 'Official & Verified' },
  { code: '8500', service: 'Sehat Sahulat Card Eligibility & Family Limit', dept: 'State Life / MoNHSRC', status: 'Official & Verified' },
  { code: '8070', service: 'Muft Atta / Rashan Riayat Verification', dept: 'Govt of Punjab', status: 'Official & Verified' },
  { code: '9966', service: 'Punjab Kisan Card Registration & Fertilizers', dept: 'Agriculture Dept Punjab', status: 'Official & Verified' },
  { code: '8800', service: 'Apni Chhat Apna Ghar Housing Verification', dept: 'PHATA Punjab', status: 'Official & Verified' },
  { code: '1312', service: 'Social Welfare & Himmat Card Helpline', dept: 'PSPA Punjab', status: 'Official Helpline' }
];
