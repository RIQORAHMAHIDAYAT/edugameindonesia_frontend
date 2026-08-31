<template>
  <section id="beranda" class="hero">
    <!-- Background: Board game photo with gradient overlays -->
    <div class="hero__bg-container" aria-hidden="true">
      <img
        src="/images/gambar_bermain1.jpg"
        alt="Komunitas bermain edugame bersama"
        class="hero__bg-image animate-settle"
        fetchpriority="high"
        loading="eager"
      />
      <!-- Left-to-Right white fade: covers text area on left -->
      <div class="hero__overlay-left"></div>
      <!-- Bottom white fade/blur: softens the bottom of the photo into the page -->
      <div class="hero__overlay-bottom"></div>
    </div>

    <!-- Main Content Container -->
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          Ubah Ide Game<br />
          Ciptaanmu<br />
          Menjadi <span class="hero__karier" role="text" aria-label="Karier">
            <span class="karier-blue karier-anim">Karier</span>
            <span class="kl karier-yellow" aria-hidden="true" style="animation-delay: -2s">Karier</span>
            <span class="kl karier-lr" aria-hidden="true" style="animation-delay: -4s">Karier</span>
            <span class="kl karier-rl" aria-hidden="true" style="animation-delay: -6s">Karier</span>
            <span class="kl karier-radial-bt" aria-hidden="true" style="animation-delay: -8s">Karier</span>
            <span class="kl karier-conic" aria-hidden="true" style="animation-delay: -10s">Karier</span>
          </span><br />
          Berdampak di<br />
          Dunia<br />
          Pendidikan
        </h1>

        <div class="hero__subtitle-wrap">
          <p class="hero__subtitle">
            Wadah terpadu untuk belajar, memamerkan karya, dan memonetisasi
            edugame milikmu.
          </p>
        </div>

        <!-- Button with yellow shadow offset (matches design) -->
        <div class="hero__cta-wrapper">
          <span class="hero__cta-shadow animate-shadow" aria-hidden="true"></span>
          <a href="#gabung" class="hero__cta">
            Gabung Komunitas&nbsp;→
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ─────────────────────────────────────────
   EFFECTS (post-full-render)
───────────────────────────────────────── */
.animate-settle {
  transform: scale(1.04);
  transform-origin: right center;
  animation: settleZoom 3s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

.animate-shadow {
  transform: translateY(4px);
  animation: shadowSettle 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

@keyframes settleZoom {
  0% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes shadowSettle {
  0% {
    transform: translateY(5px);
    opacity: 0.85;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ─────────────────────────────────────────
   ANIMATED "KARIER" — 6 fase warna (siklus 12s)
   Fase: biru → kuning → gradien LR → gradien RL
         → radial → conic.
   Fade-in & fade-out tiap fase sejajar (4%)
   sehingga crossfade antar fase selalu opacity 1.
───────────────────────────────────────── */
.hero__karier {
  position: relative;
  display: inline-block;
  white-space: nowrap;
}

.karier-anim {
  animation: karierPhase 12s linear infinite;
}

.kl {
  display: block;
  position: absolute;
  inset: 0;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: karierPhase 12s linear infinite;
  will-change: opacity;
}

@keyframes karierPhase {
  0% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  16.67% {
    opacity: 1;
  }
  20.67% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.karier-blue {
  color: var(--color-primary);
}

.karier-yellow {
  background-image: linear-gradient(#ffd700, #ffd700);
}

.karier-lr {
  background-image: linear-gradient(to right, var(--color-primary), #ffd700);
}

.karier-rl {
  background-image: linear-gradient(to left, var(--color-primary), #ffd700);
}

.karier-radial-bt {
  background-image: radial-gradient(circle, var(--color-primary) 0%, #ffd700 100%);
}

.karier-conic {
  background-image: conic-gradient(from 0deg, var(--color-primary), #ffd700, var(--color-primary));
}

@media (prefers-reduced-motion: reduce) {
  .animate-settle,
  .animate-shadow {
    transform: none !important;
    opacity: 1 !important;
    animation: none !important;
  }

  .karier-anim,
  .kl {
    animation: none !important;
  }

  .kl {
    opacity: 0 !important;
  }

  .karier-blue {
    opacity: 1 !important;
  }
}

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
.hero {
  position: relative;
  background-color: #ffffff;
  min-height: 100vh; /* Memastikan hero section memenuhi satu layar penuh */
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 60px;
}

/* ─── Background & Overlays ─── */
.hero__bg-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
}

.hero__bg-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

/* Left-to-right white gradient: ensures text on left is crystal clear */
.hero__overlay-left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 68%;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 50%,
    rgba(255, 255, 255, 0.92) 68%,
    rgba(255, 255, 255, 0.45) 84%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 2;
}

/* Bottom fade: softens the bottom of the photo into the page */
.hero__overlay-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    #ffffff 100%
  );
  z-index: 3;
}

/* ─── Foreground Content ─── */
.hero__container {
  position: relative;
  z-index: 10;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
}

.hero__content {
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* ─── Hero Title ─── */
.hero__title {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.06;
  color: var(--color-primary);
  margin: 0 0 28px 0;
  letter-spacing: -2px;
}

/* ─── Subtitle with yellow left accent bar ─── */
.hero__subtitle-wrap {
  border-left: 3.5px solid #ffd700;
  padding-left: 14px;
  margin-bottom: 36px;
}

.hero__subtitle {
  font-size: 15px;
  line-height: 1.7;
  color: #55667a;
  margin: 0;
  max-width: 440px;
}

/* ─── CTA Button with Yellow Shadow Offset ─── */
.hero__cta-wrapper {
  position: relative;
  display: inline-block;
}

/* Yellow block offset behind button */
.hero__cta-shadow {
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 100%;
  height: 100%;
  background: #ffd700;
  border-radius: 4px;
  z-index: 0;
  display: block;
}

.hero__cta {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 14px 28px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
}

.hero__cta:hover {
  background: var(--color-primary-hover);
  transform: translate(-1px, -1px);
}

/* ─── Responsive Media Queries ─── */
@media (max-width: 1024px) {
  .hero {
    min-height: 100vh;
    padding-top: 90px;
  }
  .hero__title {
    font-size: 50px;
  }
  .hero__bg-image {
    width: 75%;
    opacity: 0.85;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: 85px;
    padding-bottom: 50px;
  }
  .hero__bg-image {
    width: 100%;
    opacity: 0.25;
  }
  .hero__overlay-left {
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.9) 100%
    );
  }
  .hero__title {
    font-size: 38px;
    letter-spacing: -1px;
  }
  .hero__subtitle {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero__container {
    padding: 0 20px;
  }
  .hero__title {
    font-size: 32px;
    letter-spacing: -0.5px;
  }
}
</style>