import { section } from './styles.css';

import { Badge, BadgeTheme, colorVars, GlyphIcon, HStack, Icon, spacingVars, StackAlign, StackJustify, StackWrap, Typo, VStack, Weight } from '@tapie-kr/inspire-react';

export default function MembersDetailHeroSection() {
  return (
    <VStack
      fullWidth
      className={section}
      align={StackAlign.START}
      spacing={spacingVars.petite}
    >
      <HStack
        spacing={spacingVars.petite}
        justify={StackJustify.START}
      >
        <Typo.Large weight={Weight.SEMIBOLD}>이름</Typo.Large>

        <Typo.Medium
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >유닛
        </Typo.Medium>

        <Badge.Default
          theme={BadgeTheme.GREEN}
          leadingIcon={GlyphIcon.VERIFIED}
          label='부장'
        />
      </HStack>

      <HStack
        fullWidth
        spacing={spacingVars.base}
        wrap={StackWrap.WRAP}
        justify={StackJustify.START}
      >
        <Link />
        <Link />
        <Link />
      </HStack>
    </VStack>
  );
}

function Link() {
  return (
    <HStack spacing={spacingVars.mini}>
      <Icon name={GlyphIcon.DEFAULT} />
      <Typo.Base weight={Weight.MEDIUM}>링크</Typo.Base>
    </HStack>
  );
}
