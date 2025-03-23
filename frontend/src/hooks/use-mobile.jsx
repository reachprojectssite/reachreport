import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Start with false to avoid hydration mismatch
  const [isMobile, setIsMobile] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
    
    // Use more efficient matchMedia API with passive listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    // Set initial value
    setIsMobile(mql.matches)
    
    // Use modern event listener with passive option for better performance
    mql.addEventListener("change", onChange, { passive: true })
    
    return () => mql.removeEventListener("change", onChange);
  }, [])

  // Return false during SSR, then the actual value after hydration
  return isClient ? isMobile : false
}