'use client';

import * as s from './styles.css';

import { Button, GlyphIcon, HStack, Input, spacingVars } from '@tapie-kr/inspire-react';

export default function PortfoliosHeroSectionSearch() {
  return (
    <>
      <HStack
        className={s.search}
        fullWidth
        spacing={spacingVars.micro}
      >
        <Input.Text
          leadingIcon={GlyphIcon.SEARCH}
          placeholder='작품/수상내역/부원 검색'
        />
        <Button.Icon icon={GlyphIcon.ARROW_FORWARD} />
      </HStack>
    </>
  );
}
