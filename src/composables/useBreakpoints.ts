import { useBreakpoints as useVueUseBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

export default function useBreakpoints() {
  const breakpoints = useVueUseBreakpoints({
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  })

  const currentBreakpoint = computed(() => {
    if (breakpoints.greaterOrEqual('xl').value) return 'xl'
    if (breakpoints.greaterOrEqual('lg').value) return 'lg'
    if (breakpoints.greaterOrEqual('md').value) return 'md'
    if (breakpoints.greaterOrEqual('sm').value) return 'sm'
    return 'xs'
  })

  const isMobile = computed(() => currentBreakpoint.value === 'xs' || currentBreakpoint.value === 'sm')
  const isTablet = computed(() => currentBreakpoint.value === 'md')
  const isDesktop = computed(() => currentBreakpoint.value === 'lg' || currentBreakpoint.value === 'xl')
  const isMaxDesktop = computed(() => currentBreakpoint.value === 'xl')

  return {
    currentBreakpoint,
    breakpoints,
    isMobile,
    isTablet,
    isDesktop,
    isMaxDesktop
  }
}
