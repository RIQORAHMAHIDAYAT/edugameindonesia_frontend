<script setup lang="ts">
const faqs = [
  {
    q: 'Siapa saja yang boleh bergabung?',
    a: 'Siapa saja. Mulai dari pelajar, mahasiswa, pemula yang baru tertarik game design, game developer profesional, hingga guru dan praktisi pendidikan yang ingin mengembangkan media pembelajaran interaktif.',
  },
  {
    q: 'Apakah daftar akun dipungut biaya?',
    a: '100% gratis. Pengguna dapat membuat akun, menampilkan portofolio karya di katalog, dan berinteraksi dengan anggota komunitas tanpa biaya.',
  },
  {
    q: 'Saya masih pemula dan belum punya game selesai. Apakah tetap bisa ikut?',
    a: 'Tentu. Pengguna dapat mengikuti pelatihan dan workshop, belajar dari mentor, mencari ide, atau menemukan rekan tim untuk mulai membuat edugame pertama.',
  },
  {
    q: 'Bagaimana cara upload edugame ke Katalog Portofolio?',
    a: 'Setelah mendaftar dan login, masuk ke menu profil lalu klik “Tambah Karya”. Isi detail game, deskripsi, mata pelajaran, link demo/download, dan screenshot. Karya akan tayang setelah melalui verifikasi singkat.',
  },
  {
    q: 'Bagaimana Business Matching bekerja?',
    a: 'Game yang terdaftar di katalog akan dikurasi. Jika sesuai dengan kebutuhan sekolah, publisher, atau investor mitra, tim platform akan menghubungkan kreator secara langsung untuk diskusi kerja sama atau pendanaan/pitching.',
  },
]
</script>

<template>
  <section id="faq" class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm font-bold uppercase tracking-widest text-primary">FAQ</p>
        <h2 class="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Pertanyaan Umum
        </h2>
      </div>

      <div class="mt-10 space-y-4">
        <details
          v-for="(faq, i) in faqs"
          :key="i"
          class="group rounded-2xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-md"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-800 sm:text-base [&::-webkit-details-marker]:hidden"
          >
            {{ faq.q }}
            <span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary transition duration-300 group-open:rotate-180"
              aria-hidden="true"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <p class="px-5 pb-5 text-sm leading-relaxed text-slate-600">{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
