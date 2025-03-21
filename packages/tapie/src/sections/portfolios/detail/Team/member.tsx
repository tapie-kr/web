'use client';

import { image } from './styles.css';

import {
  AspectRatio,
  Box,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  Image,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  Typo,
  TypographyVariant,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import Link from 'next/link';
import { type User } from '@/app/portfolios/[id]/page';

interface Props extends User {
  pending: boolean;
}

export default function TeamMember(_props: Props) {
  const isMobile = useMediaQuery();
  const { pending } = _props;

  if (pending) {
    return (
      <HStack spacing={spacingVars.base}>
        <AspectRatio
          ratio={1}
          width={isMobile ? 48 : 60}
        >
          <Skeleton
            fullWidth
            fullHeight
            borderRadius={radiusVars.full}
          />
        </AspectRatio>
        <VStack
          spacing={isMobile ? spacingVars.optical : spacingVars.mini}
          align={StackAlign.START}
        >
          <HStack spacing={isMobile ? spacingVars.optical : spacingVars.mini}>
            <HStack spacing={isMobile ? spacingVars.tiny : spacingVars.micro}>
              <Skeleton
                width={70}
                height={26}
                borderRadius={radiusVars.default}
              />
              <Skeleton
                width={70}
                height={26}
                borderRadius={radiusVars.default}
              />
            </HStack>
          </HStack>
          <Skeleton
            width={190}
            height={20}
            borderRadius={radiusVars.default}
          />
        </VStack>
      </HStack>
    );
  }

  return (
    <Link href={_props.username?.includes('::externalUSER') ? '#' : `/members/${_props.username}`}>
      <HStack spacing={spacingVars.base}>
        <Box
          className={image}
        >
          <AspectRatio
            ratio={1}
            width={isMobile ? 48 : 60}
          >
            <Image
              fullHeight
              fullWidth
              src={_props.profileUri ?? ''}
              alt={_props.name ?? ''}
              className={image}
            />
          </AspectRatio>
        </Box>
        <VStack
          spacing={isMobile ? spacingVars.optical : spacingVars.mini}
          align={StackAlign.START}
        >
          <HStack spacing={isMobile ? spacingVars.optical : spacingVars.mini}>
            <HStack spacing={isMobile ? spacingVars.tiny : spacingVars.micro}>
              <Typo
                weight={Weight.SEMIBOLD}
                variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
              >
                {_props.name}
              </Typo>
              <Typo
                weight={Weight.SEMIBOLD}
                color={colorVars.content.default}
                variant={isMobile ? TypographyVariant.TINY : TypographyVariant.BASE}
              >
                {_props.role}
              </Typo>
            </HStack>
            <Icon
              name={GlyphIcon.ARROW_FORWARD}
              size={isMobile ? 12 : 16}
              color={colorVars.content.default}
            />
          </HStack>
          <Typo.Petite
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
          >
            이 팀원의 설명과 수행한 일 설명
          </Typo.Petite>
        </VStack>
      </HStack>
    </Link>
  );
}
