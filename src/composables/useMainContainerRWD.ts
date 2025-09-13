import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useMainContainerRWD() {
  const containerWidth = ref(0)
  
  // 定義基於容器寬度的斷點
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  }
  
  // 計算屬性：基於容器寬度的響應式狀態
  const isSmUp = computed(() => containerWidth.value >= breakpoints.sm)
  const isMdUp = computed(() => containerWidth.value >= breakpoints.md)
  const isLgUp = computed(() => containerWidth.value >= breakpoints.lg)
  const isXlUp = computed(() => containerWidth.value >= breakpoints.xl)
  const is2XlUp = computed(() => containerWidth.value >= breakpoints['2xl'])
  
  // 動態計算網格列數的 computed
  const gridCols = computed(() => {
    if (is2XlUp.value) return 4
    if (isXlUp.value) return 3
    if (isLgUp.value) return 2
    return 1
  })
  
  // 按鈕排列方向
  const buttonDirection = computed(() => {
    return isMdUp.value ? 'horizontal' : 'vertical'
  })
  
  // 動態 class 生成器
  const getGridClass = (breakpointConfig?: {
    sm?: number,
    md?: number, 
    lg?: number,
    xl?: number,
    '2xl'?: number,
    default?: number
  }) => {
    const config = {
      default: 1,
      sm: breakpointConfig?.sm,
      md: breakpointConfig?.md,
      lg: breakpointConfig?.lg,
      xl: breakpointConfig?.xl,
      '2xl': breakpointConfig?.['2xl'],
      ...breakpointConfig
    }
    
    let cols = config.default
    if (isSmUp.value && config.sm) cols = config.sm
    if (isMdUp.value && config.md) cols = config.md
    if (isLgUp.value && config.lg) cols = config.lg
    if (isXlUp.value && config.xl) cols = config.xl
    if (is2XlUp.value && config['2xl']) cols = config['2xl']
    
    return `grid-cols-${cols}`
  }
  
  const getFlexDirection = () => {
    return buttonDirection.value === 'horizontal' ? 'flex-row' : 'flex-col'
  }
  
  let resizeObserver: ResizeObserver | null = null
  
  const updateContainerWidth = () => {
    const mainElement = document.querySelector('main')
    if (mainElement) {
      containerWidth.value = mainElement.clientWidth
    }
  }
  
  onMounted(() => {
    updateContainerWidth()
    
    // 使用 ResizeObserver 監聽 main 容器大小變化
    const mainElement = document.querySelector('main')
    if (mainElement) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          containerWidth.value = entry.contentRect.width
        }
      })
      resizeObserver.observe(mainElement)
    }
    
    // 備用方案：監聽視窗大小變化
    window.addEventListener('resize', updateContainerWidth)
  })
  
  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    window.removeEventListener('resize', updateContainerWidth)
  })
  
  return {
    containerWidth,
    isSmUp,
    isMdUp, 
    isLgUp,
    isXlUp,
    is2XlUp,
    gridCols,
    buttonDirection,
    getGridClass,
    getFlexDirection
  }
}