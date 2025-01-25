import SectionLabel from '@/components/portfolio/SectionLabel'
import { colorVars, HStack, spacingVars, StackAlign, Tag, Typo, VStack, Weight } from '@tapie-kr/inspire-react'
import ContentSection from '@tapie-kr/web-shared/components/ContentSection'
import List from './list'

export default function PortfoliosMembersSection() {
  return <>
    <ContentSection maxWidth={1400} verticalPadding={spacingVars.moderate}>
      <VStack spacing={spacingVars.base} align={StackAlign.START}>
        <HStack spacing={spacingVars.petite}>
          <SectionLabel emphasized>TAPIE 부원</SectionLabel>
          <Typo.Petite tag={Tag.SPAN} weight={Weight.MEDIUM} color={colorVars.content.default}>사진을 눌러 부원들의 프로필을 확인해보세요</Typo.Petite>
        </HStack>
        <List />
      </VStack>
    </ContentSection>
  </>
}
