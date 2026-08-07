<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const activeSection = ref('beranda')

const navLinks = [
  { label: 'BERANDA', href: '#beranda', id: 'beranda' },
  { label: 'TESTIMONI', href: '#testimoni', id: 'testimoni' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

const sectionIds = navLinks.map((link) => link.id)

let ticking = false

function updateActiveSection() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
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
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
})

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="nb">
    <div class="nb__inner">
      <!-- Logo -->
      <a href="#beranda" class="nb__logo" @click="closeMenu">LOGO</a>

      <!-- Centre links -->
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

      <!-- CTA -->
      <a href="#gabung" class="nb__cta">GABUNG KOMUNITAS</a>

      <!-- Hamburger (mobile) -->
      <button
        class="nb__ham"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Buka menu"
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
      <a href="#gabung" class="nb__cta nb__cta--mobile" @click="closeMenu">
        GABUNG KOMUNITAS
      </a>
    </div>
  </header>
</template>

<style scoped>
/* ─── Navbar shell ─── */
.nb {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1.5px solid #ebebeb;
}

.nb__inner {
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 0;
  padding-left: max(40px, calc((100% - 1200px) / 2 + 40px));
  padding-right: 40px;
}

/* ─── Logo ─── */
.nb__logo {
  font-size: 38px;
  font-weight: 900;
  font-style: italic;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: -1.5px;
  flex-shrink: 0;
  margin-right: 48px;
  line-height: 1;
}

/* ─── Nav links ─── */
.nb__nav {
  display: flex;
  gap: 32px;
  margin-left: auto;
}

.nb__link {
  font-size: 13px;
  font-weight: 700;
  color: #2d2d2d;
  text-decoration: none;
  letter-spacing: 0.5px;
  padding-bottom: 3px;
  border-bottom: 2.5px solid transparent;
  white-space: nowrap;
  transition: color 0.15s;
}

.nb__link:hover {
  color: var(--color-primary);
}

.nb__link--active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

/* ─── CTA ─── */
.nb__cta {
  margin-left: 32px;
  flex-shrink: 0;
  background: var(--color-primary);
  color: #ffffff;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 12px 22px;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;
}

.nb__cta:hover {
  background: var(--color-primary-hover);
}

/* ─── Hamburger ─── */
.nb__ham {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.nb__ham span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
}

/* ─── Mobile menu ─── */
.nb__mobile {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 24px 16px;
  background: #ffffff;
  border-top: 1px solid #ebebeb;
}

.nb__mobile-link {
  font-size: 13px;
  font-weight: 700;
  color: #2d2d2d;
  text-decoration: none;
  padding: 10px 8px;
  border-radius: 6px;
  letter-spacing: 0.4px;
}

.nb__mobile-link:hover {
  background: #f4f6fb;
  color: var(--color-primary);
}

.nb__cta--mobile {
  margin-left: 0;
  text-align: center;
  display: block;
  margin-top: 8px;
  border-radius: 4px;
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .nb__nav  { display: none; }
  .nb__cta:not(.nb__cta--mobile) { display: none; }
  .nb__ham  { display: flex; }
  .nb__inner { padding: 0 20px; }
}
</style>
