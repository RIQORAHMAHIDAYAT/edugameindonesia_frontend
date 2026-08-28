<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const colorPattern = ref<'blue-first' | 'yellow-first'>('blue-first')

let observer: IntersectionObserver | null = null

onMounted(() => {
  // Selang-seling warna dadu setiap kali refresh menggunakan sessionStorage
  const lastPattern = sessionStorage.getItem('kei_dice_pattern')
  if (lastPattern === 'blue-first') {
    colorPattern.value = 'yellow-first'
  } else {
    colorPattern.value = 'blue-first'
  }
  sessionStorage.setItem('kei_dice_pattern', colorPattern.value)

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true
        if (sectionRef.value) observer?.unobserve(sectionRef.value)
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    // Jika elemen sudah masuk viewport atau IntersectionObserver belum/tidak menembus kondisi awal,
    // periksa langsung menggunakan boundingClientRect atau set fallback
    const rect = sectionRef.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      isVisible.value = true
    } else {
      observer.observe(sectionRef.value)
    }
  } else {
    isVisible.value = true
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const getDiceSrc = (step: number) => {
  if (colorPattern.value === 'blue-first') {
    // Pola A: Step 1 Biru, Step 2 Kuning, Step 3 Biru
    return step === 2
      ? '/images/dadu/dadu_2_kuning-bg.png'
      : step === 1
        ? '/images/dadu/dadu_1_biru-bg.png'
        : '/images/dadu/dadu_3_biru-bg.png'
  } else {
    // Pola B: Step 1 Kuning, Step 2 Biru, Step 3 Kuning
    return step === 2
      ? '/images/dadu/dadu_2_biru-bg.png'
      : step === 1
        ? '/images/dadu/dadu_1_kuning-bg.png'
        : '/images/dadu/dadu_3_kuning-bg.png'
  }
}
</script>

<template>
  <section class="w-full py-10 md:py-24 bg-white overflow-hidden font-sans">
    <h2 class="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] text-center mb-8 md:mb-20">
      3 Langkah Mudah Memulai
    </h2>

    <!-- Container dipersempit agar tidak renggang (Max 850px). ref="sectionRef" dan class "is-animated" mengontrol trigger animasi -->
    <div ref="sectionRef" class="max-w-[850px] mx-auto px-6 relative z-10" :class="{ 'is-animated': isVisible }">
      
      <!-- SVG Connecting Dashed Line (Desktop Only) -->
      <div class="hidden md:block absolute inset-0 pointer-events-none z-0">
        <svg class="w-full h-full steps-svg-line" viewBox="0 0 850 600" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Garis zigzag presisi dari titik tengah dadu Kanan -> Kiri -> Kanan -->
          <path
            d="M 530 100 L 320 300 L 530 500"
            stroke="#94A3B8"
            stroke-width="2"
            stroke-dasharray="8 8"
          />
        </svg>
      </div>

      <div class="flex flex-col gap-6 md:gap-12 relative z-10 steps-container">
        
        <!-- STEP 1 -->
        <div class="step-row relative w-full flex flex-col md:grid md:grid-cols-2 items-center md:gap-12">
          <!-- Mobile Header (Visible only on mobile) -->
          <div class="flex md:hidden items-center gap-3 w-full mb-1">
            <div class="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center">
              <img :src="getDiceSrc(1)" class="step-dice w-full h-full object-contain scale-[1.8] drop-shadow-md" alt="Langkah 1" />
            </div>
            <h3 class="step-text text-xl font-bold text-[#1E3A8A] leading-tight">Buat Profil & Daftarkan Karyamu</h3>
          </div>

          <!-- Desktop Text (Col 1) & Mobile Description -->
          <div class="step-text w-full order-2 md:order-1 text-left md:text-right">
            <h3 class="hidden md:block text-2xl font-bold text-[#1E3A8A]">Buat Profil & Daftarkan Karyamu</h3>
            <p class="text-gray-600 mt-1 md:mt-3 text-base leading-relaxed">
              Lengkapi data diri dan unggah file edugame atau portofoliomu ke dalam katalog profesional kami. Tentukan spesialisasi dan kualifikasi karyamu dengan mudah.
            </p>
          </div>

          <!-- Desktop Dice (Col 2) -->
          <div class="hidden md:flex order-1 md:order-2 justify-start">
            <div class="relative w-[160px] h-[160px] flex items-center justify-center">
               <img :src="getDiceSrc(1)" class="step-dice w-full h-full object-contain scale-[1.5] drop-shadow-xl" alt="1" />
            </div>
          </div>
        </div>

        <!-- STEP 2 -->
        <div class="step-row relative w-full flex flex-col md:grid md:grid-cols-2 items-center md:gap-12">
          <!-- Mobile Header -->
          <div class="flex md:hidden items-center gap-3 w-full mb-1">
            <div class="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center">
              <img :src="getDiceSrc(2)" class="step-dice w-full h-full object-contain scale-[1.8] drop-shadow-md" alt="Langkah 2" />
            </div>
            <h3 class="step-text text-xl font-bold text-[#1E3A8A] leading-tight">Asah Skill & Ikuti Event</h3>
          </div>

          <!-- Desktop Dice (Col 1) -->
          <div class="hidden md:flex order-1 justify-end">
            <div class="relative w-[160px] h-[160px] flex items-center justify-center">
               <img :src="getDiceSrc(2)" class="step-dice w-full h-full object-contain scale-[1.5] drop-shadow-xl" alt="2" />
            </div>
          </div>

          <!-- Desktop Text (Col 2) & Mobile Description -->
          <div class="step-text w-full order-2 text-left">
            <h3 class="hidden md:block text-2xl font-bold text-[#1E3A8A]">Asah Skill & Ikuti Event</h3>
            <p class="text-gray-600 mt-1 md:mt-3 text-base leading-relaxed">
              Ikuti berbagai workshop intensif dan festival nasional untuk memvalidasi kualitas karyamu. Bertemu mentor yang akan membimbingmu menghaluskan mekanik game.
            </p>
          </div>
        </div>

        <!-- STEP 3 -->
        <div class="step-row relative w-full flex flex-col md:grid md:grid-cols-2 items-center md:gap-12">
          <!-- Mobile Header -->
          <div class="flex md:hidden items-center gap-3 w-full mb-1">
            <div class="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center">
              <img :src="getDiceSrc(3)" class="step-dice w-full h-full object-contain scale-[1.8] drop-shadow-md" alt="Langkah 3" />
            </div>
            <h3 class="step-text text-xl font-bold text-[#1E3A8A] leading-tight">Hubungkan ke Mitra & Monetisasi</h3>
          </div>

          <!-- Desktop Text (Col 1) & Mobile Description -->
          <div class="step-text w-full order-2 md:order-1 text-left md:text-right">
            <h3 class="hidden md:block text-2xl font-bold text-[#1E3A8A]">Hubungkan ke Mitra & Monetisasi</h3>
            <p class="text-gray-600 mt-1 md:mt-3 text-base leading-relaxed">
              Manfaatkan fitur business matching untuk bertemu pembeli atau investor dan mulai hasilkan pendapatan dari passion-mu dalam membuat game.
            </p>
          </div>

          <!-- Desktop Dice (Col 2) -->
          <div class="hidden md:flex order-1 md:order-2 justify-start">
            <div class="relative w-[160px] h-[160px] flex items-center justify-center">
               <img :src="getDiceSrc(3)" class="step-dice w-full h-full object-contain scale-[1.5] drop-shadow-xl" alt="3" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- INITIAL STATES (SEBELUM ANIMASI) --- */
.step-dice {
  opacity: 0;
  transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.8s ease-out;
}

/* Teks dan Garis HANYA Fade-In (opacity), tanpa translate */
.step-text, 
.steps-svg-line {
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

/* Box 1 & 3: Menggelinding dari ujung kiri benar-benar LUAR layar (-100vw) */
.step-row:nth-child(1) .step-dice,
.step-row:nth-child(3) .step-dice {
  transform: translateX(-100vw) rotate(-720deg) scale(1.5);
}
/* Untuk mobile sesuaikan transform awal dengan scale mobile yang lebih besar */
@media (max-width: 767px) {
  .step-row:nth-child(1) .step-dice,
  .step-row:nth-child(3) .step-dice {
    transform: translateX(-100vw) rotate(-720deg) scale(1.8);
  }
}

/* Box 2: Menggelinding dari ujung kanan benar-benar LUAR layar (+100vw) */
.step-row:nth-child(2) .step-dice {
  transform: translateX(100vw) rotate(720deg) scale(1.5);
}
@media (max-width: 767px) {
  .step-row:nth-child(2) .step-dice {
    transform: translateX(100vw) rotate(720deg) scale(1.8);
  }
}

/* --- ANIMATED STATES (KETIKA 'is-animated' DITERAPKAN DARI OBSERVER) --- */
.is-animated .step-dice {
  opacity: 1 !important;
  transform: translateX(0) rotate(0deg) scale(1.5) !important;
}
@media (max-width: 767px) {
  .is-animated .step-dice {
    transform: translateX(0) rotate(0deg) scale(1.8) !important;
  }
}

/* Timing Stagger Box Dadu (Box 2 dan 3 menyusul Box 1) */
.is-animated .step-row:nth-child(2) .step-dice { 
  transition-delay: 0.2s; 
}
.is-animated .step-row:nth-child(3) .step-dice { 
  transition-delay: 0.4s; 
}

/* Timing Teks (Mulai Fade-In setelah dadu menggelinding sedikit) */
.is-animated .step-row:nth-child(1) .step-text { 
  opacity: 1; 
  transition-delay: 0.5s; 
}

.is-animated .step-row:nth-child(2) .step-text { 
  opacity: 1; 
  transition-delay: 0.7s; 
}

.is-animated .step-row:nth-child(3) .step-text { 
  opacity: 1; 
  transition-delay: 0.9s; 
}

/* Garis SVG muncul paling akhir */
.is-animated .steps-svg-line { 
  opacity: 1; 
  transition-delay: 1.2s; 
}
</style>