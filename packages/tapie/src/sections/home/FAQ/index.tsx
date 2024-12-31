import { section } from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import QuestionDropdown from './question-dropdown'

export default function HomeFAQSection() {
  return <>
    <VStack align='center'>
      <Flex className={section} fullWidth gap={ComponentVariable.Spacing.Large}>
        <Typo.Jumbo weight={Weight.Semibold} nowrap>자주 묻는 질문</Typo.Jumbo>
        <VStack align='end' gap={ComponentVariable.Spacing.Base}>
          <QuestionDropdown question='예시 질문' answer='예시 답변' />
          <QuestionDropdown question='예시 질문' answer='예시 답변' />
          <QuestionDropdown question='예시 질문' answer='예시 답변' />
          <QuestionDropdown question='예시 질문' answer='예시 답변' />
          <QuestionDropdown question='예시 질문' answer='예시 답변' />
        </VStack>
      </Flex>
    </VStack>
  </>
}
