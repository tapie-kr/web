import * as s from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { Typo, Weight } from '@tapie-kr/inspire-react'

import AppplePi from './assets/appplepi.svg'
import Edcan from './assets/edcan.svg'
import Iwop from './assets/iwop.svg'

export default function HomeDescriptionSection() {
  return <>
    <VStack className={s.section} align='center' gap={Spacing.Jumbo}>
      <VStack className={s.content}>
        <VStack aria-labelledby=''>
          <Typo.Large className={s.paragraph} weight={Weight.Medium}>TAPIE는 기존 선린인터넷고등학교에 있던</Typo.Large>
          <HStack className={s.clubs} wrap>
            <Typo.Large className={s.paragraph} weight={Weight.Medium}>3개의 웹, 앱 동아리 </Typo.Large>
            <Club icon={AppplePi} name='App:ple Pi, ' />
            <Club icon={Edcan} name='EDCAN, ' />
            <Club icon={Iwop} name='IWOP' />
            <Typo.Large className={s.paragraph} weight={Weight.Medium}>이 합쳐져</Typo.Large>
          </HStack>
          <Typo.Large className={s.paragraph} weight={Weight.Medium}>2024년에 새롭게 만들어진 동아리입니다.</Typo.Large>
        </VStack>

        <Typo.Large className={s.paragraph} weight={Weight.Medium}>세상에 존재하는 다양한 간극을 소프트웨어로 이어붙이자는 신념 아래, 우리들의 전공을 활용하여 오늘도 노력하고 있습니다.</Typo.Large>
      </VStack>

      <HStack className={s.stats} gap={Spacing.Large} wrap>
        <StatsCard label='지금까지' content='24년' />
        <StatsCard label='동아리 부원' content='725명' />
        <StatsCard label='포트폴리오' content='372개' />
        <StatsCard label='대회 수상' content='192개' />
      </HStack>
    </VStack>
  </>
}

type ClubProps = {
  icon: SVGComponent
  name: string
}

function Club(props: ClubProps) {
  return <>
    <HStack align='center' fitContent gap={Spacing.Micro}>
      <props.icon className={s.clubIconStyle} />
      <Typo.Large className={s.paragraph} weight={Weight.Medium}>{props.name}</Typo.Large>
    </HStack>
  </>
}

type StatsCardProps = {
  label: string
  content: string
}

function StatsCard(props: StatsCardProps) {
  return <>
    <VStack fitContent gap={Spacing.Tiny}>
      <Typo.Moderate weight={Weight.Semibold} color={Color.Content.Muted} nowrap>{props.label}</Typo.Moderate>
      <Typo.Medium weight={Weight.Medium} nowrap>{props.content}</Typo.Medium>
    </VStack>
  </>
}
