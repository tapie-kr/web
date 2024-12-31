import * as s from './styles.css'

import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { TAPIESymbol, TAPIESymbolSize, Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import cn from 'classnames'

type HomeUnitsSectionTemplateProps = {
  title: string
  description: string
  features: Array<{
    title: string
    description: string
    icon: SVGComponent
  }>
  inverted?: boolean
}

export default function HomeUnitsSectionTemplate(props: HomeUnitsSectionTemplateProps) {
  return <>
    <VStack className={cn(s.template, props.inverted && ['inverted', s.invertedTemplate])} align='center'>
      <VStack className={s.content} gap={Spacing.Jumbo}>
        <Flex className={s.title} justify='between'>
          <VStack fitContent align='start' gap={Spacing.Petite}>
            <TAPIESymbol size={TAPIESymbolSize._24} withLabel />
            <Typo.Jumbo color={Color.Content.Emphasized} weight={Weight.Semibold}>{props.title}</Typo.Jumbo>
          </VStack>
          <Typo.Moderate className={s.description} color={Color.Content.Default}>{props.description}</Typo.Moderate>
        </Flex>
        
        <HStack wrap gap={Spacing.Base}>{
          props.features.map(f => <FeatureCard key={f.title} {...f} inverted={props.inverted} />)
        }</HStack>
      </VStack>
    </VStack>
  </>
}

function FeatureCard(props: HomeUnitsSectionTemplateProps['features'][0] & { inverted?: boolean }) {
  return <>
    <Flex className={cn(s.featureCard, props.inverted && s.invertedFeatureCard)} align='center' gap={Spacing.Moderate}>
      <VStack gap={Spacing.Micro}>
        <Typo.Medium color={Color.Content.Emphasized} weight={Weight.Semibold}>{props.title}</Typo.Medium>
        <Typo.Base color={Color.Content.Default}>{props.description}</Typo.Base>
      </VStack>
      <props.icon className={s.featureCardIcon} />
    </Flex>
  </>
}
