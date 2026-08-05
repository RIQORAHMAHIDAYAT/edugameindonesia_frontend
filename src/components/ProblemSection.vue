<template>
  <section id="masalah" class="problem-section">
    <div class="problem-container">
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
  </section>
</template>

<style scoped>
/* ── Section ── */
.problem-section {
  background: transparent;
  padding: 56px 0;
}

.problem-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.problem-card {
  background: #26559b;
  border-radius: 12px;
  padding: 48px 64px;
  max-width: 1000px; /* Make the card itself narrower */
  margin: 0 auto; /* Center the card */
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

  .problem-card {
    padding: 32px 24px;
    gap: 24px;
  }

  .row {
    flex-direction: column;
    gap: 24px;
  }

  .row--2 {
    padding-left: 0;
  }

  .problem-title-wrap {
    flex: none;
  }

  .problem-title {
    font-size: 34px;
  }

  .pain-title {
    font-size: 21px;
  }

  .pain-desc {
    font-size: 15px;
  }
}
</style>
