<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Col 1: Brand -->
        <div class="footer-col footer-col--brand">
          <h2 class="footer-logo">
            <img src="/Logo_edugame.png" alt="Logo Edugame" class="footer-logo-img" />
          </h2>
          <p class="footer-tagline">
            Pusat Ekosistem Edugame Indonesia, Tempat Berkarya, Belajar, dan Berbisnis.
          </p>
          <p class="footer-community-tagline">
            Komunitas Edugame Indonesia di bawah naungan Yayasan Generasi Cerdas Berdaya (GERCEB).
          </p>
        </div>

        <!-- Col 2: Navigasi -->
        <div class="footer-col footer-col--nav">
          <h3 class="footer-heading">Navigasi</h3>
          <ul class="footer-links">
            <li><a href="#masalah">Problem</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#fitur">Solusi</a></li>
            <li><a href="#cara-kerja">Cara Kerja</a></li>
            <li><a href="#gabung">Gabung Sekarang</a></li>
          </ul>
        </div>

        <!-- Col 3: Kontak Kami -->
        <div class="footer-col footer-col--contact">
          <h3 class="footer-heading">Kontak Kami</h3>
          <div class="footer-contact-items">
            <!-- Phone -->
            <a href="tel:+6288297441757" class="footer-contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>088297441757</span>
            </a>

            <!-- Email -->
            <a href="mailto:komunitas.edugame@gmail.com" class="footer-contact-item">
              <svg class="contact-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>komunitas.edugame@gmail.com</span>
            </a>
          </div>

          <!-- Social Icons -->
          <div class="footer-socials">
            <!-- Instagram -->
            <span class="social-icon" aria-hidden="true">
              <svg class="icon-svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </span>

            <!-- TikTok -->
            <span class="social-icon" aria-hidden="true">
              <svg class="icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .58.04.86.12V9.38a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.64a6.34 6.34 0 0010.83 4.47 6.27 6.27 0 001.9-4.47V8.92a8.28 8.28 0 003.86 1.15v-3.38a4.85 4.85 0 01-4-2z"/>
              </svg>
            </span>

            <!-- Discord -->
            <span class="social-icon" aria-hidden="true">
              <svg class="icon-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary); /* Deep Navy Blue */
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  padding: 64px 0 80px 0;
  color: #ffffff;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2.2fr 1.5fr 2fr;
  gap: 48px;
  align-items: stretch;
}

/* Col 1: Brand */
.footer-col--brand {
  display: flex;
  flex-direction: column;
}
.footer-logo {
  font-size: 38px;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 16px 0;
  letter-spacing: -1px;
  line-height: 1;
}

.footer-logo-img {
  max-width: 150px;
  width: 100%;
  height: auto;
  display: block;
}

.footer-logo-accent {
  color: #ffd700; /* Yellow .id */
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: #e2e8f0;
  margin: 0;
  max-width: 320px;
}

.footer-community-tagline {
  font-size: 14px;
  line-height: 1.6;
  color: #cbd5e1;
  margin-top: auto;
  max-width: 400px;
}

/* Col 2: Navigasi */
.footer-heading {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: #cbd5e1;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

/* Col 3: Kontak */
.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  transition: opacity 0.15s ease;
}

.footer-contact-item:hover {
  opacity: 0.85;
}

.contact-icon {
  width: 18px;
  height: 18px;
  color: #ffffff;
  flex-shrink: 0;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-icon {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}

.icon-svg {
  width: 22px;
  height: 22px;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .footer-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .footer-container {
    padding: 0 24px;
  }
  .footer {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 48px 0 64px 0;
  }
  /* Mobile: brand dibuka (display: contents) supaya item-nya ikut urutan flex,
     dan teks GERCEB dipindah ke paling bawah — di bawah ikon IG, TikTok, Discord */
  .footer-col--brand {
    display: contents;
  }

  .footer-logo {
    order: 1;
  }
  .footer-tagline {
    order: 2;
  }
  .footer-col--nav {
    order: 3;
  }
  .footer-col--contact {
    order: 4;
  }
  .footer-community-tagline {
    order: 5;
    margin-top: 0;
  }
}
</style>
