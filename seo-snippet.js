// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.familyloveddoodles.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.familyloveddoodles.com/","title_tag":"Goldendoodle breeder & family raised puppies | FamilyLoved","meta_description":"Family-focused Goldendoodle breeder in Calhoun Georgia. Healthy, well socialized, family raised puppies in a loving home environment near Atlanta."},{"page_url":"https://www.familyloveddoodles.com/ourstory","title_tag":"Family-focused healthy Goldendoodles | FamilyLoved","meta_description":"Our family raises healthy Goldendoodles in a loving home environment. Well socialized dogs, puppy health care, and responsible breeding practices."},{"page_url":"https://www.familyloveddoodles.com/photogallery","title_tag":"Well socialized family-focused puppies | FamilyLoved","meta_description":"See our past Goldendoodle puppies raised in a loving home environment. Family-focused puppies that are well socialized and ready to join your family."},{"page_url":"https://www.familyloveddoodles.com/goldendoodlemoms","title_tag":"Healthy Goldendoodles & well socialized dogs | FamilyLoved","meta_description":"Meet our Goldendoodle moms. Healthy Goldendoodles from responsible breeding practices, raised as well socialized dogs in a loving home environment."},{"page_url":"https://www.familyloveddoodles.com/availablepuppies","title_tag":"Goldendoodle puppies Atlanta & Calhoun GA | FamilyLoved","meta_description":"Reserve family raised Goldendoodle puppies near Atlanta in Calhoun Georgia. Healthy, well socialized puppies from responsible breeding practices."},{"page_url":"https://www.familyloveddoodles.com/pricing","title_tag":"Family raised Goldendoodles pricing | FamilyLoved","meta_description":"Learn pricing for our family raised Goldendoodles. Healthy Goldendoodles with puppy health care, vet checks, and responsible breeding practices."},{"page_url":"https://www.familyloveddoodles.com/contact","title_tag":"Calhoun Georgia Goldendoodle breeder | FamilyLoved","meta_description":"Contact our Calhoun Georgia Goldendoodle breeder near Atlanta. Family-focused puppies, healthy Goldendoodles, and a loving home environment."}],"keywords":["goldendoodle breeder","family focused puppies","healthy goldendoodles","calhoun georgia puppies","well socialized dogs","family raised puppies","puppy health care","goldendoodle puppies atlanta","loving home environment","responsible breeding practices"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.familyloveddoodles.com/#localbusiness",
  "name": "FamilyLoved Doodles LLC",
  "description": "FamilyLoved Doodles LLC is a family-run Goldendoodle breeder in Calhoun, Georgia focused on raising healthy, well-socialized Goldendoodles as beloved family pets.",
  "url": "https://www.familyloveddoodles.com/",
  "image": [
    "https://static.wixstatic.com/media/5f0344_11eebf34945848fb93ef4d9724a1dc1a~mv2.jpg/v1/fill/w_171,h_139,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f0344_11eebf34945848fb93ef4d9724a1dc1a~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_2379112cf73b4665a80aa9e7910e7cc1~mv2.jpg/v1/fill/w_320,h_284,al_c,q_80,enc_avif,quality_auto/5f0344_2379112cf73b4665a80aa9e7910e7cc1~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_de4b900bf68a474d87fa0a537e1dc136~mv2.jpg/v1/fill/w_242,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f0344_de4b900bf68a474d87fa0a537e1dc136~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_73af0ed64fd54e899f575bb52e5833ca~mv2.jpg/v1/fill/w_320,h_308,al_c,q_80,enc_avif,quality_auto/5f0344_73af0ed64fd54e899f575bb52e5833ca~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_7d711d50e5804160bd7be99920cb857a~mv2.jpg/v1/fill/w_242,h_235,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f0344_7d711d50e5804160bd7be99920cb857a~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_277cc2bf366c4c06b79202b80b55b033~mv2.jpg/v1/crop/x_0,y_0,w_245,h_320,q_80,blur_2,enc_avif,quality_auto/5f0344_277cc2bf366c4c06b79202b80b55b033~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_26c3d04290504c9d9b73ee6019e1b650~mv2.jpg/v1/fill/w_339,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5f0344_26c3d04290504c9d9b73ee6019e1b650~mv2.jpg",
    "https://static.wixstatic.com/media/5f0344_24366e0fa728408a97fef9af806f7ee6~mv2.png/v1/fill/w_225,h_222,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/thumbnail_IMG_1707%20(1)_edited.png",
    "https://static.wixstatic.com/media/11062b_d2a16cc2c9ec41bbbfd8e4f3d8614e67~mv2.jpeg/v1/fill/w_89,h_59,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_d2a16cc2c9ec41bbbfd8e4f3d8614e67~mv2.jpeg"
  ],
  "telephone": "+1-770-401-8764",
  "email": "familyloveddoodles@yahoo.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Calhoun",
    "addressRegion": "GA",
    "postalCode": "30701",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Calhoun"
    },
    {
      "@type": "City",
      "name": "Atlanta"
    },
    {
      "@type": "City",
      "name": "Chattanooga"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Kellie Crane",
    "description": "Founder of FamilyLoved Doodles LLC, a family-run Goldendoodle breeding program in Calhoun, Georgia."
  },
  "sameAs": [],
  "priceRange": "$$",
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Goldendoodle puppy",
      "description": "Goldendoodle puppies raised in a family home with a focus on health, socialization, and smooth transition to their forever homes.",
      "price": "1800",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.familyloveddoodles.com/pricing"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+1-770-401-8764",
    "email": "familyloveddoodles@yahoo.com",
    "areaServed": "US"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
