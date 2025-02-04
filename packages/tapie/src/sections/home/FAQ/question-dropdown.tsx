'use client';

import * as s from './styles.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';

import { colorVars, GlyphIcon, Icon, spacingVars, Typo, Weight } from '@tapie-kr/inspire-react';
import Animate from '@tapie-kr/web-shared/components/Animate';
import { useToggle } from '@tapie-kr/web-shared/hooks/use-toggle';
import { getTransition } from '@tapie-kr/web-shared/lib/animation';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type HomeFAQSectionQuestionDropdownProps = {
  order:     number;
  question:  string;
  children?: Children;
};

export default function HomeFAQSectionQuestionDropdown(props: HomeFAQSectionQuestionDropdownProps) {
  const [isOpened, toggleOpened] = useToggle();

  const titleRef = useRef<HTMLDivElement>(null);

  const [titleHeight, setTitleHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setTitleHeight(titleRef.current?.clientHeight ?? 0);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight ?? 0);
  }, [titleRef]);

  return (
    <Animate
      fullWidth
      order={props.order}
      className={s.maxWidth}
      onClick={() => toggleOpened()}
    >
      <div className={s.dropdown}>
        <motion.div
          className={s.content}
          initial={{ height: titleHeight }}
          animate={{ height: isOpened ? 'auto' : titleHeight }}
          transition={getTransition({ duration: 0.35 })}
        >
          <VStack gap={spacingVars.moderate}>
            <div ref={titleRef}>
              <HStack
                align='center'
                justify='between'
              >
                <Typo.Moderate
                  color={colorVars.content[isOpened ? 'emphasized' : 'default']}
                  weight={isOpened ? Weight.SEMIBOLD : Weight.REGULAR}
                >
                  {props.question}
                </Typo.Moderate>
                <motion.div
                  animate={{ rotate: isOpened ? 180 : 0 }}
                  transition={getTransition()}
                >
                  <Icon name={GlyphIcon.KEYBOARD_ARROW_UP} />
                </motion.div>
              </HStack>
            </div>
            <motion.div
              transition={getTransition({ delay: isOpened ? 0.06 : 0 })}
              animate={{
                opacity: isOpened ? 1 : 0,
                y:       isOpened ? 0 : -20,
              }}
            >
              {props.children}
            </motion.div>
          </VStack>
        </motion.div>
      </div>
    </Animate>
  );
}
