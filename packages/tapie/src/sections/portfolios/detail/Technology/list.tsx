'use client';

import {
  BrandIcon,
  getShorthandedValue,
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
import { type SkillItem } from '@/app/portfolios/[id]/page';

type ListProps = {
  pending?: boolean;
  title:    string;
  items:    SkillItem[];
};

export function List(_props: ListProps) {
  const {
    pending,
    title,
    items,
  } = _props;

  if (pending) {
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
              key={index}
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
      <Typo.Moderate weight={Weight.SEMIBOLD}>{title}</Typo.Moderate>
      <ListWrapper>
        {items.map((item, index) => (
          <HStack
            key={index}
            spacing={spacingVars.tiny}
          >
            <Icon
              name={item.icon as keyof typeof BrandIcon in BrandIcon ? BrandIcon[item.icon as keyof typeof BrandIcon] : undefined}
              size={28}
            />
            <Typo.Base
              nowrap
              weight={Weight.MEDIUM}
            >
              {item.label}
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
