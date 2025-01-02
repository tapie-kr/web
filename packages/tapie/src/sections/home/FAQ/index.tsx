import * as s from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import QuestionDropdown from './question-dropdown'
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider'
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector'
import Animate from '@tapie-kr/web-shared/components/Animate'

export default function HomeFAQSection() {
  return <>
    <ViewportDetector once>
      <VStack id='faq' align='center'>
        <Flex className={s.section} fullWidth justify='between'>
          <Flex fullWidth>
            <AnimateProvider
              initial={{ y: '100%' }} animate={{ y: 0 }}
              initialDelay={0.1} delayGap={0.1} duration={0.65}
              hideOverflow
            >
              <Animate fullWidth>
                <Typo.Jumbo tag={Tag.H2} weight={Weight.Semibold}>자주 묻는 질문</Typo.Jumbo>
              </Animate>
            </AnimateProvider>
          </Flex>
          <AnimateProvider
            initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }}
            initialDelay={0.55} delayGap={0.06} duration={0.8}
          >
            <VStack align='end' gap={Spacing.Base}>
              <QuestionDropdown order={0} question='포트폴리오는 필수인가요?'>
                <Typo.Base>
                  개발자 직군은 필수가 아니지만, 제출 시 가산점이 큽니다. 웬만하면 제출하시는게 좋습니다.
                  <br /> <br />
                  디자이너 직군은 필수입니다.
                </Typo.Base>
              </QuestionDropdown>
              <QuestionDropdown order={1} question='면접 일정은 어떻게 되나요?'>
                <Typo.Base>
                  면접 일정은 입학 후 추후 학사일정이 정해지면 안내합니다.
                </Typo.Base>
              </QuestionDropdown>
              <QuestionDropdown order={2} question='소프트웨어과나 콘텐츠디자인과가 아니어도 지원할 수 있나요?'>
                <Typo.Base>
                  현재 TAPIE는 소프트웨어과와 콘텐츠디자이너과를 제외한 다른 학과의 지원이 불가능합니다.
                </Typo.Base>
              </QuestionDropdown>
              <QuestionDropdown order={3} question='대회 참여는 필수인가요?'>
                <Typo.Base>
                  대회 참여는 본인의 선택이지만 협업 능력과 실력을 키울 수 있는 더할 나위 없는 좋은 방법이므로 대회에 참여하는걸 권장합니다.
                </Typo.Base>
              </QuestionDropdown>
            </VStack>
          </AnimateProvider>
        </Flex>
      </VStack>
    </ViewportDetector>
  </>
}
