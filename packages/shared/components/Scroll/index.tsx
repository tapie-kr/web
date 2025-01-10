'use client'

import * as s from './styles.css'

import { Viewport, ViewportProps } from '@cottons-kr/react-foundation'
import { useCallback, useRef, useState } from 'react'
import cn from 'classnames'
import { Button, ButtonVariant, GlyphIcon } from '@tapie-kr/inspire-react'

type OnScrollChangeMiddleware = Exclude<ViewportProps['onScrollChange'], undefined>

export default function Scroll(props: ViewportProps) {
  const { onScrollChange, ...rest } = props
  const [showLeftEffect, setShowLeftEffect] = useState(false)
  const [showRightEffect, setShowRightEffect] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)

  const onScrollChangeMiddleware: OnScrollChangeMiddleware = useCallback((isStart, isEnd, isMiddle) => {
    setShowRightEffect(isStart || isMiddle)
    setShowLeftEffect(isEnd || isMiddle)
    onScrollChange?.(isStart, isEnd, isMiddle)
  }, [])
  const onClickLeftPage = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const { scrollLeft, clientWidth } = viewport
    const newScrollLeft = scrollLeft - clientWidth
    viewport.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
  }, [viewportRef])
  const onClickRightPage = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const { scrollLeft, clientWidth } = viewport
    const newScrollLeft = scrollLeft + clientWidth
    viewport.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
  }, [viewportRef])

  return <>
    <div className={s.container}>
      <div className={cn(s.leftButton, { [s.hide]: !showLeftEffect })}>
        <Button.Icon
          icon={GlyphIcon.ARROW_BACK}
          variant={ButtonVariant.SECONDARY}
          onClick={onClickLeftPage}
        />
      </div>
      <Viewport
        ref={viewportRef}
        onScrollChange={onScrollChangeMiddleware}
        {...rest}
      />
      <div className={cn(s.rightButton, { [s.hide]: !showRightEffect })}>
        <Button.Icon
          icon={GlyphIcon.ARROW_FORWARD}
          variant={ButtonVariant.SECONDARY}
          onClick={onClickRightPage}
        />
      </div>
    </div>
  </>
}
