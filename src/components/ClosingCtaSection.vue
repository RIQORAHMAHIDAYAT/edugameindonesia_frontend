<template>
  <section id="gabung" class="cta-section">
    <!-- Hidden SVG Defs: clip-path for yellow card only -->
    <svg width="0" height="0" style="position: absolute; pointer-events: none" aria-hidden="true">
      <defs>
        <!-- Desktop yellow card clip-path (cutouts at Top-Right & Bottom-Left) -->
        <clipPath id="cta-card-clip-desktop" clipPathUnits="objectBoundingBox">
          <path d="M 0.014 0 L 0.740 0 A 0.260 0.553 0 0 1 1 0.553 L 1 0.970 A 0.014 0.030 0 0 1 0.986 1 L 0.260 1 A 0.260 0.553 0 0 1 0 0.447 L 0 0.030 A 0.014 0.030 0 0 1 0.014 0 Z" />
        </clipPath>
        <!-- Mobile yellow card clip-path (same shape as Problem card mobile) -->
        <clipPath id="cta-card-clip-mobile" clipPathUnits="objectBoundingBox">
          <path d="M 0.35 0 L 0.97 0 A 0.03 0.015 0 0 1 1 0.015 L 1 0.72 A 0.55 0.28 0 0 1 0.45 1 L 0.03 1 A 0.03 0.015 0 0 1 0 0.985 L 0 0.18 A 0.35 0.18 0 0 1 0.35 0 Z" />
        </clipPath>
      </defs>
    </svg>

    <div class="cta-container">
      <div class="cta-card-outer">

        <!-- Solid Pure Black Dashed Border SVG (Inverted shape: cutouts at top-left & bottom-right) -->
        <svg class="cta-dashed-svg cta-dashed-svg--desktop" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 120 0
               L 986 0
               A 14 10 0 0 1 1000 10
               L 1000 160
               A 260 200 0 0 1 740 360
               L 14 360
               A 14 10 0 0 1 0 350
               L 0 90
               A 120 90 0 0 1 120 0
               Z"
            fill="none"
            stroke="#000000"
            stroke-width="2.5"
            stroke-dasharray="10 7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg class="cta-dashed-svg cta-dashed-svg--mobile" viewBox="0 0 360 400" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 234 0
               L 10 0
               A 10 6 0 0 0 0 6
               L 0 288
               A 198 112 0 0 0 198 400
               L 350 400
               A 10 6 0 0 0 360 394
               L 360 72
               A 126 72 0 0 0 234 0
               Z"
            fill="none"
            stroke="#000000"
            stroke-width="2.5"
            stroke-dasharray="8 6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <!-- Yellow Card Background -->
        <div class="cta-card">
          <h2 class="cta-title">
            <span class="cta-title-word">Siap</span>
            <span class="cta-title-word">Menunjukkan</span>
            <span class="cta-title-word">Karyamu?</span>
          </h2>
          <p class="cta-subtitle">
            <span class="cta-subtitle-line">Gabung bersama</span>
            <span class="cta-subtitle-line">Komunitas Edugame</span>
            <span class="cta-subtitle-line">Indonesia dan</span>
            <span class="cta-subtitle-line">mulai perjalananmu</span>
            <span class="cta-subtitle-line">hari ini.</span>
          </p>
          <div class="cta-btn-wrap">
            <a href="#beranda" class="cta-btn">
              <span>Gabung Komunitas</span>
              <svg class="cta-arrow" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background-color: #ffffff;
  padding: 60px 0 80px 0;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.cta-card-outer {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

/* Dashed border SVG — on top of yellow card */
.cta-dashed-svg {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  pointer-events: none;
  z-index: 2;
  overflow: visible;
}

.cta-dashed-svg path {
  stroke: #000000 !important;
  stroke-opacity: 1 !important;
  opacity: 1 !important;
}

.cta-dashed-svg--mobile {
  display: none;
}

/* Yellow Card */
.cta-card {
  background-color: var(--color-accent);
  clip-path: url(#cta-card-clip-desktop);
  padding: 64px 48px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 36px;
  font-weight: 800;
  color: var(--color-primary);
  margin: 0 0 16px 0;
  line-height: 1.2;
}

.cta-title-word {
  display: inline;
}

.cta-subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 32px 0;
}

.cta-subtitle-line {
  display: inline;
}

.cta-btn-wrap {
  display: flex;
  justify-content: center;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 9999px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.cta-btn:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}

.cta-arrow {
  width: 20px;
  height: 20px;
}

@media (max-width: 900px) {
  .cta-section {
    padding: 40px 0 60px 0;
  }

  .cta-dashed-svg--desktop {
    display: none;
  }

  .cta-dashed-svg--mobile {
    display: block;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
  }

  .cta-card {
    clip-path: url(#cta-card-clip-mobile);
    padding: 48px 24px 64px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 580px;
  }

  .cta-title {
    font-size: 40px;
    line-height: 1.25;
  }

  .cta-title-word {
    display: block;
  }

  .cta-subtitle {
    font-size: 17px;
    line-height: 1.6;
  }

  .cta-subtitle-line {
    display: block;
  }

  .cta-btn {
    font-size: 17px;
    padding: 18px 36px;
  }

  .cta-arrow {
    width: 24px;
    height: 24px;
  }
}
</style>
