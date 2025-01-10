import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import { ReactNode } from 'react'

type ContentSectionProps = {
  order?: number
  verticalPadding?: string | number
  horizontalPadding?: string | number
  maxWidth?: string | number
  children?: ReactNode
}

export default function ContentSection(props: ContentSectionProps) {
  const {
    verticalPadding = Spacing.None,
    horizontalPadding = Spacing.Base,
    maxWidth = '100%',
    children,
  } = props

  return <>
    <VStack
      tag='section'
      fullWidth align='center'
      style={{ padding: `${verticalPadding} ${horizontalPadding}` }}
    >
      <Flex fullWidth style={{ maxWidth }}>{children}</Flex>
    </VStack>
  </>
}
