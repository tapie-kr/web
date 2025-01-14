'use client'

import * as s from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { spacingVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import Scroll from '@tapie-kr/web-shared/components/Scroll'

export default function PortfoliosMembersSectionList() {
  return <>
    <Scroll direction='row'>
      <HStack fitContent gap={spacingVars.moderate}>
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
    <VStack align='center' fitContent gap={spacingVars.micro}>
      <div className={s.profileImage} />
      <Typo.Base tag={Tag.SPAN} weight={Weight.MEDIUM}>이름</Typo.Base>
    </VStack>
  </>
}
