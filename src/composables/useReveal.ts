import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface UseRevealOptions {
  threshold?: number
  once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLElement>(
  options: UseRevealOptions = {}
): {
  target: Ref<T | null>
  isVisible: Ref<boolean>
} {
  const target = ref<T | null>(null) as Ref<T | null>
  const isVisible = ref<boolean>(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = target.value
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          isVisible.value = true
          if (options.once !== false) {
            observer?.disconnect()
          }
        } else if (entry && options.once === false) {
          isVisible.value = false
        }
      },
      {
        threshold: options.threshold ?? 0.15,
      }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
