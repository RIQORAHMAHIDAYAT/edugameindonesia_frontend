<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

const { target: sectionRef, isVisible } = useReveal<HTMLElement>({ threshold: 0.15 })
</script>

<template>
  <svg width="0" height="0" style="position: absolute; width: 0; height: 0" aria-hidden="true">
    <defs>
      <!-- Desktop clip-path (wide/short aspect ratio) -->
      <clipPath id="problem-card-clip" clipPathUnits="objectBoundingBox">
        <path
          d="M 0.120 0
             L 0.986 0
             A 0.014 0.030 0 0 1 1 0.030
             L 1 0.447
             A 0.260 0.553 0 0 1 0.740 1
             L 0.014 1
             A 0.014 0.030 0 0 1 0 0.970
             L 0 0.255
             A 0.120 0.255 0 0 1 0.120 0
             Z"
        />
      </clipPath>
      <!-- Mobile clip-path (tall/narrow ~1:2 aspect ratio)
           Proportional quarter-ellipse arcs matching the exact design screenshot:
           - Top-left arc: starts x=0.35 on top, y=0.18 on left (A 0.35 0.18)
           - Bottom-right arc: starts y=0.72 on right, x=0.45 on bottom (A 0.55 0.28) -->
      <clipPath id="problem-card-clip-mobile" clipPathUnits="objectBoundingBox">
        <path
          d="M 0.35 0
             L 0.97 0
             A 0.03 0.015 0 0 1 1 0.015
             L 1 0.72
             A 0.55 0.28 0 0 1 0.45 1
             L 0.03 1
             A 0.03 0.015 0 0 1 0 0.985
             L 0 0.18
             A 0.35 0.18 0 0 1 0.35 0
             Z"
        />
      </clipPath>
    </defs>
  </svg>

  <section id="masalah" class="problem-section" ref="sectionRef" :class="{ 'is-animated': isVisible }">
    <div class="problem-container">
      <div class="problem-card-border">
        <div class="problem-card">
          <!-- Baris 1: judul kiri + pain 1 kanan -->
          <div class="row row--1">
            <div class="problem-title-wrap">
              <h2 class="problem-title">
                Kenapa Kreator<br />
                Edugame Sering<br />
                <span class="problem-title-highlight">Stuck?</span>
              </h2>
            </div>

            <div class="pain-card">
              <h3 class="pain-title">Karya Bagus, Tapi Sepi Pembeli</h3>
              <p class="pain-desc">
                Sudah susah payah bikin edugame keren, tapi bingung cara
                memasarkannya ke sekolah, industri, atau investor.
              </p>
            </div>
          </div>

          <!-- Baris 2: pain 2 tengah -->
          <div class="row row--2">
            <div class="pain-card pain-card--center">
              <h3 class="pain-title">Skill Autodidak Masih Nanggung</h3>
              <p class="pain-desc">
                Ingin bikin game edukasi yang benar-benar interaktif, tapi bingung
                cara memadukan desain game yang seru dengan kurikulum pelajaran.
              </p>
            </div>
          </div>

          <!-- Baris 3: pain 3 kiri -->
          <div class="row row--3">
            <div class="pain-card pain-card--left">
              <h3 class="pain-title">Merasa Berjuang Sendirian</h3>
              <p class="pain-desc">
                Sulit menemukan teman satu visi, mentor tempat bertanya, maupun
                panggung yang tepat untuk memvalidasi dan memamerkan karya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section ── */
.problem-section {
  background: transparent;
  padding: 48px 0 24px 0;
  position: relative; /* ensure stacking context above hero blob */
  z-index: 1;
}

/* ── Animation Initial & Target States ── */
.problem-title-wrap {
  opacity: 0;
  transform: translateY(35px);
  transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}

.row--1 .pain-card,
.row--2 .pain-card,
.row--3 .pain-card {
  opacity: 0;
  transform: translateX(80px);
  transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: opacity, transform;
}

.is-animated .problem-title-wrap {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}

.is-animated .row--1 .pain-card {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.25s;
}

.is-animated .row--2 .pain-card {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.4s;
}

.is-animated .row--3 .pain-card {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.55s;
}

/* Interactive hover untuk pain card (setelah state is-animated agar menang cascade) */
.is-animated .pain-card:hover {
  transform: translateY(-4px);
}

.problem-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.problem-card-border {
  background: var(--color-accent);
  clip-path: url(#problem-card-clip);
  max-width: 1000px;
  margin: 0 auto;
  padding: 3px; /* Ketebalan garis tepi kuning */
}

.problem-card {
  background: var(--color-primary);
  clip-path: url(#problem-card-clip);
  padding: 48px 64px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ── Rows ── */
.row {
  display: flex;
  align-items: flex-start;
}

/* Row 1: title left + pain 1 right */
.row--1 {
  display: flex;
  gap: 40px;
  align-items: flex-end;
}

.problem-title-wrap {
  flex: 0 0 340px;
}

.problem-title {
  font-size: 38px;
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
}

.problem-title-highlight {
  color: var(--color-accent);
}

/* Pain 1 fills remaining space on right smoothly */
.row--1 .pain-card {
  flex: 1;
}

.pain-card--center {
  width: 100%;
}

.pain-card--left {
  width: 100%;
}

/* Row 2: pain 2 shifted toward the center */
.row--2 {
  padding-left: 220px; /* Align with the word 'Edugame' */
  padding-right: 40px;
}

/* Row 3: pain 3 back to the left */
.row--3 {
  padding-left: 0;
  padding-right: 200px;
}

/* ── Pain Card ── */
.pain-card {
  border-left: 3px solid var(--color-accent);
  padding: 4px 0 4px 20px; /* Reduced vertical padding */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pain-title {
  font-size: 20px; /* Reduced from 24px */
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.pain-desc {
  font-size: 14px; /* Reduced from 16px */
  line-height: 1.6;
  color: #e0e4eb;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .problem-container {
    padding: 0 24px;
  }

  .problem-card-border {
    clip-path: url(#problem-card-clip-mobile);
    padding: 3px;
  }

  .problem-card {
    clip-path: url(#problem-card-clip-mobile);
    padding: 44px 24px 80px 24px;
    gap: 24px;
  }

  .row {
    flex-direction: column;
    gap: 24px;
  }

  .row--1 {
    align-items: flex-start; /* Prevent items from being pushed right in column direction */
  }

  .row--2 {
    padding-left: 0;
    padding-right: 0;
  }

  .row--3 {
    padding-right: 0; /* Reset the 200px right padding on mobile */
  }

  .problem-title-wrap {
    flex: none;
    width: 100%;
  }

  .problem-title {
    font-size: 28px;
    text-align: right; /* Sesuai desain: Stuck? di kanan */
  }

  .pain-card {
    width: 100%;
  }

  .pain-title {
    font-size: 18px;
  }

  .pain-desc {
    font-size: 14px;
  }
}
</style>
