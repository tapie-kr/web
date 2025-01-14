import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Badge, BadgeTheme, colorVars, GlyphIcon, Icon, spacingVars, Typo, Weight } from '@tapie-kr/inspire-react'

type AwardCardProps = {

}

export default function AwardCard(props: AwardCardProps) {
  return <>
    <VStack fitContent gap={spacingVars.micro}>
      <VStack gap={spacingVars.optical}>
        <Typo.Micro weight={Weight.MEDIUM} color={colorVars.content.default}>어디어디재단</Typo.Micro>
        <HStack gap={spacingVars.micro} align='center'>
          <Typo.Medium weight={Weight.SEMIBOLD} nowrap>2025 무슨무슨대회</Typo.Medium>
          <Badge.Default theme={BadgeTheme.RED} leadingIcon={GlyphIcon.TROPHY} label='최우수상' />
        </HStack>
      </VStack>
      <HStack gap={spacingVars.mini} align='center' style={{ color: colorVars.content.default }}>
        <Typo.Base weight={Weight.MEDIUM}>프로젝트 이름</Typo.Base>
        <Icon name={GlyphIcon.ARROW_FORWARD} size={20} />
      </HStack>
    </VStack>
  </>
}
