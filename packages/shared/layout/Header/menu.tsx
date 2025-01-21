'use client'

import * as s from './styles/menu.css'

import { motion } from 'framer-motion'
import { HStack, VStack } from '@cottons-kr/react-foundation'
import Link from 'next/link'
import { getTransition } from '~/lib/animation'
import ThemeSwitch from './theme-switch'
import { TAPIESymbol, TAPIESymbolSize, Icon, GlyphIcon, Typo, Tag, Weight, colorVars, spacingVars, utilityClass } from '@tapie-kr/inspire-react'

type LinkListProps = {
  links: Array<{ label: string, href: string }>
  hide: () => unknown
}

function LinkList(props: LinkListProps) {
  const headerMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
    transition: getTransition({ duration: 0.4, delay: 0.18 }),
  }

  return <>
    <VStack className={s.linkList}>
      <HStack align='center' justify='between'>
        <motion.div {...headerMotionProps}>
          <TAPIESymbol className={utilityClass.desktopOnly} size={TAPIESymbolSize._20} hasLabel />
          <TAPIESymbol className={utilityClass.mobileOnly} size={TAPIESymbolSize._32} />
        </motion.div>

        <motion.div className={utilityClass.mobileOnly} onClick={props.hide} {...headerMotionProps}>
          <Icon name={GlyphIcon.CLOSE} color={colorVars.content.emphasized} size={32} />
        </motion.div>
      </HStack>
      {
        props.links.map(({ label, href }, i) => (
          <motion.div
            key={label}
            className={s.link}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 1, y: 0 }}
            transition={getTransition({ duration: 0.4, delay: i * 0.03 + 0.18 })}
            onClick={props.hide}
          >
            <Link href={href}>
              <Typo.Medium tag={Tag.SPAN} weight={Weight.SEMIBOLD}>{label}</Typo.Medium>
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
      <VStack gap={spacingVars.medium}>
        <LinkList
          links={[
            { label: '홈', href: '/' },
            { label: '포트폴리오', href: '/portfolios' },
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
