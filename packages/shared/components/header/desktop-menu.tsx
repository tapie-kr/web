'use client'

import { getTransition } from '~/lib/animation'
import { linkStyle } from './styles/menu.css'

import { motion } from 'framer-motion'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'
import { TAPIESymbol, TAPIESymbolSize, Typo, TypographyTag, TypographyWeight } from '@tapie-kr/inspire-react'

type LinkListProps = {
  links: Array<{ label: string, href: string }>
  hide: () => unknown
}

function LinkList(props: LinkListProps) {
  return <>
    <VStack fitContent gap={ComponentVariable.Spacing._20}>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}
        transition={getTransition(0.4, 0.15)}
      >
        <TAPIESymbol size={TAPIESymbolSize._20} withLabel />
      </motion.div>
      {
        props.links.map(({ label, href }, i) => (
          <motion.div
            key={label}
            className={linkStyle}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1, y: 0 }}
            transition={getTransition(0.35, i * 0.03 + 0.16)}
            onClick={props.hide}
          >
            <Link href={href}>
              <Typo.Title tag={TypographyTag.Span} weight={TypographyWeight.Bold}>{label}</Typo.Title>
            </Link>
          </motion.div>
        ))
      }
    </VStack>
  </>
}

type DesktopMenuProps = {
  hide: () => unknown
}

export default function DesktopMenu(props: DesktopMenuProps) {
  return <>
    <HStack>
      <LinkList
        links={[
          { label: '홈', href: '/' },
          { label: '프로젝트', href: '#projects' },
          { label: '수상실적', href: '#awards' },
          { label: 'FAQ', href: '#faq' },
          { label: 'INSPIRE', href: 'https://inspire.tapie.kr/' },
        ]}
        hide={props.hide}
      />
    </HStack>
  </>
}
