import { footer, linkChip, linkList } from './styles.css';

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation';

import {
  BrandIcon,
  colorVars,
  Icon,
  type IconName,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  TypographyWeight as Weight,
} from '@tapie-kr/inspire-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <Flex
        tag='footer'
        className={footer}
        justify='between'
        fullWidth
        gap={spacingVars.large}
      >
        <VStack gap={spacingVars.moderate}>
          <VStack
            fitContent
            align='start'
            gap={spacingVars.petite}
          >
            <TAPIESymbol
              size={TAPIESymbolSize._20}
              hasLabel
            />
            <Typo.Base
              color={colorVars.content.muted}
              weight={Weight.MEDIUM}
            >
              서울특별시 용산구 원효로97길 33-4 <br />
              선린인터넷고등학교 343실
            </Typo.Base>
          </VStack>
          <Typo.Petite color={colorVars.content.muted}>
            ⓒ 2025 TAPIE. All rights reserved.
          </Typo.Petite>
        </VStack>

        <HStack
          className={linkList}
          wrap
          gap={spacingVars.base}
          align='end'
        >
          <LinkChip
            href='https://www.instagram.com/sunrin_tapie/'
            icon={BrandIcon.INSTAGRAM}
            label='sunrin_tapie'
          />
          <LinkChip
            href='https://github.com/tapie-kr'
            icon={BrandIcon.GITHUB}
            label='tapie-kr'
          />
          <LinkChip
            href='https://www.npmjs.com/org/tapie-kr'
            icon={BrandIcon.NPM}
            label='@tapie-kr'
          />
        </HStack>
      </Flex>
    </>
  );
}

type LinkChipProps = {
  href: string;
  icon: IconName;
  label: string;
};

function LinkChip(props: LinkChipProps) {
  return (
    <>
      <Link
        href={props.href}
        target='_blank'
      >
        <HStack
          className={linkChip}
          align='center'
          gap={spacingVars.tiny}
        >
          <Icon name={props.icon} />
          <Typo.Petite weight={Weight.MEDIUM}>{props.label}</Typo.Petite>
        </HStack>
      </Link>
    </>
  );
}
