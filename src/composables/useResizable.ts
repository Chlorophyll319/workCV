import { ref } from 'vue'

export function useResizable(
  initialWidth: number,
  minWidth: number,
  maxWidth: number,
  onResize: (width: number) => void
) {
  const isResizing = ref(false)
  
  const startResize = (e: MouseEvent) => {
    const startX = e.clientX
    const startWidth = initialWidth
    
    isResizing.value = true
    
    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth - (e.clientX - startX)
      const clampedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth)
      onResize(clampedWidth)
    }
    
    const handleMouseUp = () => {
      isResizing.value = false
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }
  
  return {
    isResizing,
    startResize
  }
}