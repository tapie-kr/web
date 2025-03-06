import { section } from './styles.css';

import {
  Badge,
  BadgeTheme,
  BrandIcon,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { MemberUnit } from '@tapie-kr/api-client/enum';
import NextLink from 'next/link';
import { type Link as LinkType } from '@/app/members/[id]/page';
import { memberEnumKorean } from '@/utils/enum';
import MembersDetailHeroSectionSkeleton from './Skeleton';

interface Props {
  pending: boolean;
  name?:   string;
  unit?:   MemberUnit;
  role?:   string;
  links?:  LinkType[];
}

export default function MembersDetailHeroSection(_props: Props) {
  const {
    pending,
    name,
    unit,
    role,
    links,
  } = _props;

  if (pending) {
    return (
      <MembersDetailHeroSectionSkeleton />
    );
  }

  return (
    <VStack
      fullWidth
      className={section}
      align={StackAlign.START}
      spacing={spacingVars.petite}
    >
      <HStack
        spacing={spacingVars.petite}
        justify={StackJustify.START}
      >
        <Typo.Large weight={Weight.SEMIBOLD}>{name}</Typo.Large>
        <Typo.Medium
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >
          {memberEnumKorean(unit ?? MemberUnit.DEVELOPER)}
        </Typo.Medium>
        {role === 'MANAGER' && (
          <Badge.Default
            theme={BadgeTheme.GREEN}
            leadingIcon={GlyphIcon.VERIFIED}
            label={role}
          />
        )}
      </HStack>
      <HStack
        fullWidth
        spacing={spacingVars.base}
        wrap={StackWrap.WRAP}
        justify={StackJustify.START}
      >
        {links?.map(link => (
          <Link
            key={link.name}
            name={link.name}
            url={link.url}
          />
        ))}
      </HStack>
    </VStack>
  );
}

interface LinkProps {
  name: string;
  url:  string;
}

function Link(_props: LinkProps) {
  const { name, url } = _props;

  return (
    <NextLink href={url}>
      <HStack spacing={spacingVars.mini}>
        {/* <Icon name={BrandIcon.GITHUB} /> */}
        <Icon name={Object.keys(BrandIcon).includes(name.toUpperCase()) ? BrandIcon[name.toUpperCase() as keyof typeof BrandIcon] : undefined} />
        <Typo.Base weight={Weight.MEDIUM}>{name}</Typo.Base>
      </HStack>
    </NextLink>
  );
}
