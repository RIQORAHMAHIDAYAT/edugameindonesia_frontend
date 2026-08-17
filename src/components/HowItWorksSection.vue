<template>
  <section id="cara-kerja" class="steps-section">
    <div class="steps-container">
      <!-- Section Title -->
      <h2 class="steps-main-title">3 Langkah Mudah Memulai</h2>

      <!-- Desktop Timeline (Visible on Large Screens) -->
      <div class="steps-timeline desktop-only">
        <!-- SVG Connecting Dashed Line -->
        <svg class="steps-svg-line" viewBox="0 0 1000 480" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 570 65 L 430 240 L 570 415"
            stroke="#94a3b8"
            stroke-width="2.5"
            stroke-dasharray="6 6"
          />
        </svg>

        <!-- Step 1: Text Left, Badge Right -->
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

        <!-- Step 2: Badge Left, Text Right -->
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

        <!-- Step 3: Text Left, Badge Right -->
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

      <!-- Mobile List (Visible on Small Screens) - Matches Image Exactly -->
      <div class="steps-list mobile-only">
        <!-- Step 1 -->
        <div class="mobile-step">
          <div class="mobile-step-header">
            <div class="step-badge">
              <span>01</span>
            </div>
            <h3 class="mobile-step-title">Buat Profil & Daftarkan Karyamu</h3>
          </div>
          <p class="mobile-step-desc">
            Lengkapi data diri dan unggah file edugame atau portofoliomu ke dalam katalog profesional kami. Tentukan spesialisasi dan kualifikasi karyamu dengan mudah.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="mobile-step">
          <div class="mobile-step-header">
            <div class="step-badge">
              <span>02</span>
            </div>
            <h3 class="mobile-step-title">Asah Skill & Ikuti Event</h3>
          </div>
          <p class="mobile-step-desc">
            Ikuti berbagai workshop intensif dan festival nasional untuk memvalidasi kualitas karyamu. Bertemu mentor yang akan membimbingmu menghaluskan mekanik game.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="mobile-step">
          <div class="mobile-step-header">
            <div class="step-badge">
              <span>03</span>
            </div>
            <h3 class="mobile-step-title">Hubungkan ke Mitra & Monetisasi</h3>
          </div>
          <p class="mobile-step-desc">
            Manfaatkan fitur business matching untuk bertemu pembeli atau investor dan mulai hasilkan pendapatan dari passion-mu dalam membuat game.
          </p>
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

/* ── Badge (Shared Style) ── */
.step-badge {
  flex-shrink: 0;
  width: 90px;
  height: 100px;
  background-color: var(--color-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-7deg);
  box-shadow: -7px 7px 0px var(--color-accent);
}

.step-badge span {
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
}

/* ── Desktop Styles ── */
.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

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

.step-cell--text-right {
  text-align: right;
  align-items: flex-end;
}

.step-cell--text-left {
  text-align: left;
  align-items: flex-start;
}

.step-cell--badge-left {
  align-items: flex-start;
}

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

.steps-timeline .step-badge,
.mobile-only .step-badge {
  transform: rotate(-7deg);
}

/* ── Mobile Styles ── */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .mobile-step {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .mobile-step-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .mobile-step-title {
    font-size: 20px;
    font-weight: 800;
    color: var(--color-primary);
    margin: 0;
    line-height: 1.3;
  }

  .mobile-step-desc {
    font-size: 15px;
    line-height: 1.65;
    color: #4b5563;
    margin: 0;
  }

  .mobile-only .step-badge {
    width: 80px;
    height: 90px;
    border-radius: 14px;
    box-shadow: -6px 6px 0px var(--color-accent);
  }

  .mobile-only .step-badge span {
    font-size: 36px;
  }
}
</style>