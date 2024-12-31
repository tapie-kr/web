import { contentStyle, featureCardIconStyle, featureCardStyle, invertedFeatureCardStyle, invertedTemplateStyle, templateStyle, titleStyle } from './styles.css'

import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
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
    <VStack className={cn(templateStyle, props.inverted && ['inverted', invertedTemplateStyle])} align='center'>
      <VStack className={contentStyle} gap={ComponentVariable.Spacing.Jumbo}>
        <Flex className={titleStyle} justify='between'>
          <VStack fitContent align='start' gap={ComponentVariable.Spacing.Petite}>
            <TAPIESymbol size={TAPIESymbolSize._24} withLabel />
            <Typo.Jumbo color={ColorVariable.Content.Emphasized} weight={Weight.Semibold}>{props.title}</Typo.Jumbo>
          </VStack>
          <Typo.Moderate color={ColorVariable.Content.Default}>{props.description}</Typo.Moderate>
        </Flex>
        
        <HStack wrap gap={ComponentVariable.Spacing.Base}>{
          props.features.map(f => <FeatureCard key={f.title} {...f} inverted={props.inverted} />)
        }</HStack>
      </VStack>
    </VStack>
  </>
}

function FeatureCard(props: HomeUnitsSectionTemplateProps['features'][0] & { inverted?: boolean }) {
  return <>
    <Flex className={cn(featureCardStyle, props.inverted && invertedFeatureCardStyle)} align='center' gap={ComponentVariable.Spacing.Moderate}>
      <VStack gap={ComponentVariable.Spacing.Micro}>
        <Typo.Medium color={ColorVariable.Content.Emphasized} weight={Weight.Semibold}>{props.title}</Typo.Medium>
        <Typo.Base color={ColorVariable.Content.Default}>{props.description}</Typo.Base>
      </VStack>
      <props.icon className={featureCardIconStyle} />
    </Flex>
  </>
}
