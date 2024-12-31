import { createContext, Dispatch, SetStateAction } from 'react'

type HomeAwardsSectionContextValue = {
  selectedYear: number
  setSelectedYear: Dispatch<SetStateAction<number>>
}

export const HomeAwardsSectionContext = createContext({} as HomeAwardsSectionContextValue)
