export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
  { label: "Blog", href: "/blog" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "Destek", href: "/destek" },
  { label: "İletişim", href: "/iletisim" },
];

export const heroCounters = [
  { label: "Uptime", value: "%99" },
  { label: "Proje", value: "50+" },
  { label: "Sektör", value: "10+" },
  { label: "Destek", value: "7/24" },
];

export const processSteps = [
  {
    title: "Keşif",
    detail: "Hedef, KPI ve ERP/CRM/POS + entegrasyon ihtiyacını netleştiriyoruz.",
  },
  {
    title: "Tasarım",
    detail: "Akış, mimari, API sözleşmesi ve yol haritasını çıkarıyoruz.",
  },
  {
    title: "Geliştirme",
    detail: "Suite kurulumu ve hizmet geliştirmesini güvenli ve test güdümlü yapıyoruz.",
  },
  {
    title: "Devreye Alma",
    detail: "Canlı geçiş, eğitim, SLA ve iyileştirmeyi birlikte yönetiyoruz.",
  },
];

export const services = [
  {
    id: "ozel-yazilim",
    title: "Özel Yazılım Geliştirme",
    summary: "Çekirdek iş akışlarınıza özel, entegre ve güvenli uygulamalar.",
    benefits: [
      "Domain analizi, mikroservis ve API-first mimari.",
      "ERP/CRM/POS ve dış sistem entegrasyonları, test & güvenlik.",
      "SLA’lı bakım, gözlemleme ve canlı destek.",
    ],
    process: ["Analiz", "Çözümleme", "Geliştirme", "Test", "Canlı"],
    tech: ["Node.js", "Next.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "mobil",
    title: "Mobil Uygulama",
    summary: "iOS/Android için markalı, performanslı ve güvenli deneyimler.",
    benefits: [
      "Offline-first, push, güvenli oturum, cihaz özellikleri.",
      "POS/CRM/ERP ve API platformuna bağlı omnichannel akışlar.",
      "Mağaza yayını, analitik ve düzenli sürüm ritmi.",
    ],
    process: ["Keşif", "UX", "Geliştirme", "Test", "Mağaza"],
    tech: ["React Native", "Expo", "TypeScript"],
  },
  {
    id: "uiux",
    title: "Web Tasarım & UI/UX",
    summary: "Araştırma odaklı, ölçeklenebilir design system ile arayüzler.",
    benefits: [
      "Kullanıcı araştırması, akış tasarımı, kullanılabilirlik testleri.",
      "Marka diline uygun design system ve component library teslimi.",
      "Erişilebilirlik, performans ve devreye alma dokümanı.",
    ],
    process: ["Araştırma", "Wireframe", "Tasarım", "Prototip", "Handoff"],
    tech: ["Figma", "Storybook", "Design Tokens"],
  },
  {
    id: "cloud-devops",
    title: "Bulut Çözümleri & DevOps",
    summary: "CI/CD, gözlem ve güvenlik standartlarıyla bulut altyapısı.",
    benefits: [
      "Altyapı-as-Code, otomatik ölçekleme, maliyet kontrolü.",
      "Logging/Tracing/Alerting, SLO/SLA takibi için gözlem katmanı.",
      "Güvenlik, yedeklilik ve felaket kurtarma planları.",
    ],
    process: ["Keşif", "Mimari", "Kurulum", "Otomasyon", "Gözlem"],
    tech: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
  },
  {
    id: "data-ai",
    title: "Veri Analitiği & Yapay Zeka",
    summary: "Veri ambarı, dashboard ve ürünleşmiş makine öğrenimi.",
    benefits: [
      "360° veri modeli, veri kalitesi ve yönetişim metrikleri.",
      "KPI dashboard, uyarı mekanizmaları, self-servis raporlama.",
      "ML: talep tahmini, NLP, anomali; sürekli izleme ve iyileştirme.",
    ],
    process: ["Keşif", "Model", "Kurulum", "Eğitim", "İzleme"],
    tech: ["Python", "dbt", "DuckDB", "Airflow", "Power BI"],
  },
  {
    id: "iot",
    title: "IoT & Endüstri 4.0",
    summary: "Sensör, edge analitiği ve SCADA entegrasyonu ile bağlı operasyonlar.",
    benefits: [
      "Gerçek zamanlı veri, uyarı ve kontrol panelleri.",
      "Üretim verimliliği, kestirimci bakım, enerji optimizasyonu.",
      "Güvenli kimlik, OTA güncelleme, saha devreye alma.",
    ],
    process: ["Analiz", "Prototip", "Entegrasyon", "Test", "Yaygınlaştırma"],
    tech: ["MQTT", "OPC-UA", "Azure IoT", "Grafana", "Timescale"],
  },
];

export const products = [
  {
    id: "erp",
    title: "TarfERP",
    audience: "Üretim, perakende ve dağıtım için modüler, uyarlanabilir ERP.",
    highlights: [
      "Finans, stok, satınalma, üretim ve raporlama modülleri hazır gelir.",
      "SAP/Logo/Netsis, e-fatura, banka, kargo ve pazar yeri entegrasyonları.",
      "Rol bazlı yetkilendirme, audit ve uyum kayıtları.",
    ],
    result: "Operasyon verimliliği +%25, hata oranı -%30",
    integrations: ["Logo", "SAP", "Mikro", "Shopify", "Stripe"],
  },
  {
    id: "crm",
    title: "TarfCRM",
    audience: "Satış, pazarlama ve müşteri başarı için görünür CRM.",
    highlights: [
      "Satış hunisi, fırsat ve teklif yönetimi; otomatik hatırlatıcılar.",
      "Kampanya, segment ve çok kanallı iletişim akışları.",
      "Tahmin, gelir görünürlüğü ve müşteri 360 panelleri.",
    ],
    result: "Kapanış oranı +%18, hunide tam görünürlük",
    integrations: ["HubSpot", "Outlook", "Gmail", "Twilio"],
  },
  {
    id: "pos",
    title: "TarfPOS",
    audience: "Mağaza ve saha satış ekipleri için hızlı, güvenli POS.",
    highlights: [
      "Çoklu şube, stok eşzaman, kampanya/sadakat yönetimi.",
      "Offline satış, güvenli kasa, kullanıcı ve rol yönetimi.",
      "Cihaz/yazıcı entegrasyonları ve anlık raporlar.",
    ],
    result: "Hızlı kasa, hatasız stok ve kampanya ROI artışı",
    integrations: ["Ingenico", "Stripe Terminal", "Logo"],
  },
  {
    id: "api",
    title: "API / Entegrasyon Platformu",
    audience: "Tüm ürünler için merkezi entegrasyon ve gözlem katmanı.",
    highlights: [
      "Hazır konektör: SAP, Logo, Netsis, Mikro, HubSpot, Shopify.",
      "Gözlem: throttle, logging, izleme, uyarılar ve SLA takibi.",
      "Güvenlik: OAuth2/JWT, anahtar rotasyonu, IP allow-list.",
    ],
    result: "Entegrasyon süresi -40%, bakım kolaylığı +",
    integrations: ["Kafka", "RabbitMQ", "Webhook", "s3"],
  },
];

export const sectors = [
  {
    id: "perakende",
    title: "Perakende",
    problem: "Çoklu kanal stok ve kampanya takibinde dağınık veri.",
    solution: "Gerçek zamanlı stok eşzaman, kampanya ROI ve müşteri 360.",
    outcome: "Stok doğruluğu +%22, kampanya ROI netleşti.",
  },
  {
    id: "egitim",
    title: "Eğitim",
    problem: "Öğrenci bilgi, ödeme, canlı ders entegrasyonları ayrıksı.",
    solution: "Ödeme, içerik ve LMS entegrasyonu; raporlu paneller.",
    outcome: "Tahsilat takibi hızlandı, memnuniyet arttı.",
  },
  {
    id: "saglik",
    title: "Sağlık",
    problem: "Randevu, EHR ve KVKK uyumu zorlanıyor.",
    solution: "Güvenli kimlik, randevu ve EHR entegrasyonu, loglama.",
    outcome: "Randevu iptal oranı düştü, KVKK uyumu güçlendi.",
  },
  {
    id: "lojistik",
    title: "Lojistik",
    problem: "Rota planlama, kargo entegrasyon ve teslimat görünürlüğü zayıf.",
    solution: "Rota optimizasyonu, kargo API, canlı takip panelleri.",
    outcome: "Teslimat süresi -%15, rota maliyeti -%12.",
  },
  {
    id: "uretim",
    title: "Üretim",
    problem: "MRP, bakım ve kalite süreçleri manuel.",
    solution: "MRP planlama, kestirimci bakım, kalite kayıt yönetimi.",
    outcome: "Hattın duruşu -%18, kalite kayıt takibi hızlandı.",
  },
  {
    id: "finans",
    title: "Finans",
    problem: "Uyum, raporlama ve güvenlik gereksinimleri yüksek.",
    solution: "Güvenli kimlik, audit, otomatik rapor ve entegrasyon katmanı.",
    outcome: "Denetim süreleri kısaldı, hata payı azaldı.",
  },
];

export const caseStudies = [
  {
    company: "Nova Retail",
    sector: "Perakende",
    title: "Çoklu kanal stok senkronizasyonu",
    metric: "Stok doğruluğu +%22",
    problem: "E-ticaret ve mağaza stokları ayrışıyor, kampanya hataları oluşuyordu.",
    solution:
      "Merkezi stok servisi, POS ve e-ticaret entegrasyonu, kampanya motoru.",
    result: "Stok hataları azaldı, kampanya ROI görünür hale geldi.",
  },
  {
    company: "Logexa",
    sector: "Lojistik",
    title: "Rota optimizasyonu ve canlı takip",
    metric: "Teslimat süresi -%15",
    problem: "Rotalar manuel planlanıyor, gecikmeler fark edilmiyordu.",
    solution: "Otomatik rota, kargo API entegrasyonu, uyarı panelleri.",
    result: "Yakıt maliyeti ve gecikmeler düştü, müşteri memnuniyeti arttı.",
  },
];

export const testimonials = [
  {
    name: "Elif K.",
    role: "Operasyon Direktörü",
    company: "Nova Retail",
    quote:
      "Tarf Yazılım, entegrasyonları hızla kurdu ve canlıya geçişi risksiz yönetti. Destek ekibi çok hızlı.",
  },
  {
    name: "Mert Y.",
    role: "CTO",
    company: "Logexa",
    quote:
      "Kritik lojistik süreçlerini izlenebilir hale getirdik. Dashboard ve uyarılar ile ekip daha çevik.",
  },
];

export const blogPosts = [
  {
    slug: "entegrasyon-icin-5-adim",
    title: "Başarılı entegrasyon için 5 adım",
    category: "Entegrasyon",
    excerpt:
      "İş hedefi, API sözleşmesi, test ortamı, gözlemleme ve güvenlik checklisti.",
    readingTime: "6 dk",
  },
  {
    slug: "ci-cd-ile-hizli-deployment",
    title: "CI/CD ile hızlı ve güvenli deployment",
    category: "DevOps",
    excerpt:
      "Pipeline tasarımı, otomatik test, gözlemleme ve geri alma stratejileri.",
    readingTime: "7 dk",
  },
  {
    slug: "veri-ile-tahmin",
    title: "Veriyle tahmin modelleri nasıl ürünleşir?",
    category: "Data & AI",
    excerpt:
      "Veri hazırlama, model seçimi, izleme ve sürekli iyileştirme pratikleri.",
    readingTime: "8 dk",
  },
];

export const jobs = [
  {
    title: "Kıdemli Frontend Geliştirici",
    location: "İstanbul / Hibrit",
    type: "Tam zamanlı",
    summary: "Next.js, TypeScript, tasarım sistemi deneyimi.",
  },
  {
    title: "Backend Geliştirici",
    location: "Uzaktan",
    type: "Tam zamanlı",
    summary: "Node.js/NestJS, PostgreSQL, bulut ve entegrasyon deneyimi.",
  },
  {
    title: "Ürün Tasarımcısı (UI/UX)",
    location: "İstanbul / Hibrit",
    type: "Tam zamanlı",
    summary: "Araştırma, wireframe, design system, prototipleme.",
  },
];

export const slaPlans = [
  {
    name: "Standart",
    response: "4 saat içinde yanıt",
    features: ["İş günü desteği", "Haftalık rapor", "Temel izleme"],
  },
  {
    name: "Pro",
    response: "2 saat içinde yanıt",
    features: [
      "7/24 destek",
      "Olay sonrası kök neden analizi",
      "Gelişmiş izleme ve alarmlar",
    ],
  },
  {
    name: "Enterprise",
    response: "Öncelikli hat",
    features: [
      "7/24 öncelikli hat",
      "Saha desteği opsiyonu",
      "Özel dashboard ve SLO takibi",
    ],
  },
];

export const faqs = [
  {
    question: "Proje süresi nasıl planlanıyor?",
    answer:
      "Keşif sonrası yol haritası çıkarıyoruz; MVP için genelde 6-10 hafta, tam kapsam için kapsamla orantılı sprint planı yapıyoruz.",
  },
  {
    question: "Bakım ve destek nasıl işliyor?",
    answer:
      "SLA paketine göre hata çözümü, izleme ve iyileştirme hizmeti veriyoruz. Olay sonrası RCA ve iyileştirme önerileri paylaşıyoruz.",
  },
  {
    question: "Güvenlik ve uyum önlemleriniz neler?",
    answer:
      "Kimlik yönetimi, şifreleme, loglama, erişim kontrolü ve düzenli güvenlik testleriyle uyum gereksinimlerini karşılıyoruz.",
  },
  {
    question: "Entegrasyonlarda hangi standartları kullanıyorsunuz?",
    answer:
      "REST/GraphQL, webhooks, mesaj kuyrukları, OAuth2/JWT gibi standartlarla geliştiriyor ve dokümante ediyoruz.",
  },
  {
    question: "Fiyatlama nasıl ilerliyor?",
    answer:
      "İş hedefine göre sabit fiyatlı proje, zamana bağlı model veya ürün lisans modeli üzerinden öneri sunuyoruz.",
  },
];

export const contactInfo = {
  phone: "+90 212 000 00 00",
  email: "iletisim@tarfyazilim.com",
  address: "İstanbul, Türkiye",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6018.410458363396!2d28.9795305!3d41.0151371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDFCsDAwJzU0LjUiTiAyOMKwNTgnNDAuMyJF!5e0!3m2!1str!2str!4v1700000000000",
};
