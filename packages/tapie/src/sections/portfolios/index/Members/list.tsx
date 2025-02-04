'use client';

import * as s from './styles.css';

import { HStack, spacingVars, StackJustify, Tag, Typo, VStack, Weight } from '@tapie-kr/inspire-react';
import Scroll from '@tapie-kr/web-shared/components/Scroll';

export default function PortfoliosMembersSectionList() {
  return (
    <Scroll direction='row'>
      <HStack
        fullWidth
        spacing={spacingVars.moderate}
        justify={StackJustify.START}
      >
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </HStack>
    </Scroll>
  );
}

function Member() {
  return (
    <VStack spacing={spacingVars.micro}>
      <div className={s.profileImage} />
      <Typo.Base
        tag={Tag.SPAN}
        weight={Weight.MEDIUM}
      >
        이름
      </Typo.Base>
    </VStack>
  );
}
