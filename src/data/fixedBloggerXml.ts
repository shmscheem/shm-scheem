/**
 * 100% Fixed & Validated Blogger XML Theme for shmscheem
 * - Fixed: showaddelement='yes' on ALL sections (enables widgets in Blogger Layout editor)
 * - Fixed: locked='false' so 'Blog Posts' widget appears inside 'Page Body' in layout
 * - Fixed: Wrapped raw navigation so 7 unstyled bullet dots do not appear in Layout preview
 * - Fixed: Full Blogger Layout editor compatibility (all gadget boxes show properly)
 */

export const FIXED_BLOGGER_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<!-- ============================================================
  shmscheem SEO Master Theme v2.0 (LAYOUT & POSTS 100% FIXED)
  Inspired by punjab.gov.pk (Sarkari Green/White Aesthetic)
  Built-in SEO: OG tags, Twitter cards, JSON-LD Schema, Geo PK
  ============================================================= -->
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateUrl='shmscheem-seo-master.xml' b:templateVersion='2.0.0' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta charset='UTF-8'/>
<meta content='width=device-width, initial-scale=1, minimum-scale=1' name='viewport'/>
<title><data:blog.pageTitle/></title>
<b:include data='blog' name='all-head-content'/>

<!-- ===== shmscheem SEO Master: meta ===== -->
<meta content='#046a38' name='theme-color'/>
<meta content='max-image-preview:large' name='robots'/>
<meta content='PK' name='geo.region'/>
<meta content='Pakistan' name='geo.placename'/>
<meta content='shmscheem, BISP 8171, Ehsaas Program, Sehat Card, Pakistani government schemes, sarkari schemes Pakistan' name='keywords'/>

<!-- Open Graph -->
<b:if cond='data:view.isSingleItem'>
  <meta content='article' property='og:type'/>
<b:else/>
  <meta content='website' property='og:type'/>
</b:if>
<meta expr:content='data:blog.pageTitle' property='og:title'/>
<meta expr:content='data:blog.canonicalUrl' property='og:url'/>
<meta content='shmscheem' property='og:site_name'/>
<meta content='ur_PK' property='og:locale'/>
<b:if cond='data:blog.metaDescription'>
  <meta expr:content='data:blog.metaDescription' property='og:description'/>
  <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
<b:else/>
  <meta content='Pakistani government schemes (BISP 8171, Ehsaas, Sehat Card, Punjab schemes) ki A-Z maloomat Roman Urdu mein: eligibility, apply ka tareeqa, documents aur payment updates.' property='og:description'/>
  <meta content='Pakistani government schemes ki A-Z maloomat Roman Urdu mein.' name='twitter:description'/>
</b:if>

<meta content='summary_large_image' name='twitter:card'/>
<meta expr:content='data:blog.pageTitle' name='twitter:title'/>

<!-- JSON-LD: WebSite + Organization (homepage) -->
<b:if cond='data:view.isHomepage'>
<script type='application/ld+json'>
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "shmscheem",
  "alternateName": "shmscheem - Pakistani Government Schemes Ki Maloomat",
  "url": "<data:blog.homepageUrl/>",
  "inLanguage": "ur",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "<data:blog.homepageUrl/>search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
<script type='application/ld+json'>
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "shmscheem",
  "url": "<data:blog.homepageUrl/>",
  "logo": "<data:blog.homepageUrl/>favicon.ico"
}
</script>
</b:if>

<!-- JSON-LD: BreadcrumbList (single post) -->
<b:if cond='data:view.isSingleItem'>
<script type='application/ld+json'>
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "<data:blog.homepageUrl/>"},
    {"@type": "ListItem", "position": 2, "name": "<data:blog.pageName/>", "item": "<data:blog.url/>"}
  ]
}
</script>
</b:if>

