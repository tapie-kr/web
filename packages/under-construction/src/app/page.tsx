import { HStack, VStack } from '@cottons-kr/react-foundation'
import { TAPIESymbol, TAPIESymbolSize, Typo } from '@tapie-kr/inspire-react'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'
import { copyrightStyle } from '@/styles/page.css'

import Github from '@/assets/github-mark.svg'
import Npm from '@/assets/npm-symbol.svg'

export default function Page() {
  const ICON_SIZE = 36

  return <>
    <VStack fitContent gap={52}>
      <VStack gap={ComponentVariable.Spacing._28}>
        <VStack align='start' gap={ComponentVariable.Spacing._12}>
          <TAPIESymbol size={TAPIESymbolSize._32} withLabel />
          <Typo.Display>Under Construction</Typo.Display>
        </VStack>
        <Typo.Body>리뉴얼된 사이트로 2025년에 돌아오겠습니다.</Typo.Body>
      </VStack>
      <HStack align='center' gap={ComponentVariable.Spacing._24}>
        <Link href='https://github.com/tapie-kr' target='_blank'>
          <Github width={ICON_SIZE} height={ICON_SIZE} />
        </Link>
        <Link href='https://www.npmjs.com/org/tapie-kr' target='_blank'>
          <Npm width={ICON_SIZE} height={ICON_SIZE} />
        </Link>
      </HStack>
    </VStack>

    <Typo.Footnote className={copyrightStyle}>© 2025 TAPIE. All rights reserved.</Typo.Footnote>
  </>
}
