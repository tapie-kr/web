'use client';

import {
  getShorthandedValue,
  GlyphIcon,
  Grid,
  HStack,
  Icon,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
  Typo,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type ReactNode } from 'react';

type ListProps = {
  title: string;
};

export function List(props: ListProps) {
  const isPending = true;

  if (isPending) {
    return (
      <VStack
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        {/* <Typo.Moderate weight={Weight.SEMIBOLD}>{props.title}</Typo.Moderate>*/}
        <Skeleton
          width={35}
          height={26}
          borderRadius={radiusVars.default}
        />
        <ListWrapper>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              width={94}
              height={28}
              borderRadius={radiusVars.default}
            />
          ))}
        </ListWrapper>
      </VStack>
    );
  }

  return (
    <VStack
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <Typo.Moderate weight={Weight.SEMIBOLD}>{props.title}</Typo.Moderate>
      <ListWrapper>
        {Array.from({ length: 5 }).map((_, index) => (
          <HStack
            key={index}
            spacing={spacingVars.tiny}
          >
            <Icon
              name={GlyphIcon.DEFAULT}
              size={28}
            />
            <Typo.Base
              nowrap
              weight={Weight.MEDIUM}
            >
              기술 이름
            </Typo.Base>
          </HStack>
        ))}
      </ListWrapper>
    </VStack>
  );
}

type ListWrapperProps = {
  children?: ReactNode;
};

function ListWrapper(props: ListWrapperProps) {
  const isMobile = useMediaQuery();

  return isMobile
    ? (
      <HStack
        wrap={StackWrap.WRAP}
        justify={StackJustify.START}
        spacing={getShorthandedValue(spacingVars.tiny, spacingVars.tiny)}
      >
        {props.children}
      </HStack>
    )
    : (
      <Grid
        rowGap={spacingVars.base}
        columnGap={spacingVars.moderate}
        columnCount={3}
      >
        {props.children}
      </Grid>
    );
}
