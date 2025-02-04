import * as s from './styles.css';

import { Flex, VStack } from '@cottons-kr/react-foundation';

import { colorVars, spacingVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react';
import Animate from '@tapie-kr/web-shared/components/Animate';
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { getTransition, resetTransition } from '@tapie-kr/web-shared/lib/animation';
import { motion } from 'framer-motion';
import { useContext } from 'react';

type HomeUnitsSectionListProps = {
  order:    number;
  title:    string;
  features: Array<{
    title:       string;
    description: string;
    icon:        SVGComponent;
  }>;
};

export default function HomeUnitsSectionList(props: HomeUnitsSectionListProps) {
  const { isInView } = useContext(ViewportDetectorContext);

  return (
    <VStack
      fullWidth
      className={s.list}
      gap={spacingVars.moderate}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView
          ? { opacity: 1 }
          : {
            opacity:    0,
            transition: resetTransition,
          }}
        transition={getTransition({
          delay:    (props.order * 0.3) + 0.4,
          duration: 0.7,
        })}
      >
        <Typo.Large
          tag={Tag.H3}
          weight={Weight.SEMIBOLD}
        >
          {props.title}
        </Typo.Large>
      </motion.div>
      <VStack
        fullWidth
        gap={spacingVars.petite}
      >
        {props.features.map((feature, i) => (
          <FeatureCard
            key={i}
            order={i}
            {...feature}
          />
        ))}
      </VStack>
    </VStack>
  );
}

type FeatureCardProps = HomeUnitsSectionListProps['features'][0] & { order: number };

function FeatureCard(props: FeatureCardProps) {
  return (
    <Animate
      fullWidth
      order={props.order}
    >
      <Flex
        fullWidth
        className={s.featureCard}
        align='center'
        gap={spacingVars.moderate}
      >
        <VStack gap={spacingVars.micro}>
          <Typo.Medium
            color={colorVars.content.emphasized}
            tag={Tag.H4}
            weight={Weight.SEMIBOLD}
          >
            {props.title}
          </Typo.Medium>
          <Typo.Base color={colorVars.content.default}>{props.description}</Typo.Base>
        </VStack>
        <props.icon className={s.featureCardIcon} />
      </Flex>
    </Animate>
  );
}
