import * as s from './styles.css'

import { Flex } from '@cottons-kr/react-foundation'
import { ReactNode } from 'react'
import Thumbnail from '@/../public/thumbnails/artnect.webp'

type PortfolioGradientCardProps = {
  padding?: string | number
  children?: ReactNode
}

export default function PortfolioGradientCard(props: PortfolioGradientCardProps) {
  return <>
    <Flex className={s.card} fullWidth>
      <img className={s.thumbnail} src={Thumbnail.src} alt='ArtNect' />
      <Flex
        className={s.content} align='end'
        style={{ padding: props.padding }}
      >
        {props.children}
      </Flex>
    </Flex>
  </>
}
