import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Badge, BadgeTheme, GlyphIcon, Icon, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'

type AwardCardProps = {

}

export default function AwardCard(props: AwardCardProps) {
  return <>
    <VStack fitContent gap={Spacing.Micro}>
      <VStack gap={Spacing.Optical}>
        <Typo.Micro weight={Weight.MEDIUM} color={Color.Content.Default}>어디어디재단</Typo.Micro>
        <HStack gap={Spacing.Micro} align='center'>
          <Typo.Medium weight={Weight.SEMIBOLD} nowrap>2025 무슨무슨대회</Typo.Medium>
          <Badge.Default theme={BadgeTheme.RED} leadingIcon={GlyphIcon.TROPHY} label='최우수상' />
        </HStack>
      </VStack>
      <HStack gap={Spacing.Mini} align='center' style={{ color: Color.Content.Default }}>
        <Typo.Base weight={Weight.MEDIUM}>프로젝트 이름</Typo.Base>
        <Icon name={GlyphIcon.ARROW_FORWARD} size={20} />
      </HStack>
    </VStack>
  </>
}
