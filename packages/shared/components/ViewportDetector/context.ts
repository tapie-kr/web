'use client'

import { Dispatch, SetStateAction, createContext } from 'react'

type ViewportDetectorContextType = {
  isInView: boolean
  setIsInView: Dispatch<SetStateAction<boolean>>
}

export const ViewportDetectorContext = createContext({} as ViewportDetectorContextType)
