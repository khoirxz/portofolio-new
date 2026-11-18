export type ProjectCategory = 'Web App' | 'Desain Sistem' | 'Eksperimen Pixel';

export interface ProjectItem {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  role: string;
  summary: string;
  image: string;
  imageAlt: string;
  aspect: 'wide' | 'standard';
  stack: string[];
  challenge: string;
  solution: string;
  outcomes: { label: string; value: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  outcome: string;
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export const PROFILE = {
  name: 'Nadia Kusuma',
  brand: 'KALA.PX',
  role: 'Creative Developer & Pixel Designer',
  email: 'nadia@kalapx.studio',
  location: 'Jakarta, Indonesia',
  availability: 'Tersedia untuk kolaborasi Q4 2026',
};

export const HERO_MEDIA = {
  image: '/src/assets/images/profile_pixel_avatar_1795002650610.jpg',
  alt: 'Potret profil Nadia Kusuma bergaya pixel art monokrom 1-bit di ruang kerja kreatif',
  caption: 'Nadia Kusuma · Jakarta · 1-Bit Dither',
};

export const HERO_METRICS = [
  { value: '24+', label: 'Proyek Web Dirilis' },
  { value: '5 Thn', label: 'Pengalaman Produksi' },
  { value: '99.4%', label: 'Rata-rata Skor Lighthouse' },
  { value: '12', label: 'Penghargaan & Kurasi Desain' },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'monolith-editorial-engine',
    title: 'Monolith Editorial Engine',
    category: 'Web App',
    year: '2026',
    client: 'Galeri Arsitektur Nusantara',
    role: 'Lead Frontend & Motion Engineer',
    summary:
      'Platform publikasi arsitektur brutalist berbasis Next.js App Router dengan tata letak kisi presisi dan transisi halus berkecepatan 60fps.',
    image: '/src/assets/images/work_monolith_web_1795002163175.jpg',
    imageAlt: 'Foto arsitektur beton brutalist hitam putih dengan tekstur dither pixel halus',
    aspect: 'wide',
    stack: ['Next.js App Router', 'TypeScript', 'Motion', 'Tailwind CSS'],
    challenge:
      'Galeri membutuhkan pengalaman membaca katalog arsitektur beresolusi tinggi tanpa jeda pemuatan kasar antar halaman pameran.',
    solution:
      'Membangun arsitektur prefetch rute paralel dengan transisi tirai pixel monokrom serta kompresi gambar adaptif bertekstur halftone.',
    outcomes: [
      { label: 'Waktu Transisi Rute', value: '140ms' },
      { label: 'Kenaikan Durasi Baca', value: '+64%' },
      { label: 'Skor Performa Mobile', value: '99 / 100' },
    ],
  },
  {
    slug: 'raster-audio-lab',
    title: 'Raster Audio Lab',
    category: 'Eksperimen Pixel',
    year: '2026',
    client: 'Kolektif Bunyi Sintetik',
    role: 'Creative Technologist',
    summary:
      'Instrumen web synthesizer modular dengan visualisasi gelombang suara 1-bit real-time dan kontrol parameter presisi di peramban.',
    image: '/src/assets/images/work_raster_synth_1795002163887.jpg',
    imageAlt: 'Synthesizer audio modular hitam putih dengan layar osiloskop pixel berkontras tinggi',
    aspect: 'standard',
    stack: ['Web Audio API', 'Canvas 2D', 'React 19', 'TypeScript'],
    challenge:
      'Menjaga sinkronisasi audio berlatensi rendah sekaligus merender osiloskop dithered tanpa membebani CPU perangkat seluler.',
    solution:
      'Memisahkan loop rendering ke offscreen canvas dengan palet biner murni dan penjadwalan AudioWorklet presisi.',
    outcomes: [
      { label: 'Latensi Audio', value: '8.2ms' },
      { label: 'Pengguna Aktif Bulanan', value: '18.400' },
      { label: 'Frame Rate Render', value: '60 fps' },
    ],
  },
  {
    slug: 'kinetik-type-foundry',
    title: 'Kinetik Type Foundry',
    category: 'Desain Sistem',
    year: '2025',
    client: 'Kinetik Press',
    role: 'Design Systems Architect',
    summary:
      'Katalog digital dan sistem desain tipografi pixel bergaya Swiss untuk penerbit independen beserta penguji spesimen interaktif.',
    image: '/src/assets/images/work_kinetik_grid_1795002163929.jpg',
    imageAlt: 'Poster editorial Swiss hitam putih dengan huruf geometris pixelated di atas kertas arang',
    aspect: 'standard',
    stack: ['Next.js', 'Design Tokens', 'CSS Grid', 'Motion'],
    challenge:
      'Menyatukan 42 varian bobot huruf ke dalam satu sistem token desain yang konsisten antara materi cetak risograph dan situs web.',
    solution:
      'Merancang token skala tipografi modular, dokumentasi komponen monokrom, serta pratinjau spesimen live dengan pengatur kerning.',
    outcomes: [
      { label: 'Komponen Terstandar', value: '68 Unit' },
      { label: 'Konversi Lisensi Huruf', value: '+41%' },
      { label: 'Ukuran Bundle CSS', value: '14 KB' },
    ],
  },
  {
    slug: 'void-spatial-archive',
    title: 'Void Spatial Archive',
    category: 'Eksperimen Pixel',
    year: '2025',
    client: 'Museum Seni Kontemporer',
    role: 'Interactive Art Director',
    summary:
      'Arsip patung digital monokrom dengan efek pencahayaan dramatis dan shader dither Bayer untuk koleksi pameran virtual.',
    image: '/src/assets/images/work_void_archive_1795002165031.jpg',
    imageAlt: 'Karya patung geometris hitam putih dalam ruang museum gelap dengan sorotan cahaya dither pixel',
    aspect: 'standard',
    stack: ['Next.js', 'GLSL Dither Shader', 'TypeScript', 'Motion'],
    challenge:
      'Menampilkan arsip karya 3D kompleks agar tetap ringan diakses pengunjung melalui jaringan seluler standar.',
    solution:
      'Mengubah hasil render menjadi urutan bingkai dither 1-bit terkompresi dengan interpolasi kursor yang responsif dan lembut.',
    outcomes: [
      { label: 'Pengurangan Ukuran Aset', value: '-78%' },
      { label: 'Pengunjung Pameran Virtual', value: '42.000+' },
      { label: 'Waktu Muat Awal', value: '0.9s' },
    ],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01.',
    title: 'Arsitektur Frontend & Next.js',
    description:
      'Membangun aplikasi web berkecepatan tinggi dengan struktur modular, rendering presisi, dan aksesibilitas penuh.',
    deliverables: 'App Router · Server & Client Boundaries · Optimasi Core Web Vitals',
  },
  {
    index: '02.',
    title: 'Sistem Desain & Tipografi Pixel',
    description:
      'Merancang bahasa visual monokrom yang disiplin dengan hierarki huruf tegas, grid matematis, dan kontras tinggi.',
    deliverables: 'Design Tokens · Komponen Modular · Pedoman Kontras WCAG',
  },
  {
    index: '03.',
    title: 'Koreografi Animasi & Interaksi',
    description:
      'Menghadirkan transisi antar bagian yang halus berbasis GPU agar setiap interaksi terasa hidup namun tetap ringan.',
    deliverables: 'Transisi Halus · Micro-interactions · Dukungan Reduced Motion',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 — Sekarang',
    role: 'Principal Creative Developer',
    organization: 'Studio Kala Pixel',
    location: 'Jakarta',
    outcome: 'Memimpin 14 peluncuran web editorial & sistem desain untuk klien budaya dan teknologi.',
  },
  {
    period: '2022 — 2024',
    role: 'Senior Frontend Engineer',
    organization: 'Niskala Digital Works',
    location: 'Bandung',
    outcome: 'Mengurangi waktu muat aplikasi inti sebesar 58% melalui migrasi arsitektur komponen.',
  },
  {
    period: '2020 — 2022',
    role: 'UI Engineer & Visual Designer',
    organization: 'Ruang Tipografi',
    location: 'Yogyakarta',
    outcome: 'Mengembangkan sistem katalog spesimen huruf dan galeri pameran interaktif.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      'Sebelum bekerja dengan Nadia, arsip digital kami terasa berat dan terputus-putus saat berpindah pameran. Setelah pembaruan antarmuka, navigasi terasa menyatu dan rata-rata waktu kunjungan naik 64% dalam tiga bulan pertama.',
    author: 'Dimas Mahendra',
    role: 'Kurator Utama',
    organization: 'Galeri Arsitektur Nusantara',
  },
  {
    quote:
      'Estetika hitam-putih bergaya pixel yang dirancang Nadia tidak sekadar dekoratif—struktur grid dan sistem tokennya memangkas waktu pengembangan produk tim kami hingga separuhnya.',
    author: 'Saraswati Putri',
    role: 'Direktur Produk',
    organization: 'Kinetik Press',
  },
];

export function triggerCVDownload(): void {
  const cvHtml = `<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>CV — ${PROFILE.name}</title>
  <style>
    body { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; max-width: 760px; margin: 48px auto; padding: 0 24px; color: #0a0a0a; background: #ffffff; line-height: 1.6; }
    h1 { font-size: 28px; margin-bottom: 4px; letter-spacing: -0.02em; }
    h2 { font-size: 16px; border-bottom: 2px solid #0a0a0a; padding-bottom: 6px; margin-top: 32px; }
    .meta { font-size: 13px; color: #404040; margin-bottom: 24px; }
    .item { margin-bottom: 16px; }
    .item-title { font-weight: 700; }
    .item-sub { font-size: 13px; color: #525252; }
  </style>
</head>
<body>
  <h1>${PROFILE.name}</h1>
  <div class="meta">${PROFILE.role} · ${PROFILE.location} · ${PROFILE.email}</div>

  <h2>RINGKASAN PROFIL</h2>
  <p>Creative Developer dan Pixel Systems Designer dengan 5+ tahun pengalaman membangun aplikasi web Next.js, sistem desain monokrom, dan antarmuka interaktif berkinerja tinggi.</p>

  <h2>RIWAYAT KERJA</h2>
  ${EXPERIENCES.map(
    (exp) => `
  <div class="item">
    <div class="item-title">${exp.role} — ${exp.organization} (${exp.location})</div>
    <div class="item-sub">${exp.period}</div>
    <div>${exp.outcome}</div>
  </div>`
  ).join('')}

  <h2>PROYEK PILIHAN</h2>
  ${PROJECTS.map(
    (proj) => `
  <div class="item">
    <div class="item-title">${proj.title} (${proj.year})</div>
    <div class="item-sub">${proj.category} · ${proj.client} · Stack: ${proj.stack.join(', ')}</div>
    <div>${proj.summary}</div>
  </div>`
  ).join('')}

  <h2>KEAHLIAN UTAMA</h2>
  <ul>
    ${CAPABILITIES.map((c) => `<li><strong>${c.title}:</strong> ${c.deliverables}</li>`).join('')}
  </ul>
</body>
</html>`;

  const blob = new Blob([cvHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV_Nadia_Kusuma_2026.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
