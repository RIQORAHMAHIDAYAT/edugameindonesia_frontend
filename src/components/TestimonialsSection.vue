<script setup lang="ts">
const testimonials = [
  {
    quote:
      'Awalnya cuma gabung buat belajar bikin game matematika. Lewat fitur Business Matching, game buatan tim saya akhirnya dibeli oleh rantai sekolah swasta untuk dipakai di kelas!',
    name: 'Rian Ardiansyah',
    role: 'Mahasiswa DKV & Indie Game Developer',
    initial: 'RA',
  },
  {
    quote:
      'Fitur Katalognya ngebantu banget! Dulu portofolio cuma numpuk di drive, sekarang ada wadah rapi yang gampang saya bagikan ke calon klien atau tempat magang.',
    name: 'Clarissa Putri',
    role: 'Boardgame Designer Pemula',
    initial: 'CP',
  },
  {
    quote:
      'Bikin edugame itu beda sama game biasa karena harus masuk materi pelajaran. Di pelatihan komunitas ini, saya belajar cara bikin game yang tetep seru tanpa bikin murid bosan.',
    name: 'Fajar Nugraha, S.Pd.',
    role: 'Guru SD & Educator Game Creator',
    initial: 'FN',
  },
  {
    quote:
      'Bisa masuk finalis di Festival Edugame itu pengalaman luar biasa. Dapet feedback langsung dari para mentor senior yang bikin game saya makin matang dan playable.',
    name: 'Bagus Prasetyo',
    role: 'Ketua Tim Game Dev Kampus',
    initial: 'BP',
  },
  {
    quote:
      'Sebagai institusi, kami sering kesulitan mencari game edukasi yang sesuai kurikulum lokal. Platform ini memudahkan kami menemukan game dev berbakat secara langsung.',
    name: 'Siti Rahmawati',
    role: 'Konsultan Media Pembelajaran & Mitra Sekolah',
    initial: 'SR',
  },
]
</script>

<template>
  <section id="testimoni" class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-bold uppercase tracking-widest text-primary">Testimoni Anggota</p>
        <h2 class="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Mereka Sudah Level Up Bersama KEI
        </h2>
        <p class="mt-4 text-slate-600">
          Dari iseng jadi proyek berbayar, sampai karier yang diakui industri.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="t in testimonials"
          :key="t.name"
          class="flex flex-col rounded-3xl border border-slate-100 bg-slate-50 p-6"
        >
          <span class="text-2xl text-accent" aria-hidden="true">“</span>
          <blockquote class="flex-1 text-sm leading-relaxed text-slate-700">
            {{ t.quote }}
          </blockquote>
          <figcaption class="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
              aria-hidden="true"
            >
              {{ t.initial }}
            </span>
            <span>
              <span class="block text-sm font-bold text-slate-900">{{ t.name }}</span>
              <span class="block text-xs text-slate-500">{{ t.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
