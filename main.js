/**
 * TERRANOVA RESIDENCE — main.js
 * Vanilla JS, no dependencies, defer-loaded
 */
(function () {
  'use strict';

  /* ──────────────────────────────────────
     1. HEADER — tambah class .scrolled
  ────────────────────────────────────── */
  const header = document.getElementById('header');
  if (header) {
    const updateHeader = () =>
      header.classList.toggle('scrolled', window.scrollY > 80);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // run on load
  }

  /* ──────────────────────────────────────
     2. SMOOTH SCROLL untuk anchor link
  ────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 78; // tinggi header
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ──────────────────────────────────────
     3. FADE-UP ANIMATIONS (Intersection Observer)
     Semua element dengan class .fade-up
  ────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            fadeObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));
  } else {
    // Fallback: tampilkan semua jika IO tidak support
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in-view'));
  }

  /* ──────────────────────────────────────
     4. LAZY IMAGE — tandai .loaded setelah load
     (native loading="lazy" sudah aktif di HTML,
      ini hanya untuk transisi opacity)
  ────────────────────────────────────── */
  const markLoaded = (img) => img.classList.add('loaded');

  document.querySelectorAll('.lazy-img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) {
      markLoaded(img);
    } else {
      img.addEventListener('load', () => markLoaded(img), { once: true });
      img.addEventListener('error', () => {
        // Gambar tidak ditemukan — tetap tampilkan placeholder CSS gradient
        img.style.opacity = '0.15';
      }, { once: true });
    }
  });

  /* ──────────────────────────────────────
     5. YOUTUBE FACADE — klik → load iframe
  ────────────────────────────────────── */
  document.querySelectorAll('.yt-facade').forEach(facade => {
    const activate = () => {
      const videoId = facade.dataset.vid;

      if (!videoId || videoId === 'YOUTUBE_VIDEO_ID') {
        // Belum dikonfigurasi — arahkan ke WA saja
        window.open(
          'https://wa.me/6285111366628?text=Halo%20Terranova%2C%20saya%20ingin%20melihat%20video%20profil%20hunian!',
          '_blank', 'noopener,noreferrer'
        );
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.cssText =
        'position:absolute;inset:0;width:100%;height:100%;border:none;';
      facade.replaceChildren(iframe);
    };

    facade.addEventListener('click', activate);
    // Aksesibilitas — keyboard Enter / Space
    facade.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });

  /* ──────────────────────────────────────
     6. FAQ ACCORDION
  ────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function () {
      const item   = this.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = this.getAttribute('aria-expanded') === 'true';

      // Tutup semua item lain
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          const a = other.querySelector('.faq-a');
          a.setAttribute('hidden', '');
          a.style.maxHeight = '';
        }
      });

      // Toggle item ini
      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        answer.setAttribute('hidden', '');
        answer.style.maxHeight = '';
      } else {
        this.setAttribute('aria-expanded', 'true');
        answer.removeAttribute('hidden');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ──────────────────────────────────────
     7. FLOOR PLAN TABS
  ────────────────────────────────────── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const targetId = 'tab-' + this.dataset.tab;

      // Reset semua
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('hidden', '');
      });

      // Aktifkan yang diklik
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(targetId);
      if (panel) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
      }
    });
  });

  /* ──────────────────────────────────────
     8. HERO VIDEO — sembunyikan jika error
        (poster tetap tampil sebagai fallback)
  ────────────────────────────────────── */
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', () => {
      heroVideo.style.display = 'none';
    }, { once: true });
  }

  /* ──────────────────────────────────────
     9. CTA CLICK TRACKING
        Uncomment bagian sesuai pixel yang aktif
  ────────────────────────────────────── */
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      // ── Google Analytics 4 ──
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'wa_cta_click', {
      //     event_category : 'CTA',
      //     event_label    : link.closest('section')?.id || 'floating',
      //   });
      // }

      // ── Meta Pixel ──
      // if (typeof fbq !== 'undefined') {
      //   fbq('track', 'Contact');
      // }

      // ── TikTok Pixel ──
      // if (typeof ttq !== 'undefined') {
      //   ttq.track('Contact');
      // }
    });
  });

  /* ──────────────────────────────────────
     10. GALLERY — simple lightbox (opsional)
         Klik gambar → tampilkan overlay besar
  ────────────────────────────────────── */
  const buildLightbox = () => {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Lihat gambar');
    lb.style.cssText = [
      'display:none;position:fixed;inset:0;z-index:9999',
      'background:rgba(5,13,26,.95);align-items:center;justify-content:center',
      'cursor:zoom-out;padding:1rem;',
    ].join(';');

    const img = document.createElement('img');
    img.style.cssText =
      'max-width:92vw;max-height:88vh;border-radius:12px;box-shadow:0 8px 48px rgba(0,0,0,.6);';
    img.alt = '';

    const close = document.createElement('button');
    close.textContent = '✕';
    close.setAttribute('aria-label', 'Tutup');
    close.style.cssText = [
      'position:absolute;top:1rem;right:1.25rem',
      'background:rgba(255,255,255,.15);color:#fff;border:none',
      'width:40px;height:40px;border-radius:50%;font-size:1.1rem',
      'cursor:pointer;',
    ].join(';');

    lb.appendChild(img);
    lb.appendChild(close);
    document.body.appendChild(lb);

    const openLb = (src, alt) => {
      img.src = src;
      img.alt = alt || '';
      lb.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };
    const closeLb = () => {
      lb.style.display = 'none';
      document.body.style.overflow = '';
      img.src = '';
    };

    lb.addEventListener('click', e => { if (e.target === lb || e.target === close) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

    // Pasang ke semua gambar di galeri
    document.querySelectorAll('.gi img').forEach(gi => {
      gi.style.cursor = 'zoom-in';
      gi.addEventListener('click', () => openLb(gi.src, gi.alt));
    });
  };
  buildLightbox();

  /* ──────────────────────────────────────
     11. ACTIVE NAV HIGHLIGHT saat scroll
  ────────────────────────────────────── */
  const navLinks = document.querySelectorAll('.header-nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id], div[id]');

  if (navLinks.length && sections.length) {
    const navObs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(a => {
              a.style.color =
                a.getAttribute('href') === '#' + entry.target.id
                  ? 'var(--gold)'
                  : '';
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach(s => navObs.observe(s));
  }

})();
