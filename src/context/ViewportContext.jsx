import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentBreakpoint } from '../util'

const ViewportContext = createContext()

const ViewportProvider = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    getCurrentBreakpoint(),
  )

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getCurrentBreakpoint())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ViewportContext.Provider value={currentBreakpoint}>
      {children}
    </ViewportContext.Provider>
  )
}

const useViewport = () => {
  return useContext(ViewportContext)
}

export { ViewportProvider, useViewport }
