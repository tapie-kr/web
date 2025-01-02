import * as s from './styles.css'

import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'

type HomeUnitsSectionListProps = {
  title: string
  features: Array<{
    title: string
    description: string
    icon: SVGComponent
  }>
}

export default function HomeUnitsSectionList(props: HomeUnitsSectionListProps) {
  return <>
    <VStack className={s.list} fullWidth gap={Spacing.Moderate}>
      <Typo.Large tag={Tag.H3} weight={Weight.Semibold}>{props.title}</Typo.Large>
      <VStack fullWidth gap={Spacing.Petite}>{
        props.features.map((feature, i) => <FeatureCard key={i} {...feature} />)
      }</VStack>
    </VStack>
  </>
}

function FeatureCard(props: HomeUnitsSectionListProps['features'][0]) {
  return <>
    <Flex className={s.featureCard} fullWidth align='center' gap={Spacing.Moderate}>
      <VStack gap={Spacing.Micro}>
        <Typo.Medium color={Color.Content.Emphasized} tag={Tag.H4} weight={Weight.Semibold}>{props.title}</Typo.Medium>
        <Typo.Base color={Color.Content.Default}>{props.description}</Typo.Base>
      </VStack>
      <props.icon className={s.featureCardIcon} />
    </Flex>
  </>
}
