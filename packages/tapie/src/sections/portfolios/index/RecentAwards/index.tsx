import PortfolioSectionLabel from '@/components/portfolio/SectionLabel'
import { VStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import List from './list'

export default function PortfoliosRecentAwardsSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={Spacing.Moderate}>
      <VStack gap={Spacing.Petite}>
        <PortfolioSectionLabel emphasized>최신 수상 내역</PortfolioSectionLabel>
        <List />
      </VStack>
    </ContentSection>
  </>
}
