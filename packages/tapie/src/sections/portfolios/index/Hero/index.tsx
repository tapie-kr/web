import { VStack } from '@cottons-kr/react-foundation'
import { colorVars, spacingVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import Search from './search'

export default function PortfoliosHeroSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={spacingVars.jumbo}>
      <VStack gap={spacingVars.medium}>
        <VStack gap={spacingVars.petite}>
          <Typo.Jumbo weight={Weight.BOLD}>포트폴리오</Typo.Jumbo>
          <Typo.Moderate tag={Tag.P} weight={Weight.MEDIUM} color={colorVars.content.default}>TAPIE의 부원들이 이루어낸 성과들을 관람해보세요</Typo.Moderate>
        </VStack>

        <Search />
      </VStack>
    </ContentSection>
  </>
}
