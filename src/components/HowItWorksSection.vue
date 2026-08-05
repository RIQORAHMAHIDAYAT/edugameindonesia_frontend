<script setup lang="ts">
const steps = [
  {
    num: '01',
    title: 'Buat Profil & Daftarkan Karyamu',
    desc: 'Buat akun gratis dalam hitungan detik. Upload edugame buatanmu ke etalase Portofolio & Katalog agar mulai dilirik publik, sesama kreator, dan sekolah.',
  },
  {
    num: '02',
    title: 'Asah Skill & Ikuti Event',
    desc: 'Tingkatkan kualitas game lewat pelatihan bersama expert, dapatkan feedback, dan ikuti festival nasional untuk memvalidasi ide interaktifmu.',
  },
  {
    num: '03',
    title: 'Hubungkan ke Mitra & Monetisasi',
    desc: 'Gunakan Business Matching untuk terhubung langsung dengan institusi pendidikan, publisher, hingga investor yang siap mendanai dan mengadopsi karya edugamemu.',
  },
]
</script>

<template>
  <section id="cara-kerja" class="bg-slate-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-bold uppercase tracking-widest text-primary">Cara Kerja</p>
        <h2 class="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          3 Langkah Mulai Kariermu
        </h2>
      </div>

      <ol class="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        <li
          v-for="step in steps"
          :key="step.num"
          class="relative rounded-3xl border border-slate-100 bg-white p-7"
        >
          <span
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-extrabold text-white"
            aria-hidden="true"
          >
            {{ step.num }}
          </span>
          <h3 class="mt-5 text-lg font-bold text-slate-900">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
