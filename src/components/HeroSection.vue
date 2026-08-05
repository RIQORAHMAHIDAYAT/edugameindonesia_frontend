<template>
  <section id="beranda" class="hero">
    <!-- Organic blob shape via clip-path — matches reference exactly -->
    <div class="hero__blob" aria-hidden="true"></div>

    <div class="hero__container">
      <!-- ── Left: Text ── -->
      <div class="hero__text">
        <h1 class="hero__title">
          Ubah Ide Game<br />
          Ciptaanmu<br />
          Menjadi Karier<br />
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
          <span class="hero__cta-shadow" aria-hidden="true"></span>
          <a href="#gabung" class="hero__cta">GABUNG KOMUNITAS &nbsp;→</a>
        </div>
      </div>

      <!-- ── Right: Photo ── -->
      <div class="hero__photo-wrap">
        <div class="hero__photo-frame">
          <img src="/hero-team.png" alt="Tim Edugame Indonesia berkolaborasi" class="hero__photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
.hero {
  background: #ffffff;
  position: relative;
  overflow: hidden;
  min-height: 640px;
}

/*
  Gray background shape — matches Figma: 1083×885px rounded rect
  Rotated -13deg. Large so photo sits inside it.
  overflow:hidden on .hero clips excess.
*/
.hero__blob {
  position: absolute;
  top: 50%;
  right: -260px;
  transform: translateY(-50%) rotate(-13deg);
  width: 1060px;
  height: 880px;
  background: #e8eaf0;
  border-radius: 130px;
  z-index: 0;
  pointer-events: none;
}


/* ─── Container ─── */
.hero__container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 40px 72px;
  display: grid;
  grid-template-columns: 48% 52%;
  align-items: center;
  min-height: 640px;
}

/* ─── Left text ─── */
.hero__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero__title {
  font-size: 60px;
  font-weight: 900;
  line-height: 1.07;
  color: #0b2d6e;
  margin: 0 0 28px 0;
  letter-spacing: -2px;
}

/* Yellow left-border description */
.hero__subtitle-wrap {
  border-left: 4px solid #ffd700;
  padding-left: 14px;
  margin-bottom: 32px;
}

.hero__subtitle {
  font-size: 14px;
  line-height: 1.7;
  color: #55667a;
  margin: 0;
  max-width: 360px;
}

/* ─── CTA Button with yellow shadow offset ─── */
.hero__cta-wrapper {
  position: relative;
  display: inline-block;
}

/* Yellow block behind button — offset bottom-right */
.hero__cta-shadow {
  position: absolute;
  bottom: -7px;
  right: -7px;
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
  background: #0b2d6e;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 14px 26px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.2s;
  white-space: nowrap;
}

.hero__cta:hover {
  background: #143d8a;
}

/* ─── Right photo ─── */
.hero__photo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}

.hero__photo-frame {
  position: relative;
  width: 100%;
  max-width: 430px;
  z-index: 1; /* create a stacking context */
}

/* Bingkai kuning di belakang gambar */
.hero__photo-frame::before {
  content: "";
  position: absolute;
  z-index: -1;
  /* Centering absolut agar simetris sempurna di SEMUA sisi (kiri-kanan, atas-bawah) */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 80px);  /* Lebih lebar dari gambar */
  height: calc(100% - 120px); /* Lebih pendek dari gambar */
  background: #ffd700;
  border: 2px solid #173B70;
  border-radius: 0;
}

.hero__photo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 550px;
  object-fit: cover;
  object-position: top center;
  display: block;
  /* Border navy/dark blue tipis */
  border: 2px solid #173B70;
  border-radius: 0; /* Kotak/sharp */
}

/* ─── Responsive ─── */
@media (max-width: 960px) {
  .hero {
    min-height: 0;
  }
  .hero__blob {
    display: block;
    width: 420px;
    height: 350px;
    top: 50%;
    right: -90px;
    transform: translateY(-50%) rotate(-13deg);
  }
  .hero__container {
    grid-template-columns: 1fr;
    padding: 48px 24px 56px;
    min-height: 0;
  }
  .hero__title { font-size: 38px; }
  .hero__photo-wrap { display: none; }
}
</style>
