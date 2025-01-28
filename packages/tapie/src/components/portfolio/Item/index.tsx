import { right, thumbnail } from './styles.css';

import {
  AspectRatio,
  Button,
  ButtonSize,
  colorVars,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

type PortfolioItemProps = {
  isWinner?: boolean;
};

export default function PortfolioItem(_props: PortfolioItemProps) {
  return (
    <>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
      >
        <HStack spacing={spacingVars.moderate}>
          <AspectRatio
            className={thumbnail}
            ratio={16 / 9}
          >
            <Skeleton
              fullWidth
              fullHeight
              borderRadius={radiusVars.default}
            />
          </AspectRatio>
          <VStack
            spacing={spacingVars.mini}
            align={StackAlign.START}
          >
            <Typo.Moderate weight={Weight.MEDIUM}>프로젝트 이름</Typo.Moderate>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              프로젝트 설명
            </Typo.Base>
          </VStack>
        </HStack>
        <HStack
          className={right}
          spacing={spacingVars.moderate}
        >
          <Typo.Base weight={Weight.MEDIUM}>2025-01-01</Typo.Base>
          <Button.Icon
            icon={GlyphIcon.ARROW_FORWARD}
            size={ButtonSize.MEDIUM}
          />
        </HStack>
      </HStack>
    </>
  );
}
