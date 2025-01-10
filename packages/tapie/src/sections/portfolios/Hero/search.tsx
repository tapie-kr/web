'use client'

import * as s from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { Input, GlyphIcon, Button } from '@tapie-kr/inspire-react'
import { Spacing } from '@tapie-kr/inspire-react/variables'

export default function PortfoliosHeroSectionSearch() {
  return <>
    <HStack className={s.search} gap={Spacing.Micro}>
      <Input leadingIcon={GlyphIcon.SEARCH} placeholder='작품/수상내역/부원 검색' />
      <Button.Icon icon={GlyphIcon.ARROW_FORWARD} />
    </HStack>
  </>
}
