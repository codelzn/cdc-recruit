import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export function useDeviceType(
  mobileSize: number = 640,
  tabletSize: number = 1024,
  desktopSize: number = 1280,
): { isMobile: boolean; isTablet: boolean; isDesktop: boolean } {
  const isMobile = useMediaQuery(`(max-width: ${mobileSize}px)`)
  const isTablet = useMediaQuery(`(max-width: ${tabletSize}px) and (min-width: ${mobileSize}px)`)
  const isDesktop = useMediaQuery(`(max-width: ${desktopSize}px) and (min-width: ${tabletSize}px)`)

  return { isMobile, isTablet, isDesktop }
}
