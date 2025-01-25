'use client'

import * as s from './styles.css'

import { Input, GlyphIcon, Button, spacingVars, HStack } from '@tapie-kr/inspire-react'

export default function PortfoliosHeroSectionSearch() {
  return <>
    <HStack className={s.search} fullWidth spacing={spacingVars.micro}>
      <Input.Text leadingIcon={GlyphIcon.SEARCH} placeholder='작품/수상내역/부원 검색' />
      <Button.Icon icon={GlyphIcon.ARROW_FORWARD} />
    </HStack>
  </>
}
