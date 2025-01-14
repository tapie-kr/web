import PortfolioSectionLabel from '@/components/portfolio/SectionLabel'
import { VStack } from '@cottons-kr/react-foundation'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import List from './list'
import { spacingVars } from '@tapie-kr/inspire-react'

export default function PortfoliosRecentAwardsSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={spacingVars.moderate}>
      <VStack gap={spacingVars.petite}>
        <PortfolioSectionLabel emphasized>최신 수상 내역</PortfolioSectionLabel>
        <List />
      </VStack>
    </ContentSection>
  </>
}
