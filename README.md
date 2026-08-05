# Komunitas Edugame Indonesia — Frontend

Landing page dan antarmuka web **Komunitas Edugame Indonesia (KEI)**, ekosistem digital bagi kreator edugame di Indonesia untuk belajar, berkarya, memamerkan karya, membangun jejaring, serta membuka peluang kolaborasi dan bisnis.

- 🌐 Website: [edugameindonesia.id](https://edugameindonesia.id)
- 📦 Backend/API: `edugameindonesia-api`

## Tech Stack

- [Vue 3](https://vuejs.org/) — `<script setup>` + Composition API
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/) — state management
- [Vue Router](https://router.vuejs.org/)

## Struktur Folder

```text
.
├── public/            # Asset statis (gambar, favicon)
├── src/
│   ├── components/    # Komponen UI & section landing page
│   ├── views/          # Halaman utama (home, dll.)
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
```

## Persyaratan

- Node.js `^22.18.0 || >= 24.12.0`

## Instalasi

```sh
npm install
```

## Menjalankan Development

```sh
npm run dev
```

## Build Produksi

```sh
npm run build
```

Menjalankan build-only (tanpa type-check):

```sh
npm run build-only
```

## Type-Check

```sh
npm run type-check
```

## Preview Hasil Build

```sh
npm run preview
```

## Lisensi

Hak cipta © Komunitas Edugame Indonesia. Seluruh hak dilindungi.