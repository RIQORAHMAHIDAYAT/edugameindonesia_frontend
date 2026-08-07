<script setup lang="ts">
interface Testimonial {
  id: number
  title: string
  quote: string
  photo: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Dari Iseng Jadi Projek Berbayar',
    quote:
      'Awalnya cuma gabung buat belajar bikin game matematika. Lewat fitur Business Matching, game buatan tim saya akhirnya dibeli oleh rantai sekolah swasta untuk dipakai di kelas!',
    photo: '/testimonials/rian.png',
    name: 'Rian Ardiansyah',
    role: 'Mahasiswa DKV & Indie Game Developer',
  },
  {
    id: 2,
    title: 'Portofolio Jadi Makin Dilirik',
    quote:
      'Fitur Katalognya ngebantu banget! Dulu portofolio cuma numpuk di drive, sekarang ada wadah rapi yang gampang saya bagikan ke calon klien atau tempat magang.',
    photo: '/testimonials/clarissa.png',
    name: 'Clarissa Putri',
    role: 'Boardgame designer Pemula',
  },
  {
    id: 3,
    title: 'Pelatihannya Daging Semua!',
    quote:
      'Bikin edugame itu beda sama game biasa karena harus masuk materi pelajaran. Di pelatihan komunitas ini, saya belajar cara bikin game yang tetep seru tanpa bikin murid bosan.',
    photo: '/testimonials/fajar.png',
    name: 'Fajar Nugraha, S.Pd.',
    role: 'Guru SD & Educator Game Creator',
  },
  {
    id: 4,
    title: 'Dapat Panggung dan Validasi Nyata',
    quote:
      'Bisa masuk finalis di Festival Edugame itu pengalaman luar biasa. Dapet feedback langsung dari para mentor senior yang bikin game saya makin matang dan playable.',
    photo: '/testimonials/bagus.png',
    name: 'Bagus Prasetyo',
    role: 'Ketua Tim Game Dev Kampus',
  },
  {
    id: 5,
    title: 'Solusi Mudah Cari Talenta Lokal',
    quote:
      'Sebagai institusi, kami sering kesulitan mencari game edukasi yang sesuai kurikulum lokal. Platform ini memudahkan kami menemukan game dev berbakat secara langsung.',
    photo: '/testimonials/siti.png',
    name: 'Siti Rahmawati',
    role: 'Konsultan Media Pembelajaran & Mitra Sekolah',
  },
]

// Duplicate array for seamless infinite looping scroll
const marqueeItems = [...testimonials, ...testimonials, ...testimonials]
</script>

<template>
  <section id="testimoni" class="testimonials-wrapper">
    <!-- Main Section Content -->
    <div class="testimonials-section">
      <div class="header-container">
        <h2 class="section-title">Apa Kata Mereka?</h2>
      </div>

      <!-- Oval Container -->
      <div class="marquee-wrap">
        <!-- Decorative Oval Background -->
        <div class="deco-oval" aria-hidden="true"></div>

        <!-- Infinite Marquee Track Container -->
        <div class="marquee-container">
          <div class="marquee-track">
            <div
              v-for="(item, index) in marqueeItems"
              :key="`${item.id}-${index}`"
              class="testimonial-card"
            >
              <!-- Card Header: Photo + User Details -->
              <div class="card-header">
                <img
                  :src="item.photo"
                  :alt="item.name"
                  class="avatar-img"
                  loading="lazy"
                />
                <div class="user-info">
                  <h3 class="user-name">{{ item.name }}</h3>
                  <p class="user-role">{{ item.role }}</p>
                </div>
              </div>

              <!-- Card Body: Quote text -->
              <blockquote class="card-quote">
                "{{ item.quote }}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Wrapper & Oval Background ── */
.testimonials-wrapper {
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
}

.testimonials-section {
  background-color: #ffffff;
  padding-top: 70px;
  padding-bottom: 185px;
  position: relative;
}

.marquee-wrap {
  position: relative;
}

.deco-oval {
  position: absolute;
  top: -140px;
  left: -11%;
  width: 122%;
  height: calc(100% + 280px);
  background-color: #edf3f8;
  border-radius: 50%;
  pointer-events: none;
}

/* ── Header ── */
.header-container {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 52px;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  color: var(--color-primary);
  margin: 0;
  letter-spacing: -0.02em;
}

/* ── Marquee Animation Track ── */
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  /* Soft gradient fade mask on edges */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: scrollMarquee 40s linear infinite;
  padding: 10px 0;
}

/* Pause scroll when user hovers to comfortably read testimonial */
.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

/* ── Testimonial Card Styling ── */
.testimonial-card {
  width: 400px;
  flex: 0 0 400px;
  background-color: #ffffff;
  border-radius: 28px;
  padding: 32px 32px 36px 32px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(23, 59, 112, 0.08);
}

/* Header Inside Card */
.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.avatar-img {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #f1f5f9;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 18px;
  font-weight: 800;
  color: var(--color-primary);
  margin: 0 0 2px 0;
  line-height: 1.25;
}

.user-role {
  font-size: 13px;
  color: #64748b;
  margin: 0;
  font-weight: 500;
  line-height: 1.3;
}

/* Quote Inside Card */
.card-quote {
  margin: 0;
  font-size: 15px;
  font-style: italic;
  line-height: 1.65;
  color: #334155;
  flex-grow: 1;
}

/* ── Responsive adjustments ── */
@media (max-width: 640px) {
  .section-title {
    font-size: 26px;
  }
  .testimonial-card {
    width: 320px;
    flex: 0 0 320px;
    padding: 24px;
  }
  .avatar-img {
    width: 48px;
    height: 48px;
  }
  .user-name {
    font-size: 16px;
  }
  .card-quote {
    font-size: 14px;
  }
}
</style>

