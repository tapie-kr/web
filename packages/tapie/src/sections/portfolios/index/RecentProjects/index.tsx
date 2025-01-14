import GradientCard from '@/components/portfolio/GradientCard'
import PortfolioSectionLabel from '@/components/portfolio/SectionLabel'
import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { Badge, colorVars, GlyphIcon, Icon, spacingVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'

export default function PortfoliosRecentProjectsSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={spacingVars.moderate}>
      <VStack gap={spacingVars.base}>
        <PortfolioSectionLabel emphasized>최신 작품</PortfolioSectionLabel>
        <Flex gap={spacingVars.petite}>
          <RecentProjectCard />
          <RecentProjectCard />
        </Flex>
      </VStack>
    </ContentSection>
  </>
}

function RecentProjectCard() {
  return <>
    <GradientCard padding={spacingVars.moderate}>
      <VStack gap={spacingVars.tiny} data-theme='dark'>
        <Badge.Default leadingIcon={GlyphIcon.TROPHY} label='수상작' />

        <HStack gap={spacingVars.base} align='end'>
          <Typo.Medium tag={Tag.P} weight={Weight.SEMIBOLD} color={colorVars.content.emphasized}>프로젝트 이름</Typo.Medium>
          <HStack gap={spacingVars.mini} fitContent align='center'>
            <Typo.Base tag={Tag.SPAN} weight={Weight.MEDIUM} color={colorVars.content.default}>프로젝트 설명</Typo.Base>
            <Icon name={GlyphIcon.ARROW_FORWARD} size={18} color={colorVars.content.default} />
          </HStack>
        </HStack>
      </VStack>
    </GradientCard>
  </>
}
