<template>
  <section id="cara-kerja" class="steps-section">
    <div class="steps-container">
      <!-- Section Title -->
      <h2 class="steps-main-title">3 Langkah Mudah Memulai</h2>

      <!-- Timeline Wrapper -->
      <div class="steps-timeline">
        <!-- SVG Connecting Dashed Line for Desktop -->
        <svg class="steps-svg-line" viewBox="0 0 1000 480" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 570 65 L 430 240 L 570 415"
            stroke="#94a3b8"
            stroke-width="2.5"
            stroke-dasharray="6 6"
          />
        </svg>

        <!-- Step 1: Text Left (col 1), Badge Right (col 2) -->
        <div class="step-row">
          <div class="step-cell step-cell--text-right">
            <h3 class="step-title">Buat Profil & Daftarkan Karyamu</h3>
            <p class="step-desc">
              Lengkapi data diri dan unggah file edugame atau portofoliomu ke dalam katalog profesional kami. Tentukan spesialisasi dan kualifikasi karyamu dengan mudah.
            </p>
          </div>
          <div class="step-cell step-cell--badge-left">
            <div class="step-badge">
              <span>01</span>
            </div>
          </div>
        </div>

        <!-- Step 2: Badge Left (col 1), Text Right (col 2) -->
        <div class="step-row">
          <div class="step-cell step-cell--badge-right">
            <div class="step-badge">
              <span>02</span>
            </div>
          </div>
          <div class="step-cell step-cell--text-left">
            <h3 class="step-title">Asah Skill & Ikuti Event</h3>
            <p class="step-desc">
              Ikuti berbagai workshop intensif dan festival nasional untuk memvalidasi kualitas karyamu. Bertemu mentor yang akan membimbingmu menghaluskan mekanik game.
            </p>
          </div>
        </div>

        <!-- Step 3: Text Left (col 1), Badge Right (col 2) -->
        <div class="step-row">
          <div class="step-cell step-cell--text-right">
            <h3 class="step-title">Hubungkan ke Mitra & Monetisasi</h3>
            <p class="step-desc">
              Manfaatkan fitur business matching untuk bertemu pembeli atau investor dan mulai hasilkan pendapatan dari passion-mu dalam membuat game.
            </p>
          </div>
          <div class="step-cell step-cell--badge-left">
            <div class="step-badge">
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.steps-section {
  background-color: #ffffff;
  padding: 80px 0;
  position: relative;
}

.steps-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}

.steps-main-title {
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 64px;
}

/* ── Timeline ── */
.steps-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.steps-svg-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ── 2-Column Grid Rows ── */
.step-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.step-cell {
  display: flex;
  flex-direction: column;
}

/* Text on left side of row (col 1) -> align right towards center */
.step-cell--text-right {
  text-align: right;
  align-items: flex-end;
}

/* Text on right side of row (col 2) -> align left away from center */
.step-cell--text-left {
  text-align: left;
  align-items: flex-start;
}

/* Badge on right side of row (col 2) -> align left near center */
.step-cell--badge-left {
  align-items: flex-start;
}

/* Badge on left side of row (col 1) -> align right near center */
.step-cell--badge-right {
  align-items: flex-end;
}

.step-title {
  font-size: 24px;
  font-weight: 800;
  color: var(--color-primary);
  margin: 0 0 12px 0;
  line-height: 1.25;
}

.step-desc {
  font-size: 14.5px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
  max-width: 380px;
}

/* ── Badges ── */
.step-badge {
  width: 90px;
  height: 100px;
  background-color: var(--color-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-7deg);
  box-shadow: -7px 7px 0px #facc15; /* Yellow shadow offset behind the blue badge */
  transition: transform 0.3s ease;
}

.step-badge:hover {
  transform: rotate(-4deg) scale(1.04);
}

.step-badge span {
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .steps-section {
    padding: 56px 0;
  }

  .steps-main-title {
    font-size: 26px;
    margin-bottom: 40px;
  }

  .steps-svg-line {
    display: none;
  }

  .steps-timeline {
    gap: 40px;
  }

  .step-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .step-cell--text-right,
  .step-cell--text-left {
    text-align: center;
    align-items: center;
  }

  .step-cell--badge-left,
  .step-cell--badge-right {
    align-items: center;
    order: -1; /* Place badge above text on mobile */
  }

  .step-desc {
    max-width: 100%;
  }

  .step-title {
    font-size: 20px;
  }

  .step-badge {
    width: 80px;
    height: 90px;
  }

  .step-badge span {
    font-size: 36px;
  }
}
</style>
