'use client'

import * as s from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import Scroll from '@tapie-kr/web-shared/components/Scroll'

export default function PortfoliosMembersSectionList() {
  return <>
    <Scroll direction='row'>
      <HStack fitContent gap={Spacing.Moderate}>
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
  </>
}

function Member() {
  return <>
    <VStack align='center' fitContent gap={Spacing.Micro}>
      <div className={s.profileImage} />
      <Typo.Base tag={Tag.Span} weight={Weight.MEDIUM}>이름</Typo.Base>
    </VStack>
  </>
}
