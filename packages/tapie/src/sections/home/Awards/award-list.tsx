'use client'

import * as s from './styles.css'

import { Flex, HStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { motion } from 'framer-motion'
import { useContext } from 'react'

export default function HomeAwardsSectionAwardList() {
  return <>
    <HStack className={s.awardList} gap={Spacing.Base} wrap>
      <AwardItem order={0} />
      <AwardItem order={1} />
      <AwardItem order={2} />
      <AwardItem order={3} />
      <AwardItem order={4} />
      <AwardItem order={5} />
      <AwardItem order={6} />
      <AwardItem order={7} />
      <AwardItem order={8} />
      <AwardItem order={9} />
    </HStack>
  </>
}

type AwardItemProps = {
  order: number
}

function AwardItem(props: AwardItemProps) {
  const { isInView } = useContext(ViewportDetectorContext)

  const transition = getTransition({ duration: 0.85, delay: props.order * 0.03 + 0.7 })
  const resetTransition = getTransition({ duration: 0 })
  const initial = {
    y: 20, opacity: 0, scale: 0.98,
    transition: resetTransition,
  }
  const animate = isInView ?
    { y: 0, opacity: 1, scale: 1 } :
    initial

  return <>
    <motion.div className={s.awardItem} initial={initial} animate={animate} transition={transition}>
      <Typo.Base weight={Weight.Medium}>9th Highthon 마루상</Typo.Base>
      <Typo.Petite color={Color.Content.Muted} weight={Weight.Semibold}>박시원</Typo.Petite>
    </motion.div>
  </>
}
