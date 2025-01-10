import SectionLabel from '@/components/portfolio/SectionLabel'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import List from './list'

export default function PortfoliosMembersSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={Spacing.Moderate}>
      <VStack gap={Spacing.Base}>
        <HStack align='center' gap={Spacing.Petite}>
          <SectionLabel emphasized>TAPIE 부원</SectionLabel>
          <Typo.Petite tag={Tag.Span} weight={Weight.MEDIUM} color={Color.Content.Default}>사진을 눌러 부원들의 프로필을 확인해보세요</Typo.Petite>
        </HStack>
        <List />
      </VStack>
    </ContentSection>
  </>
}
