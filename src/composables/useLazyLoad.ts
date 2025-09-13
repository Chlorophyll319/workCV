import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

/**
 * 2025年最佳 Lazy Loading 組合式函數
 * 用於優化 LCP 和減少初始載入時間
 */
export function useLazyLoad(threshold = 0.1) {
  const target = ref<HTMLElement>()
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '200px' } // 增加預載入距離，提前載入
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    target,
    isVisible
  }
}

/**
 * 圖片 Lazy Loading 專用（如果需要）
 */
export function useLazyImage(src: string) {
  const { target, isVisible } = useLazyLoad()
  const imageSrc = ref('')
  const isLoaded = ref(false)

  watchEffect(() => {
    if (isVisible.value && src) {
      const img = new Image()
      img.onload = () => {
        imageSrc.value = src
        isLoaded.value = true
      }
      img.src = src
    }
  })

  return {
    target,
    imageSrc,
    isLoaded,
    isVisible
  }
}