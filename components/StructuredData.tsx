export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KARAKAR HOME",
    "url": "https://mangoodakokusu.com.tr",
    "logo": "https://mangoodakokusu.com.tr/images/logo.png",
    "description": "Premium kalite ev tekstili ve oda kokuları üreticisi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-545-181-4040",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.facebook.com/KARAKARHOME/",
      "https://www.instagram.com/karakarhome",
      "https://x.com/karakarhome",
      "https://tr.pinterest.com/karakarhome/",
      "https://www.youtube.com/@KARAKARHOME"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mango Çubuklu Oda Kokusu",
    "description": "Tropikal mango aroması ile evinize ferahlık katın. 100ml şişede sunulan premium kalite çubuklu oda kokusu. Uzun süre kalıcı, doğal ve zararsız formül.",
    "brand": {
      "@type": "Brand",
      "name": "KARAKAR HOME"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.karakarhome.com.tr/mango-oda-kokusu/",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KARAKAR HOME"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Hacim",
        "value": "100ml"
      },
      {
        "@type": "PropertyValue",
        "name": "Kullanım Süresi",
        "value": "3 Ay"
      },
      {
        "@type": "PropertyValue",
        "name": "Çubuk Sayısı",
        "value": "6 Adet"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://mangoodakokusu.com.tr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Oda Kokuları",
        "item": "https://www.karakarhome.com.tr/oda-kokulari/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mango Oda Kokusu",
        "item": "https://www.karakarhome.com.tr/mango-oda-kokusu/"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mango oda kokusu ne kadar süre dayanır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Normal kullanım koşullarında 100ml şişe yaklaşık 3 ay süreyle koku verir. Kullanım süresi, oda sıcaklığı ve havalandırma durumuna göre değişiklik gösterebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Kaç çubuk kullanmalıyım?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Orta büyüklükte bir oda için 4-6 çubuk yeterlidir. Daha yoğun koku istiyorsanız tüm çubukları, hafif koku tercih ediyorsanız 2-3 çubuk kullanabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Mango oda kokusu zararlı mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır, ürünümüz doğal içeriklerle üretilmiştir ve dermatolojik testlerden geçmiştir. Çocuklar ve evcil hayvanlar için güvenli formüle sahiptir."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KARAKAR HOME",
    "image": "https://mangoodakokusu.com.tr/images/logo.png",
    "@id": "https://mangoodakokusu.com.tr",
    "url": "https://mangoodakokusu.com.tr",
    "telephone": "+90-545-181-4040",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenyalı Mah. Edebali Cad. No:13/A",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34903",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.8767,
      "longitude": 29.2344
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
