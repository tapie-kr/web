'use client';

import * as s from './styles.css';

import { Viewport, type ViewportProps } from '@cottons-kr/react-foundation';

import { Button, ButtonVariant, GlyphIcon } from '@tapie-kr/inspire-react';
import cn from 'classnames';
import { useCallback, useRef, useState } from 'react';

type OnScrollChangeMiddleware = Exclude<ViewportProps['onScrollChange'], undefined>;

export default function Scroll(props: ViewportProps) {
  const { onScrollChange, ...rest } = props;

  const [showLeftEffect, setShowLeftEffect] = useState(false);

  const [showRightEffect, setShowRightEffect] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);

  const handleScrollChangeMiddleware: OnScrollChangeMiddleware = useCallback((isStart, isEnd, isMiddle) => {
    setShowRightEffect(isStart || isMiddle);

    setShowLeftEffect(isEnd || isMiddle);

    onScrollChange?.(isStart, isEnd, isMiddle);
  },
  [onScrollChange]);

  const handleClickLeftPage = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const { scrollLeft, clientWidth } = viewport;

    const newScrollLeft = scrollLeft - clientWidth;

    viewport.scrollTo({
      left:     newScrollLeft,
      behavior: 'smooth',
    });
  }, [viewportRef]);

  const handleClickRightPage = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const { scrollLeft, clientWidth } = viewport;

    const newScrollLeft = scrollLeft + clientWidth;

    viewport.scrollTo({
      left:     newScrollLeft,
      behavior: 'smooth',
    });
  }, [viewportRef]);

  return (
    <div className={s.container}>
      <div className={cn(s.leftButton, { [s.hide]: !showLeftEffect })}>
        <Button.Icon
          icon={GlyphIcon.ARROW_BACK}
          variant={ButtonVariant.SECONDARY}
          onClick={handleClickLeftPage}
        />
      </div>

      <Viewport
        ref={viewportRef}
        onScrollChange={handleScrollChangeMiddleware}
        {...rest}
      />

      <div className={cn(s.rightButton, { [s.hide]: !showRightEffect })}>
        <Button.Icon
          icon={GlyphIcon.ARROW_FORWARD}
          variant={ButtonVariant.SECONDARY}
          onClick={handleClickRightPage}
        />
      </div>
    </div>
  );
}
