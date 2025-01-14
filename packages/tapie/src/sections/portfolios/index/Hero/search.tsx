'use client'

import * as s from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { Input, GlyphIcon, Button, spacingVars } from '@tapie-kr/inspire-react'

export default function PortfoliosHeroSectionSearch() {
  return <>
    <HStack className={s.search} gap={spacingVars.micro}>
      <Input leadingIcon={GlyphIcon.SEARCH} placeholder='작품/수상내역/부원 검색' />
      <Button.Icon icon={GlyphIcon.ARROW_FORWARD} />
    </HStack>
  </>
}
