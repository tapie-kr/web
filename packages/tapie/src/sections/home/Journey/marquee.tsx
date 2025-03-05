'use client';

import * as s from './styles/marquee.css';

import { HStack } from '@cottons-kr/react-foundation';
import { spacingVars } from '@tapie-kr/inspire-react';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type CardData = {
  id:        string;
  x:         number;
  isVisible: boolean;
};

type HomeJourneySectionMarqueeProps = {
  assets:    Array<string>;
  direction: 'left' | 'right';
  speed:     number;
};

export default function HomeJourneySectionMarquee(props: HomeJourneySectionMarqueeProps) {
  const [viewportWidth, setViewportWidth] = useState(1400);
  const [cardWidth, setCardWidth] = useState(370);
  const [gapWidth, setGapWidth] = useState(16);
  const [visibleCards, setVisibleCards] = useState<Array<CardData>>([]);
  const [speed, setSpeed] = useState(props.speed);
  const animationRef = useRef<number | null>(null);
  const lastTimestamp = useRef<number>(null);

  const requiredCardCount = useMemo(() => Math.ceil(viewportWidth / cardWidth) + 1,
    [viewportWidth, cardWidth]);

  const getInitialCards = useCallback(() => {
    return Array.from({ length: requiredCardCount }, (_, i) => ({
      id: i.toString(),
      x:
        props.direction === 'left'
          ? i * (cardWidth + gapWidth)
          : viewportWidth - (i + 1) * (cardWidth + gapWidth),
      isVisible: true,
    }));
  }, [
    requiredCardCount,
    props.direction,
    cardWidth,
    gapWidth,
    viewportWidth,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);

      if (window.innerWidth <= 768) {
        setCardWidth(176);

        setGapWidth(14);

        setSpeed(props.speed * 0.6);
      } else {
        setCardWidth(370);

        setGapWidth(16);

        setSpeed(props.speed);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [props.speed]);

  useEffect(() => {
    setVisibleCards(getInitialCards());

    const animate = () => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = performance.now();
      }

      const delta = performance.now() - lastTimestamp.current;

      lastTimestamp.current = performance.now();

      setVisibleCards(prev => {
        const updated = prev
          .map(card => {
            const movement = (speed * delta) / 1000;

            const nextX =
              props.direction === 'left'
                ? card.x - movement
                : card.x + movement;

            const isVisible =
              props.direction === 'left'
                ? nextX >= -(cardWidth + gapWidth)
                : nextX <= viewportWidth;

            return {
              ...card,
              x: nextX,
              isVisible,
            };
          })
          .filter(card => card.isVisible);

        if (updated.length < requiredCardCount) {
          const lastCard = updated[updated.length - 1];

          if (!lastCard) {
            return getInitialCards();
          }

          updated.push({
            id: (parseInt(lastCard.id) + 1).toString(),
            x:
              props.direction === 'left'
                ? lastCard.x + cardWidth + gapWidth
                : lastCard.x - cardWidth - gapWidth,
            isVisible: true,
          });
        }

        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    props.direction,
    speed,
    viewportWidth,
    cardWidth,
    getInitialCards,
    requiredCardCount,
    gapWidth,
  ]);

  return (
    <HStack
      className={s.marquee}
      gap={spacingVars.base}
    >
      {visibleCards.map(card => (
        <Card
          key={card.id}
          x={card.x}
          path={props.assets[parseInt(card.id) % props.assets.length]}
        />
      ))}
    </HStack>
  );
}

type CardProps = {
  x:    number;
  path: string;
};

function Card(props: CardProps) {
  return (
    <div
      className={s.card}
      style={{ transform: `translateX(${props.x}px)` }}
    >
      <img
        className={s.thumbnail}
        src={`/thumbnails/${props.path}`}
        alt={props.path.replace('.webp', '')}
      />
    </div>
  );
}
