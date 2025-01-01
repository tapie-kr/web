import { footer, linkChip, linkList } from './styles.css'

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { BrandIcon, Icon, IconName, TAPIESymbol, TAPIESymbolSize, Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import Link from 'next/link'

export default function Footer() {
  return <>
    <Flex tag='footer' className={footer} justify='between' fullWidth gap={Spacing.Large}>
      <VStack gap={Spacing.Moderate}>
        <VStack fitContent align='start' gap={Spacing.Petite}>
          <TAPIESymbol size={TAPIESymbolSize._20} withLabel />
          <Typo.Base color={Color.Content.Muted} weight={Weight.Medium}>
            서울특별시 용산구 원효로97길 33-4 <br />
            선린인터넷고등학교 343실
          </Typo.Base>
        </VStack>
        <Typo.Petite color={Color.Content.Muted}>ⓒ 2025 TAPIE. All rights reserved.</Typo.Petite>
      </VStack>

      <HStack className={linkList} wrap gap={Spacing.Base} align='end'>
        <LinkChip
          href='https://www.instagram.com/sunrin_tapie/'
          icon={BrandIcon.Instagram}
          label='sunrin_tapie'
        />
        <LinkChip
          href='https://github.com/tapie-kr'
          icon={BrandIcon.Github}
          label='tapie-kr'
        />
        <LinkChip
          href='https://www.npmjs.com/org/tapie-kr'
          icon={BrandIcon.Npm}
          label='@tapie-kr'
        />
      </HStack>
    </Flex>
  </>
}

type LinkChipProps = {
  href: string
  icon: IconName
  label: string
}

function LinkChip(props: LinkChipProps) {
  return <>
    <Link href={props.href} target='_blank'>
      <HStack className={linkChip} align='center' gap={Spacing.Tiny}>
        <Icon name={props.icon} />
        <Typo.Petite weight={Weight.Medium}>{props.label}</Typo.Petite>
      </HStack>
    </Link>
  </>
}
