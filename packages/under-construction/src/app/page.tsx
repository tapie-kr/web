import { HStack, VStack } from '@cottons-kr/react-foundation'
import { TAPIESymbol, TAPIESymbolSize, Typo, TypographyWeight } from '@tapie-kr/inspire-react'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'
import { copyrightStyle } from '@/styles/page.css'

import Github from '@/assets/github-mark.svg'
import Npm from '@/assets/npm-symbol.svg'

export default function Page() {
  const ICON_SIZE = 28

  return <>
    <VStack fitContent gap={ComponentVariable.Spacing.Jumbo}>
      <VStack gap={ComponentVariable.Spacing.Moderate}>
        <VStack align='start' gap={ComponentVariable.Spacing.Petite}>
          <TAPIESymbol size={TAPIESymbolSize._32} withLabel />
          <Typo.Jumbo weight={TypographyWeight.Semibold}>Under Construction</Typo.Jumbo>
        </VStack>
        <Typo.Base>리뉴얼된 사이트로 2025년에 돌아오겠습니다.</Typo.Base>
      </VStack>
      <HStack align='center' gap={ComponentVariable.Spacing.Moderate}>
        <Link href='https://github.com/tapie-kr' target='_blank' aria-label='Github'>
          <Github width={ICON_SIZE} height={ICON_SIZE} />
        </Link>
        <Link href='https://www.npmjs.com/org/tapie-kr' target='_blank' aria-label='NPM'>
          <Npm width={ICON_SIZE} height={ICON_SIZE} />
        </Link>
      </HStack>
    </VStack>

    <Typo.Micro className={copyrightStyle}>© 2025 TAPIE. All rights reserved.</Typo.Micro>
  </>
}
