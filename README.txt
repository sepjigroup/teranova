============================================================
  TERRANOVA RESIDENCE — Landing Page
  Developer: PT. Gendewa Bhuwana Property
============================================================

STRUKTUR FOLDER:
terranova-landing/
├── index.html        ← Halaman utama
├── style.css         ← Semua styling
├── main.js           ← JavaScript (lazy load, tabs, FAQ, dll)
├── README.txt        ← File ini
└── assets/
    ├── img/          ← Letakkan semua gambar di sini
    │   ├── hero-poster.jpg       (background hero saat video belum load)
    │   ├── og-image.jpg          (1200x630px untuk share Meta/Google)
    │   ├── fasad.jpg             (tampak depan — section About)
    │   ├── fasad-1.jpg           (tampak depan — galeri besar)
    │   ├── interior-ruang-tamu.jpg
    │   ├── interior-dapur.jpg
    │   ├── interior-kamar.jpg
    │   ├── interior-bathroom.jpg
    │   ├── siteplan.jpg          (peta site plan)
    │   ├── denah-lt1.jpg         (denah lantai 1)
    │   ├── denah-lt2.jpg         (denah lantai 2)
    │   └── video-thumb.jpg       (thumbnail video YouTube)
    └── video/
        └── promo.mp4             ← Letakkan video lokal di sini

============================================================
KONFIGURASI WAJIB (ganti sebelum deploy):
============================================================

1. YOUTUBE VIDEO ID
   Buka main.js → cari: data-vid="YOUTUBE_VIDEO_ID"
   ATAU buka index.html → cari: data-vid="YOUTUBE_VIDEO_ID"
   Ganti dengan ID video YouTube Anda (contoh: dQw4w9WgXcQ)

2. GOOGLE MAPS EMBED
   Buka index.html → cari blok komentar Google Maps Embed
   Uncomment dan isi iframe src dengan URL embed Maps Anda

3. DOMAIN (untuk SEO)
   Buka index.html → ganti semua "terranovabandung.com"
   dengan domain asli Anda

4. PIXEL TRACKING
   Buka index.html → cari blok komentar TRACKING PIXELS
   Uncomment Meta Pixel / Google Tag / TikTok Pixel
   Isi ID pixel masing-masing platform

   Buka main.js → cari bagian CTA CLICK TRACKING
   Uncomment sesuai pixel yang aktif

5. GAMBAR
   Copy semua foto properti ke folder assets/img/
   dengan nama file sesuai daftar di atas

6. VIDEO LOKAL (opsional, pilih satu: YT atau lokal)
   Copy file video ke assets/video/promo.mp4
   Buka index.html → nonaktifkan blok YouTube
   Aktifkan blok VIDEO LOKAL (uncomment)

============================================================
PLATFORM ADS — Hal yang perlu diperhatikan:
============================================================

META / FACEBOOK ADS:
- Pastikan og-image.jpg sudah diupload (1200x630px)
- Aktifkan Meta Pixel di index.html
- Landing page sudah mobile-first ✓

GOOGLE ADS:
- Domain harus sudah terpasang SSL (HTTPS)
- JSON-LD Schema sudah terpasang ✓
- Sitemap tambahkan manual jika perlu

TIKTOK ADS:
- Aktifkan TikTok Pixel di index.html
- Hero section dirancang visual-first untuk mobile ✓
- Video autoplay bisa langsung jalan dari file lokal

============================================================
CATATAN TEKNIS:
============================================================
- Tidak membutuhkan framework / build tool
- Buka langsung index.html di browser atau upload ke hosting
- Recommended hosting: cPanel shared hosting / VPS / Netlify
- Tidak ada dependency eksternal (selain Google Fonts)
- Google Fonts bisa di-self-host jika ingin full offline

============================================================

============================================================
FILE BARU: strategi-iklan-terranova.html
============================================================

File proposal presentasi strategi digital marketing untuk
ditunjukkan kepada owner/developer Terranova Residence.

ISI FILE (10 Seksi):
1. Cover            — Judul & identitas proposal
2. Peluang Pasar    — Analisis market & potensi revenue
3. Target Audience  — 3 Buyer Persona + Advanced Targeting
4. Meta Ads         — Campaign structure TOFU/MOFU/BOFU
5. TikTok Ads       — In-Feed, Spark, Lead Gen strategy
6. Materi Iklan     — 5 contoh iklan siap pakai (copy+script)
7. Lead Generation  — Funnel + SOP follow-up
8. Budget & ROI     — Tabel biaya + proyeksi 3 bulan
9. Paket Layanan    — Starter / Growth / Full Scale
10. Roadmap         — Rencana kerja bulan 1-2-3

CARA BUKA:
Klik 2x strategi-iklan-terranova.html → buka di browser
Atau: klik Print di browser → Save as PDF untuk presentasi

TIPS PRESENTASI:
- Gunakan layar lebar / projector
- Pakai mode fullscreen browser (F11)
- Tekan Ctrl+P untuk cetak/export PDF langsung
- Semua seksi navigable via nav bar di atas

============================================================
