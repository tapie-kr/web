import * as s from './styles.css'

import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { motion } from 'framer-motion'
import Animate from '@tapie-kr/web-shared/components/Animate'
import { getTransition, resetTransition } from '@tapie-kr/web-shared/lib/animation'
import { useContext } from 'react'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'

type HomeUnitsSectionListProps = {
  order: number
  title: string
  features: Array<{
    title: string
    description: string
    icon: SVGComponent
  }>
}

export default function HomeUnitsSectionList(props: HomeUnitsSectionListProps) {
  const { isInView } = useContext(ViewportDetectorContext)

  return <>
    <VStack className={s.list} fullWidth gap={Spacing.Moderate}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ?
          { opacity: 1 } :
          { opacity: 0, transition: resetTransition }
        }
        transition={getTransition({ delay: props.order * 0.3 + 0.4, duration: 0.7 })}
      >
        <Typo.Large tag={Tag.H3} weight={Weight.Semibold}>{props.title}</Typo.Large>
      </motion.div>
      <VStack fullWidth gap={Spacing.Petite}>{
        props.features.map((feature, i) => <FeatureCard key={i} order={i} {...feature} />)
      }</VStack>
    </VStack>
  </>
}

type FeatureCardProps = HomeUnitsSectionListProps['features'][0] & {
  order: number
}

function FeatureCard(props: FeatureCardProps) {
  return <>
    <Animate order={props.order} fullWidth>
      <Flex className={s.featureCard} fullWidth align='center' gap={Spacing.Moderate}>
        <VStack gap={Spacing.Micro}>
          <Typo.Medium color={Color.Content.Emphasized} tag={Tag.H4} weight={Weight.Semibold}>{props.title}</Typo.Medium>
          <Typo.Base color={Color.Content.Default}>{props.description}</Typo.Base>
        </VStack>
        <props.icon className={s.featureCardIcon} />
      </Flex>
    </Animate>
  </>
}
