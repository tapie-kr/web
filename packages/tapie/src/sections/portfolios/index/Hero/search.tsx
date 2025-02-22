'use client';

import * as s from './styles.css';

import {
  Button,
  ButtonSize,
  GlyphIcon,
  HStack,
  Input,
  InputSize,
  spacingVars,
  useMediaQuery,
} from '@tapie-kr/inspire-react';

export default function PortfoliosHeroSectionSearch() {
  const isMobile = useMediaQuery();

  return (
    <HStack
      fullWidth
      className={s.search}
      spacing={spacingVars.micro}
    >
      <Input.Text
        size={isMobile ? InputSize.MEDIUM : InputSize.LARGE}
        leadingIcon={GlyphIcon.SEARCH}
        placeholder='작품/수상내역/부원 검색'
      />
      <Button.Icon
        icon={GlyphIcon.ARROW_FORWARD}
        size={isMobile ? ButtonSize.MEDIUM : ButtonSize.LARGE}
      />
    </HStack>
  );
}
