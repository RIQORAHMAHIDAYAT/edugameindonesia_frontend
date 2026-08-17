<template>
  <section id="fitur" class="features-section">
    <div class="features-container">
      <!-- Header -->
      <div class="features-header">
        <h2 class="features-title">Apa Solusi Yang Kami Lakukan?</h2>
        <p class="features-subtitle">
          Komunitas Edugame Indonesia adalah ekosistem terpadu tempat kamu bisa belajar, berkarya, dan membangun karier di industri game edukasi. Kami hadir untuk membantu memajukan ide-idemu dari sekadar konsep hingga menjadi produk yang diakui dan menghasilkan.
        </p>
      </div>

      <!-- Main Content Grid / Wrapper -->
      <div class="features-grid">
        <!-- Card 1: Portofolio & Katalog Karya (gambar_2.png) -->
        <div class="feature-card card-portfolio">
          <div class="card-image-wrap">
            <img
              src="/gambar_2.png"
              alt="Portofolio & Katalog Karya"
              class="card-img"
              loading="lazy"
            />
          </div>
          <div class="card-content">
            <h3 class="feature-title feature-title--dark">Portofolio & Katalog Karya</h3>
            <p class="feature-desc feature-desc--dark">
              Tampilkan edugame buatanmu dalam etalase profesional agar mudah ditemukan oleh pengguna, sekolah, dan calon klien.
            </p>
          </div>
        </div>

        <!-- Card 2: Festival Nasional (gambar_3.png) -->
        <div class="feature-card card-festival">
          <div class="card-image-wrap">
            <img
              src="/gambar_3.png"
              alt="Festival Nasional"
              class="card-img"
              loading="lazy"
            />
          </div>
          <div class="card-content">
            <h3 class="feature-title feature-title--dark">Festival Nasional</h3>
            <p class="feature-desc feature-desc--dark">
              Panggung prestisius tahunan untuk memamerkan karya terbaikmu dan meraih penghargaan di level nasional.
            </p>
          </div>
        </div>

        <!-- Card 3: Pelatihan & Workshop Terarah (gambar_1.png) -->
        <div class="feature-card card-training">
          <div class="card-image-wrap card-image-wrap--training">
            <img
              src="/gambar_1.png"
              alt="Pelatihan & Workshop Terarah"
              class="card-img"
              loading="lazy"
            />
          </div>
          <div class="card-content card-content--training">
            <h3 class="feature-title feature-title--light">
              Pelatihan & Workshop<br />Terarah
            </h3>
            <p class="feature-desc feature-desc--light">
              Tingkatkan skill game design dan pemahaman kurikulum langsung dari para praktisi expert melalui mentoring eksklusif.
            </p>
          </div>
        </div>

        <!-- Card 4: Business Matching (gambar_4.png) -->
        <div class="feature-card card-business">
          <div class="card-business-inner">
            <div class="card-image-wrap card-image-wrap--business">
              <img
                src="/gambar_4.png"
                alt="Business Matching"
                class="card-img"
                loading="lazy"
              />
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
  </section>
</template>

<style scoped>
/* ── Section ── */
.features-section {
  background-color: #f8fafc;
  padding: 60px 0 80px 0;
}

.features-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Header ── */
.features-header {
  text-align: center;
  margin-bottom: 48px;
}

.features-title {
  font-size: 32px;
  font-weight: 800;
  color: #0056a4;
  margin: 0 0 16px 0;
}

.features-subtitle {
  font-size: 15px;
  color: #4b5563;
  margin: 0 auto;
  max-width: 780px;
  line-height: 1.6;
}

/* ── Desktop Grid Layout ── */
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.15fr;
  grid-template-rows: auto auto;
  gap: 24px;
  align-items: stretch;
}

/* Card 1: Portofolio */
.card-portfolio {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: #ccd2d9;
}

.card-portfolio .card-image-wrap {
  aspect-ratio: 16 / 11;
}

/* Card 2: Festival */
.card-festival {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
}

.card-festival .card-image-wrap {
  aspect-ratio: 16 / 11;
}

/* Card 4: Business Matching */
.card-business {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  background-color: #f7d046;
  padding: 20px 28px;
  justify-content: center;
}

.card-business-inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.card-image-wrap--business {
  flex: 0 0 44%;
  border-radius: 20px;
  aspect-ratio: 16 / 10;
  background: transparent;
}

.business-text {
  flex: 1;
  text-align: left;
}

.business-text .feature-title {
  text-align: left;
  margin-bottom: 10px;
}

.business-text .feature-desc {
  text-align: left;
}

/* Card 3: Pelatihan & Workshop Terarah (Right Tall Card) */
.card-training {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  background-color: #175499;
  display: flex;
  flex-direction: column;
}

.card-image-wrap--training {
  aspect-ratio: 16 / 13;
}

.card-content--training {
  padding: 32px 24px;
  text-align: center;
}

.card-content--training .feature-title {
  font-size: 22px;
  margin-bottom: 16px;
  line-height: 1.35;
}

.card-content--training .feature-desc {
  font-size: 14.5px;
  line-height: 1.6;
}

/* ── Card Base ── */
.feature-card {
  border-radius: 28px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.card-image-wrap {
  width: 100%;
  overflow: hidden;
  background-color: #f1f5f9;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

/* ── Typography ── */
.feature-title {
  font-size: 19px;
  font-weight: 700;
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.feature-title--dark {
  color: #0b457f;
}

.feature-title--light {
  color: #ffffff;
}

.feature-desc {
  font-size: 13.5px;
  line-height: 1.55;
  margin: 0;
}

.feature-desc--dark {
  color: #334155;
}

.feature-desc--light {
  color: rgba(255, 255, 255, 0.9);
}

/* ── Responsive Tablet & Mobile ── */
@media (max-width: 960px) {
  .features-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* Urutan saat di Mobile/Tablet:
     1. Portofolio & Katalog Karya (order: 1)
     2. Pelatihan & Workshop Terarah (order: 2)
     3. Festival Nasional (order: 3)
     4. Business Matching (order: 4)
  */
  .card-portfolio {
    order: 1;
    width: 100%;
  }

  .card-training {
    order: 2;
    width: 100%;
  }

  .card-festival {
    order: 3;
    width: 100%;
  }

  .card-business {
    order: 4;
    width: 100%;
  }
}

@media (max-width: 640px) {
  .features-section {
    padding: 40px 0 60px 0;
  }

  .features-container {
    padding: 0 16px;
  }

  .features-title {
    font-size: 24px;
  }

  .features-subtitle {
    font-size: 14px;
  }

  .features-grid {
    gap: 20px;
  }

  .card-business {
    padding: 20px 18px;
  }

  .card-business-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }

  .card-image-wrap--business {
    flex: auto;
    width: 100%;
  }

  .business-text {
    text-align: center;
  }

  .business-text .feature-title,
  .business-text .feature-desc {
    text-align: center;
  }
}
</style>
