<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('beranda')

const navLinks = [
  { label: 'TENTANG', href: '#masalah', id: 'masalah' },
  { label: 'PROGRAM', href: '#fitur', id: 'fitur' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

const sectionIds = ['beranda', 'masalah', 'fitur', 'faq']

let ticking = false

function updateActiveSection() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    isScrolled.value = window.scrollY > 30

    const probe = window.scrollY + 120
    let current = sectionIds[0] ?? 'beranda'

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (!el || el.offsetTop > probe) break
      current = id
    }

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4
    ) {
      current = sectionIds[sectionIds.length - 1] ?? current
    }

    activeSection.value = current
  })
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
  window.addEventListener('click', handleOutsideClick)
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('click', handleOutsideClick)
  window.removeEventListener('keydown', handleKeydown)
})

function closeMenu() {
  isOpen.value = false
}

function handleOutsideClick(e: MouseEvent) {
  const nav = document.querySelector('.nb')
  if (nav && !nav.contains(e.target as Node)) {
    closeMenu()
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
    document.querySelector<HTMLButtonElement>('.nb__ham')?.focus()
  }
}
</script>

<template>
  <header class="nb" :class="{ 'nb--scrolled': isScrolled }">
    <div class="nb__inner">
      <!-- Logo -->
      <a href="#beranda" class="nb__logo" @click="closeMenu">
        <img src="/images/Logo_edugame.png" alt="Logo Komunitas Game Indonesia" class="nb__logo-img" />
      </a>

      <!-- Capsule Nav + CTA (Matches Reference Design) -->
      <div class="nb__capsule">
        <nav class="nb__nav" aria-label="Navigasi utama">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="nb__link"
            :class="{ 'nb__link--active': activeSection === link.id }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA Button inside capsule -->
        <a href="#gabung" class="nb__cta">GABUNG SEKARANG</a>
      </div>

      <!-- Hamburger (mobile) -->
      <button
        class="nb__ham"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        :aria-label="isOpen ? 'Tutup menu' : 'Buka menu'"
        @click="isOpen = !isOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isOpen" id="mobile-menu" class="nb__mobile">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="nb__mobile-link"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a href="#gabung" class="nb__mobile-link nb__mobile-cta" @click="closeMenu">
        GABUNG SEKARANG
      </a>
    </div>
  </header>
</template>

<style scoped>
/* ─── Navbar shell ─── */
.nb {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  padding-top: 16px;
  padding-bottom: 16px;
  transition: all 0.3s ease;
}

/* Optional sticky backdrop when scrolling */
.nb--scrolled {
  position: fixed;
  background: transparent;
  box-shadow: none;
  padding-top: 16px;
  padding-bottom: 16px;
  pointer-events: none; /* Memastikan area kosong tidak menghalangi klik ke elemen di bawahnya */
}

.nb--scrolled .nb__inner > * {
  pointer-events: auto; /* Elemen navbar (logo, menu) tetap bisa diklik */
}

.nb__inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ─── Logo ─── */
.nb__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}

.nb--scrolled .nb__logo {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  pointer-events: none;
}

.nb__logo-img {
  max-width: 160px;
  height: auto;
  display: block;
}

/* ─── Capsule Pill Container (Reference Design) ─── */
.nb__capsule {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 9999px;
  padding: 6px 8px 6px 32px;
  box-shadow: 0 4px 25px rgba(0, 63, 123, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 63, 123, 0.08);
  gap: 32px;
  transition: all 0.3s ease;
}

/* Glassy effect on scroll for the capsule itself */
.nb--scrolled .nb__capsule {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* ─── Nav links ─── */
.nb__nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nb__link {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: 0.8px;
  padding: 6px 0;
  position: relative;
  white-space: nowrap;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.nb__link:hover {
  opacity: 0.75;
}

.nb__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* ─── CTA inside capsule ─── */
.nb__cta {
  background: var(--color-primary);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 12px 26px;
  border-radius: 9999px;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.nb__cta:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 63, 123, 0.25);
}

/* ─── Hamburger (mobile) ─── */
.nb__ham {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: #ffffff;
  border: 1px solid rgba(0, 63, 123, 0.1);
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nb__ham span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* ─── Mobile menu dropdown ─── */
.nb__mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 16px;
  right: 16px;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(0, 63, 123, 0.12);
  border: 1px solid rgba(0, 63, 123, 0.08);
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.nb__mobile-link {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  letter-spacing: 0.5px;
}

.nb__mobile-link:hover {
  background: var(--color-primary-light);
}

.nb__mobile-cta {
  margin-top: 6px;
  background: var(--color-primary);
  color: #ffffff;
  text-align: center;
  border-radius: 9999px;
  padding: 12px 20px;
}

.nb__mobile-cta:hover {
  background: var(--color-primary-hover);
  color: #ffffff;
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .nb__capsule {
    display: none;
  }
  .nb__ham {
    display: flex;
  }
  .nb__mobile {
    display: flex;
  }
  .nb__inner {
    padding: 0 16px;
  }
  .nb__logo-img {
    max-width: 135px;
  }
}
</style>
