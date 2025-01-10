import GradientCard from '@/components/portfolio/GradientCard'
import PortfolioSectionLabel from '@/components/portfolio/SectionLabel'
import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { Badge, GlyphIcon, Icon, Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'

export default function PortfoliosRecentProjectsSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={Spacing.Moderate}>
      <VStack gap={Spacing.Base}>
        <PortfolioSectionLabel emphasized>최신 작품</PortfolioSectionLabel>
        <Flex gap={Spacing.Petite}>
          <RecentProjectCard />
          <RecentProjectCard />
        </Flex>
      </VStack>
    </ContentSection>
  </>
}

function RecentProjectCard() {
  return <>
    <GradientCard padding={Spacing.Moderate}>
      <VStack gap={Spacing.Tiny} data-theme='dark'>
        <Badge.Default leadingIcon={GlyphIcon.TROPHY} label='수상작' />

        <HStack gap={Spacing.Base} align='end'>
          <Typo.Medium tag={Tag.P} weight={Weight.SEMIBOLD} color={Color.Content.Emphasized}>프로젝트 이름</Typo.Medium>
          <HStack gap={Spacing.Mini} fitContent align='center'>
            <Typo.Base tag={Tag.Span} weight={Weight.MEDIUM} color={Color.Content.Default}>프로젝트 설명</Typo.Base>
            <Icon name={GlyphIcon.ARROW_FORWARD} size={18} color={Color.Content.Default} />
          </HStack>
        </HStack>
      </VStack>
    </GradientCard>
  </>
}
