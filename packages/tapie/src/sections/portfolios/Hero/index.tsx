import { VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import Search from './search'

export default function PortfoliosHeroSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={Spacing.Jumbo}>
      <VStack gap={Spacing.Medium}>
        <VStack gap={Spacing.Petite}>
          <Typo.Jumbo weight={Weight.BOLD}>포트폴리오</Typo.Jumbo>
          <Typo.Moderate tag={Tag.P} weight={Weight.MEDIUM} color={Color.Content.Default}>TAPIE의 부원들이 이루어낸 성과들을 관람해보세요</Typo.Moderate>
        </VStack>

        <Search />
      </VStack>
    </ContentSection>
  </>
}
