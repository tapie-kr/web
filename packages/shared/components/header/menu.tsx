'use client'

import { linkStyle } from './styles/menu.css'

import { motion } from 'framer-motion'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'
import { TAPIESymbol, TAPIESymbolSize, Typo, TypographyTag, TypographyWeight } from '@tapie-kr/inspire-react'
import { getTransition } from '~/lib/animation'
import ThemeSwitch from './theme-switch'

type LinkListProps = {
  links: Array<{ label: string, href: string }>
  hide: () => unknown
}

function LinkList(props: LinkListProps) {
  return <>
    <VStack fitContent gap={Spacing.Base}>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}
        transition={getTransition({ duration: 0.4, delay: 0.16 })}
      >
        <TAPIESymbol size={TAPIESymbolSize._20} withLabel />
      </motion.div>
      {
        props.links.map(({ label, href }, i) => (
          <motion.div
            key={label}
            className={linkStyle}
            initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1, y: 0 }}
            transition={getTransition({ duration: 0.4, delay: i * 0.04 + 0.16 })}
            onClick={props.hide}
          >
            <Link href={href}>
              <Typo.Medium tag={TypographyTag.Span} weight={TypographyWeight.Semibold}>{label}</Typo.Medium>
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

export default function Menu(props: DesktopMenuProps) {
  return <>
    <HStack>
      <VStack fitContent gap={Spacing.Medium}>
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
        <ThemeSwitch />
      </VStack>
    </HStack>
  </>
}
