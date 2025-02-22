'use client'

import { useEffect, useState } from 'react'
import Clarity from '@microsoft/clarity'

const PROJECT_ID = 'pxe6kxvs20' as const

export default function ClarityProvider() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    Clarity.init(PROJECT_ID)
    setIsInitialized(true)
  }, [isInitialized])

  return null
}
