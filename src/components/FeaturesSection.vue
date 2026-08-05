<template>
  <section id="fitur" class="features-section">
    <div class="features-container">
      <!-- Header -->
      <div class="features-header">
        <h2 class="features-title">Fitur Unggulan Ekosistem Kami</h2>
        <p class="features-subtitle">
          Kami menyediakan segala yang kamu butuhkan untuk naik level dari hobi menjadi profesional.
        </p>
      </div>

      <!-- Asymmetric Flex Layout -->
      <div class="features-flex">
        
        <!-- Left Card: Pelatihan & Workshop Terarah -->
        <div class="feature-card card-training">
          <div class="icon-wrap icon-wrap--blue">
            <svg class="icon-svg icon-svg--yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 class="feature-title feature-title--light feature-title--large">
            Pelatihan &<br/>Workshop<br/>Terarah
          </h3>
          <p class="feature-desc feature-desc--light feature-desc--large">
            Tingkatkan skill game design dan pemahaman kurikulum langsung dari para praktisi expert melalui mentoring eksklusif.
          </p>
        </div>

        <!-- Right Side Wrapper -->
        <div class="right-wrapper">
          <!-- Top Row: Gray and White Boxes -->
          <div class="right-top-row">
            <!-- Center Top Card: Portofolio -->
            <div class="feature-card card-portfolio">
              <div class="icon-wrap icon-wrap--gray">
                <svg class="icon-svg icon-svg--dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 class="feature-title feature-title--dark">Portofolio & Katalog Karya</h3>
              <p class="feature-desc feature-desc--dark">
                Tampilkan edugame buatanmu dalam etalase profesional agar mudah ditemukan oleh pengguna, sekolah, dan calon klien.
              </p>
            </div>

            <!-- Right Top Card: Festival Nasional -->
            <div class="feature-card card-festival">
              <div class="icon-wrap icon-wrap--lightgray">
                <svg class="icon-svg icon-svg--dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 class="feature-title feature-title--dark">Festival Nasional</h3>
              <p class="feature-desc feature-desc--dark">
                Panggung prestisius tahunan untuk memamerkan karya terbaikmu dan meraih penghargaan di level nasional.
              </p>
            </div>
          </div>

          <!-- Bottom Card: Business Matching -->
          <div class="feature-card card-business">
            <div class="card-business-inner">
              <div class="icon-wrap icon-wrap--white">
                <svg class="icon-svg icon-svg--brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="business-text">
                <h3 class="feature-title feature-title--dark">Business Matching</h3>
                <p class="feature-desc feature-desc--dark">
                  Terhubung langsung dengan jaringan sekolah mitra, publisher game, hingga investor potensial untuk komersialisasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
.features-section {
  background-color: #ffffff;
  padding: 80px 0;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* ── Header ── */
.features-header {
  text-align: center;
  margin-bottom: 56px;
}

.features-title {
  font-size: 32px;
  font-weight: 800;
  color: #173b70;
  margin: 0 0 12px 0;
}

.features-subtitle {
  font-size: 16px;
  color: #64748b;
  margin: 0;
}

/* ── Layout ── */
.features-flex {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.right-wrapper {
  flex: 1;
  align-self: center; /* Vertically center the gray/white/yellow group against the blue card */
  display: flex;
  flex-direction: column;
  gap: 24px; /* Close to the yellow box */
}

.right-top-row {
  display: flex;
  gap: 24px;
  align-items: flex-start; /* Ensures cards don't stretch to be equal height */
}

.feature-card {
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

/* ── Card 1: Pelatihan ── */
.card-training {
  flex: 0 0 350px;
  min-height: 560px; /* Clearly taller than the gray, white, and yellow boxes (not level) */
  background-color: #1e3f6d;
}

/* ── Card 2: Portofolio ── */
.card-portfolio {
  flex: 0 0 350px; /* Same width as the blue card */
  min-height: 236px; /* Same height as the white card */
  padding: 20px 28px; /* Compact padding */
  background-color: #dadbd9; /* Light grey */
}

.card-portfolio .icon-wrap {
  margin-bottom: 16px;
}

.card-portfolio .feature-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-portfolio .feature-desc {
  font-size: 13px;
  line-height: 1.55;
}

/* ── Card 3: Festival ── */
.card-festival {
  flex: 0 0 350px; /* Same width as the gray card */
  min-height: 236px; /* Same height as the gray card */
  padding: 20px 28px; /* Same padding as the gray card */
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
}

.card-festival .icon-wrap {
  margin-bottom: 16px;
}

.card-festival .feature-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-festival .feature-desc {
  font-size: 13px;
  line-height: 1.55;
}

/* ── Card 4: Business ── */
.card-business {
  background-color: #ffd700; /* Yellow */
  margin: 0 100px; /* Indents the box, narrower than the gray + white boxes above */
  justify-content: center;
}

.card-business-inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.business-text {
  flex: 1;
}

/* ── Icons ── */
.icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.icon-wrap--blue {
  background-color: #2b5085;
}
.icon-wrap--gray {
  background-color: #c9cbcd;
}
.icon-wrap--lightgray {
  background-color: #f3f4f6;
}
.icon-wrap--white {
  background-color: #ffffff;
}

.icon-svg {
  width: 32px;
  height: 32px;
}

.icon-svg--yellow {
  color: #ffd700;
}
.icon-svg--dark {
  color: #173b70;
}
.icon-svg--brown {
  color: #714a13;
}

/* ── Typography ── */
.feature-title {
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 16px 0;
  line-height: 1.3;
}
.feature-title--dark {
  color: #173b70;
}
.feature-title--light {
  color: #ffffff;
}
.feature-title--large {
  font-size: 34px;
  font-weight: 400; /* As seen in reference image */
  margin-bottom: 32px;
}

.feature-desc {
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}
.feature-desc--dark {
  color: #4b5563;
}
.feature-desc--light {
  color: rgba(255, 255, 255, 0.85);
}
.feature-desc--large {
  font-size: 20px; /* Larger description for training card */
}

/* ── Responsive ── */
@media (max-width: 992px) {
  .features-flex {
    flex-direction: column;
  }
  .right-wrapper {
    align-self: stretch; /* Restore full width on tablet/mobile */
  }
  .card-training {
    flex: auto;
    width: 100%;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .features-container {
    padding: 0 24px;
  }
  .right-top-row {
    flex-direction: column;
  }
  .card-portfolio, .card-festival {
    flex: auto;
    width: 100%;
    min-height: auto;
  }
  .card-business {
    margin: 0; /* Remove indent on small screens */
  }
  .card-business-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
