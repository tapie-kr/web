'use client'

import { getTransition } from '~/lib/animation'
import { backdropStyle, contentStyle, frameStyle, linkStyle, menuStyle } from './styles/menu.css'

import { motion } from 'framer-motion'
import { VStack } from '@cottons-kr/react-foundation'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'
import { TAPIESymbol, TAPIESymbolSize, Typo, TypographyTag, TypographyWeight } from '@tapie-kr/inspire-react'

type BackdropProps = {
  onClick: () => unknown
}

function Backdrop(props: BackdropProps) {
  return <>
    <motion.div
      className={backdropStyle} onClick={props.onClick}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    />
  </>
}

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

type HeaderMenuProps = {
  hide: () => unknown
}

export default function HeaderMenu(props: HeaderMenuProps) {
  return <>
    <Backdrop onClick={props.hide} />
    <div className={frameStyle}>
      <motion.div
        data-theme='dark'
        className={menuStyle}
        initial={{ height: 0 }} animate={{ height: '100%' }} exit={{ height: 0 }}
        transition={getTransition(0.4)}
      >
        <div className={contentStyle}>
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
        </div>
      </motion.div>
    </div>
  </>
}