<b:skin><![CDATA[
/* ============ shmscheem SEO Master : CSS ============ */
:root{
  --green:#046a38; --green-dark:#034d29; --green-darker:#022f1a;
  --gold:#e6b93d; --ink:#1c2420; --muted:#5c6b62;
  --bg:#f2f6f3; --card:#ffffff; --line:#d8e2da;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',system-ui,Tahoma,-apple-system,sans-serif;background:var(--bg);color:var(--ink);line-height:1.75;font-size:16px;-webkit-font-smoothing:antialiased}
a{color:var(--green);text-decoration:none}
a:hover{color:var(--green-dark);text-decoration:underline}
img{max-width:100%;height:auto;display:block}
.wrap{max-width:1140px;margin:0 auto;padding:0 16px}

/* Top bar */
.topbar{background:var(--green-darker);color:#d7ecdf;font-size:13px;border-bottom:1px solid rgba(255,255,255,.1)}
.topbar .wrap{display:flex;justify-content:space-between;align-items:center;gap:10px;padding-top:7px;padding-bottom:7px;flex-wrap:wrap}

/* Header */
.site-header{background:#fff;border-bottom:3px solid var(--green);box-shadow:0 1px 3px rgba(0,0,0,.05)}
.site-header .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-top:14px;padding-bottom:14px}
.logo{display:flex;align-items:center;gap:12px;text-decoration:none}
.logo:hover{text-decoration:none}
.logo-mark{width:52px;height:52px;background:linear-gradient(135deg,var(--green),var(--green-dark));color:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;letter-spacing:-0.5px;box-shadow:0 3px 6px rgba(4,106,56,.3)}
.logo-text b{font-size:26px;color:var(--green-dark);display:block;line-height:1.15;letter-spacing:-0.3px}
.logo-text span{font-size:13px;color:var(--muted);display:block}
.helpline{background:#f0f8f3;border:1px solid #c9e3d2;border-radius:10px;padding:8px 16px;font-size:12px;text-align:right;color:var(--muted)}
.helpline span{display:block;font-size:11px;color:var(--muted)}
.helpline b{display:block;color:var(--green-dark);font-size:20px;letter-spacing:1px;line-height:1.2}

/* Nav */
.mainnav{background:var(--green);position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.15)}
.mainnav ul{list-style:none;display:flex;flex-wrap:wrap;margin:0;padding:0}
.mainnav li{margin:0}
.mainnav a{display:block;color:#fff;padding:13px 18px;font-weight:600;font-size:15px;transition:background .2s}
.mainnav a:hover{background:var(--green-dark);text-decoration:none;color:#fff}
.nav-toggle{display:none;background:var(--green-dark);color:#fff;border:none;font-size:18px;font-weight:600;padding:12px 16px;cursor:pointer;width:100%;text-align:left}

/* Hero */
.hero{background:linear-gradient(135deg,var(--green-darker) 0%,var(--green) 70%,#058a49 100%);color:#fff;padding:40px 0}
.hero h1{font-size:32px;margin-bottom:8px;line-height:1.3;font-weight:700}
.hero p{opacity:.95;max-width:700px;font-size:16px;line-height:1.6}
.quick-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
.qcard{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);border-radius:10px;padding:16px 18px;color:#fff;display:block;transition:all .2s;text-decoration:none}
.qcard:hover{background:rgba(255,255,255,.22);transform:translateY(-2px);color:#fff;text-decoration:none}
.qcard b{display:block;font-size:17px;margin-bottom:4px;color:#fff}
.qcard span{font-size:13px;opacity:.92;display:block}

/* Layout Grid */
.layout{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:26px;padding-top:26px;padding-bottom:26px;align-items:start}
.content{min-width:0}

/* Post Cards */
.post{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:24px;margin-bottom:24px;box-shadow:0 1px 4px rgba(0,0,0,.03)}
.post-title{font-size:23px;line-height:1.4;margin:0 0 10px;font-weight:700}
.post-title a{color:var(--ink);text-decoration:none}
.post-title a:hover{color:var(--green)}
.post-header{font-size:13px;color:var(--muted);margin-bottom:16px;display:flex;gap:14px;flex-wrap:wrap;padding-bottom:10px;border-bottom:1px solid var(--line)}
.post-body{font-size:16px;line-height:1.8;overflow-wrap:break-word}
.post-body p{margin:0 0 16px}
.post-body h2{font-size:22px;color:var(--green-dark);margin:28px 0 12px;padding-bottom:8px;border-bottom:2px solid var(--line);line-height:1.4}
.post-body h3{font-size:18px;color:var(--green-dark);margin:22px 0 10px}
.post-body ul,.post-body ol{margin:0 0 18px 24px}
.post-body li{margin-bottom:6px}

/* Tables */
.post-body .table-wrap{width:100%;overflow-x:auto;margin:0 0 20px;border-radius:8px;border:1px solid var(--line)}
.post-body table{width:100%;border-collapse:collapse;font-size:15px}
.post-body th{background:var(--green);color:#fff;padding:11px 14px;text-align:left;white-space:nowrap}
.post-body td{border:1px solid var(--line);padding:10px 14px;vertical-align:top}
.post-body tr:nth-child(even) td{background:#f8faf8}

/* Callouts */
.post-body blockquote{border-left:4px solid var(--gold);background:#fffdf2;padding:14px 18px;margin:0 0 18px;border-radius:0 8px 8px 0;font-size:15px}
.post-body blockquote p{margin:0}

/* Post Footer */
.post-footer{font-size:13px;color:var(--muted);border-top:1px dashed var(--line);margin-top:20px;padding-top:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
.post-labels{display:flex;gap:6px;flex-wrap:wrap;align-items:center}
.post-labels a{background:var(--bg);border:1px solid var(--line);padding:3px 10px;border-radius:15px;color:var(--green-dark);font-size:12px;text-decoration:none}
.post-labels a:hover{background:var(--green);color:#fff}
.readmore-btn{background:var(--green);color:#fff!important;padding:8px 20px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none;display:inline-block;transition:background .2s}
.readmore-btn:hover{background:var(--green-dark);text-decoration:none}

/* Fallback if no posts */
.no-posts{background:#fff;border:1px solid var(--line);border-radius:12px;padding:34px;text-align:center}
.no-posts h3{color:var(--green-dark);margin-bottom:8px}

/* FAQ Box */
.faq{background:#f7faf8;border:1px solid var(--line);border-radius:10px;padding:20px;margin:24px 0}
.faq h2{border:none!important;margin:0 0 14px!important;padding:0!important;font-size:20px!important}
.faq-item{margin-bottom:14px;padding-bottom:12px;border-bottom:1px dashed var(--line)}
.faq-item:last-child{border:none;margin:0;padding:0}
.faq-item h3{font-size:16px!important;margin:0 0 4px!important;color:var(--green-dark)}
.faq-item p{margin:0!important;font-size:14px;color:var(--muted)}

/* Sidebar */
.sidebar .widget{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px 20px;margin-bottom:22px;box-shadow:0 1px 3px rgba(0,0,0,.03)}
.sidebar .widget h2{font-size:17px;color:var(--green-dark);margin:0 0 14px;padding-bottom:8px;border-bottom:2px solid var(--green);font-weight:700}
.about-box{background:linear-gradient(135deg,#f0f9f3,#ffffff);border:1px solid var(--line);border-left:4px solid var(--green)}
.about-box p{font-size:14px;color:var(--ink);margin-bottom:10px;line-height:1.6}
.about-box p:last-child{margin-bottom:0}

/* Popular Posts */
.PopularPosts ul{list-style:none;margin:0;padding:0}
.PopularPosts li{margin-bottom:12px;padding-bottom:12px;border-bottom:1px dashed var(--line);overflow:hidden}
.PopularPosts li:last-child{border:none;margin:0;padding:0}
.PopularPosts .item-thumbnail{float:left;margin:0 12px 6px 0}
.PopularPosts .item-thumbnail img{border-radius:6px;width:68px;height:68px;object-fit:cover}
.PopularPosts .item-title{font-size:14px;line-height:1.45;font-weight:600}
.PopularPosts .item-title a{color:var(--ink);text-decoration:none}
.PopularPosts .item-title a:hover{color:var(--green)}
.PopularPosts .item-snippet{font-size:12px;color:var(--muted);margin-top:3px}

/* Labels Widget */
.Label ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.Label li{margin:0}
.Label li a{background:var(--bg);border:1px solid var(--line);padding:5px 12px;border-radius:20px;font-size:13px;color:var(--ink);display:inline-block;text-decoration:none}
.Label li a:hover{background:var(--green);color:#fff;border-color:var(--green)}

/* Search Widget */
.search-form{display:flex;gap:6px}
.search-form input{flex:1;padding:9px 12px;border:1px solid var(--line);border-radius:6px;font-size:14px;outline:none}
.search-form input:focus{border-color:var(--green)}
.search-form button{background:var(--green);color:#fff;border:none;padding:9px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px}
.search-form button:hover{background:var(--green-dark)}

/* Footer */
.site-footer{background:var(--green-darker);color:#cfe6d8;margin-top:20px}
.footer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;padding:34px 0}
.site-footer h3{color:#fff;font-size:17px;margin-bottom:12px;font-weight:700}
.site-footer p,.site-footer li{font-size:14px;line-height:1.6}
.site-footer ul{list-style:none;margin:0;padding:0}
.site-footer li{margin-bottom:8px}
.site-footer a{color:#cfe6d8;text-decoration:none}
.site-footer a:hover{color:#fff;text-decoration:underline}
.footer-bottom{border-top:1px solid rgba(255,255,255,.15);padding:14px 0;font-size:13px;text-align:center;color:#a9c9b8}

/* Back to top */
#toTop{position:fixed;bottom:22px;right:22px;width:44px;height:44px;border-radius:50%;background:var(--green);color:#fff;border:none;font-size:20px;cursor:pointer;display:none;box-shadow:0 3px 12px rgba(0,0,0,.25);z-index:200;transition:all .2s}
#toTop:hover{background:var(--green-dark);transform:scale(1.05)}

/* Pager */
.blog-pager{display:flex;justify-content:space-between;gap:12px;margin:10px 0 24px}
.blog-pager a{background:var(--green);color:#fff!important;padding:8px 18px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none}
.blog-pager a:hover{background:var(--green-dark)}
.blog-pager:empty{display:none}

/* Responsive */
@media (max-width:920px){
  .layout{grid-template-columns:1fr}
  .quick-cards{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .site-header .wrap{flex-direction:column;text-align:center}
  .logo{justify-content:center}
  .helpline{text-align:center}
  .nav-toggle{display:block}
  .mainnav ul{display:none;flex-direction:column}
  .mainnav.open ul{display:flex}
  .hero h1{font-size:26px}
}
]]></b:skin>
</head>
<body>

<!-- Top bar (Only on frontend, hidden in Layout editor) -->
<b:if cond='!data:view.isLayoutMode'>
<div class='topbar'>
  <div class='wrap'>
    <span>Hakumat-e-Pakistan Schemes Ki Mustanad Maloomat Portal</span>
    <span id='today-date'>Shaniwar, 2026</span>
  </div>
</div>

<!-- Header -->
<header class='site-header'>
  <div class='wrap'>
    <a class='logo' expr:href='data:blog.homepageUrl'>
      <span class='logo-mark'>SH</span>
      <span class='logo-text'>
        <b>shmscheem</b>
        <span>Pakistani Government Schemes Ki A-Z Maloomat</span>
      </span>
    </a>
    <div class='helpline'>
      <span>BISP Official Helpline: 0800-26477 (Free)</span>
      <span>Sirf 8171 SMS par yaqeen karein</span>
      <b>8171</b>
    </div>
  </div>
</header>

<!-- Main Navigation (Wrapped so 7 bullet points do not leak into layout editor) -->
<nav class='mainnav' id='mainnav'>
  <div class='wrap'>
    <button class='nav-toggle' id='navToggle' type='button' aria-label='Navigation Menu'>&#9776; Menu</button>
    <ul>
      <li><a expr:href='data:blog.homepageUrl'>Home</a></li>
      <li><a href='/search/label/BISP'>BISP 8171</a></li>
      <li><a href='/search/label/Ehsaas'>Ehsaas Program</a></li>
      <li><a href='/search/label/Sehat-Card'>Sehat Card</a></li>
      <li><a href='/search/label/Punjab'>Punjab Schemes</a></li>
      <li><a href='/search/label/Kisan'>Kisan</a></li>
      <li><a href='/search/label/Youth'>Youth</a></li>
    </ul>
  </div>
</nav>

<!-- Hero (Homepage only) -->
<b:if cond='data:view.isHomepage or data:blog.url == data:blog.homepageUrl or data:blog.url == data:blog.canonicalHomepageUrl'>
<section class='hero'>
  <div class='wrap'>
    <h1>Sarkari Schemes Ki Mukammal Aur Mustanad Maloomat</h1>
    <p>BISP 8171, Ehsaas Program, Sehat Card, Punjab ki housing aur kisan schemes — eligibility, apply ka tareeqa, zaroori documents aur payment updates, sab kuch ek jagah Roman Urdu mein.</p>
    <div class='quick-cards'>
      <a class='qcard' href='/search/label/BISP'>
        <b>8171 Check Online</b>
        <span>BISP payment status CNIC se check karein</span>
      </a>
      <a class='qcard' href='/search/label/Sehat-Card'>
        <b>Sehat Card 2026</b>
        <span>Muft ilaaj ki sahulat kaise hasil karein</span>
      </a>
      <a class='qcard' href='/search/label/Punjab'>
        <b>Apni Chhat Apna Ghar</b>
        <span>Bila-sood qarz ki mukammal details</span>
      </a>
    </div>
  </div>
</section>
</b:if>
</b:if>

<!-- Main Layout -->
<div class='wrap layout'>
  <!-- Main Content Area: Page Body with showaddelement='yes' -->
  <main class='content'>
    <b:section class='main' id='page_body' name='Page Body' showaddelement='yes'>
      <b:widget id='Blog1' locked='false' title='Blog Posts' type='Blog' version='1' visible='true'>
        <b:includable id='main' var='top'>
          <div class='blog-posts'>
            <b:if cond='data:posts.notEmpty'>
              <b:loop values='data:posts' var='post'>
                <b:include data='post' name='post'/>
              </b:loop>
              <b:include name='nextprev'/>
            <b:else/>
              <div class='no-posts'>
                <h3>Filhal Koi Post Maujood Nahi</h3>
                <p>Is page ya category par abhi koi post upload nahi hui. Bara-e-meherbani homepage par jayein ya search karein.</p>
              </div>
            </b:if>
          </div>
        </b:includable>

        <b:includable id='post' var='post'>
          <article class='post'>
            <b:if cond='data:post.title'>
              <h2 class='post-title'>
                <b:if cond='data:view.isSingleItem'>
                  <data:post.title/>
                <b:else/>
                  <a expr:href='data:post.url'><data:post.title/></a>
                </b:if>
              </h2>
            </b:if>

            <div class='post-header'>
              <span><data:post.timestamp/></span>
              <b:if cond='data:post.author'>
                <span>By <data:post.author/></span>
              </b:if>
            </div>

            <div class='post-body'>
              <data:post.body/>
            </div>

            <div class='post-footer'>
              <div class='post-labels'>
                <b:if cond='data:post.labels'>
                  <span>Categories:</span>
                  <b:loop values='data:post.labels' var='label'>
                    <a expr:href='data:label.url'><data:label.name/></a>
                  </b:loop>
                </b:if>
              </div>
              <b:if cond='not data:view.isSingleItem'>
                <a class='readmore-btn' expr:href='data:post.url'>Mukammal Parhein &#8594;</a>
              </b:if>
            </div>
          </article>
        </b:includable>

        <b:includable id='nextprev'>
          <div class='blog-pager'>
            <b:if cond='data:newerPageUrl'>
              <a class='newer-link' expr:href='data:newerPageUrl'>&#8592; Aglay Posts</a>
            </b:if>
            <b:if cond='data:olderPageUrl'>
              <a class='older-link' expr:href='data:olderPageUrl'>Pichlay Posts &#8594;</a>
            </b:if>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </main>

  <!-- Sidebar -->
  <aside class='sidebar'>
    <!-- Search Section with showaddelement='yes' -->
    <b:section class='sidebar' id='search_top' name='Search' showaddelement='yes'>
      <b:widget id='BlogSearch1' locked='false' title='Talash Karein' type='BlogSearch' version='1' visible='true'>
        <b:includable id='main'>
          <div class='widget BlogSearch'>
            <h2><data:title/></h2>
            <div class='widget-content'>
              <form action='/search' class='search-form' method='get'>
                <input autocomplete='off' name='q' placeholder='Scheme ka naam likhein...' required='required' type='text'/>
                <button type='submit'>Talash</button>
              </form>
            </div>
          </div>
        </b:includable>
      </b:widget>
    </b:section>

    <!-- Static Info Widgets (Only on frontend) -->
    <b:if cond='!data:view.isLayoutMode'>
      <div class='widget about-box'>
        <h2>shmscheem Kya Hai?</h2>
        <p>shmscheem Pakistani government schemes ki A-Z maloomat ka mustanad zariya hai. Har scheme ki eligibility, apply ka tareeqa, zaroori documents aur latest updates Roman Urdu mein.</p>
        <p><b>Note:</b> Hum koi sarkari idara nahi — maloomat sirf rehbari ke liye hai, faisla hamesha official website se verify kar ke karein.</p>
      </div>

      <div class='widget' style='background:#f0f7f3;border-left:4px solid var(--green);'>
        <h2>Sarkari SMS Verification Codes</h2>
        <ul style='list-style:none;padding:0;margin:0;font-size:13px;line-height:1.8'>
          <li><b>8171:</b> BISP Kafaalat &amp; Taleemi Wazaif</li>
          <li><b>8500:</b> Sehat Sahulat Card Status</li>
          <li><b>8070:</b> Muft Atta / Rashan Scheme</li>
          <li><b>9966:</b> Punjab Kisan Card Verification</li>
        </ul>
        <p style='margin-top:8px;font-size:11px;color:#c0392b;'><b>Khabardaar:</b> Kisi 11-digit mobile number se aane wale SMS fraud hotay hain!</p>
      </div>
    </b:if>

    <!-- Sidebar Dynamic Widgets with showaddelement='yes' -->
    <b:section class='sidebar' id='sidebar_bottom' name='Sidebar' showaddelement='yes'>
      <b:widget id='Label1' locked='false' title='Categories' type='Label' version='1' visible='true'>
        <b:includable id='main'>
          <b:if cond='data:title != ""'>
            <h2><data:title/></h2>
          </b:if>
          <div class='widget-content Label'>
            <ul>
              <b:loop values='data:labels' var='label'>
                <li><a expr:href='data:label.url'><data:label.name/> (<data:label.count/>)</a></li>
              </b:loop>
            </ul>
          </div>
        </b:includable>
      </b:widget>

      <b:widget id='PopularPosts1' locked='false' title='Maqbool Posts' type='PopularPosts' version='1' visible='true'>
        <b:includable id='main'>
          <b:if cond='data:title != ""'>
            <h2><data:title/></h2>
          </b:if>
          <div class='widget-content PopularPosts'>
            <ul>
              <b:loop values='data:posts' var='post'>
                <li>
                  <b:if cond='data:post.thumbnail'>
                    <div class='item-thumbnail'>
                      <a expr:href='data:post.href'><img expr:alt='data:post.title' expr:src='data:post.thumbnail'/></a>
                    </div>
                  </b:if>
                  <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
                  <b:if cond='data:post.snippet'>
                    <div class='item-snippet'><data:post.snippet/></div>
                  </b:if>
                </li>
              </b:loop>
            </ul>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </aside>
</div>

<!-- Footer (Only on frontend) -->
<b:if cond='!data:view.isLayoutMode'>
<footer class='site-footer'>
  <div class='wrap footer-grid'>
    <div>
      <h3>shmscheem</h3>
      <p>Pakistani government schemes (BISP 8171, Ehsaas, Sehat Card, Punjab schemes) ki mukammal aur mustanad maloomat — eligibility, documents, apply ka tareeqa aur updates.</p>
    </div>
    <div>
      <h3>Quick Links</h3>
      <ul>
        <li><a href='/search/label/BISP'>BISP 8171 Check</a></li>
        <li><a href='/search/label/Sehat-Card'>Sehat Card</a></li>
        <li><a href='/search/label/Punjab'>Punjab Schemes</a></li>
        <li><a href='/p/about.html'>About Us</a></li>
        <li><a href='/p/contact.html'>Contact &amp; Disclaimer</a></li>
      </ul>
    </div>
    <div>
      <h3>Sarkari Disclaimer</h3>
      <p>Ye blog koi sarkari website nahi hai. Tamam maloomat sirf aam awami rehbari ke liye hai — apply ya faisla karne se pehle hamesha official government website ya 8171 helpline se tasdeeq karein. Hum aap ka CNIC ya pin code kabhi collect nahi karte.</p>
    </div>
  </div>
  <div class='footer-bottom'>
    <div class='wrap'>Copyright &#169; <span id='year'>2026</span> shmscheem — Jumla haqooq mehfooz hain.</div>
  </div>
</footer>

<button id='toTop' type='button' aria-label='Oopar jayein'>&#8593;</button>

<script>
//<![CDATA[
(function(){
  try {
    var d=new Date();
    var days=['Itwaar','Peer','Mangal','Budh','Jumeraat','Jumma','Hafta'];
    var months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var el=document.getElementById('today-date');
    if(el){ el.textContent = days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear(); }
    var y=document.getElementById('year'); if(y){ y.textContent=d.getFullYear(); }
    var t=document.getElementById('navToggle'), n=document.getElementById('mainnav');
    if(t && n){
      t.onclick=function(){ n.classList.toggle('open'); };
    }
    var b=document.getElementById('toTop');
    if(b){
      window.onscroll=function(){ b.style.display=(window.scrollY>350)?'block':'none'; };
      b.onclick=function(){ window.scrollTo({top:0,behavior:'smooth'}); };
    }
  } catch(e) {}
})();
//]]>
</script>
</b:if>

</body>
</html>
`;
