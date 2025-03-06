'use client';

import {
  Button,
  ButtonVariant,
  DStack,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackDirection,
  useMediaQuery,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Link from 'next/link';
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function PortfoliosDetailDownloadSection(_props: Props) {
  const isMobile = useMediaQuery();
  const { pending, award } = _props;

  if (pending) {
    return (
      <ContentSection
        maxWidth={1400}
        verticalPadding={spacingVars.medium}
      >
        <DStack
          fullWidth={isMobile}
          defaultDirection={StackDirection.ROW}
          spacing={isMobile ? spacingVars.base : spacingVars.medium}
          align={isMobile ? StackAlign.START : StackAlign.CENTER}
        >
          <DStack
            fullWidth={isMobile}
            defaultDirection={StackDirection.ROW}
            spacing={spacingVars.micro}
          >
            <Skeleton
              fullWidth={isMobile}
              width={181}
              height={48}
              borderRadius={radiusVars.default}
            />
            <Skeleton
              fullWidth={isMobile}
              width={181}
              height={48}
              borderRadius={radiusVars.default}
            />
          </DStack>
          <HStack spacing={spacingVars.micro}>
            <Skeleton
              width={50}
              height={20}
              borderRadius={radiusVars.default}
            />
            <Skeleton
              width={50}
              height={20}
              borderRadius={radiusVars.default}
            />
          </HStack>
        </DStack>
      </ContentSection>
    );
  }

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <DStack
        fullWidth={isMobile}
        defaultDirection={StackDirection.ROW}
        spacing={isMobile ? spacingVars.base : spacingVars.medium}
        align={isMobile ? StackAlign.START : StackAlign.CENTER}
      >
        <DStack
          fullWidth={isMobile}
          defaultDirection={StackDirection.ROW}
          spacing={spacingVars.micro}
        >
          <Link
            download
            href={award?.download.presentationUri ?? '#'}
          >
            <Button.Default
              leadingIcon={GlyphIcon.DOWNLOAD}
              fullWidth={isMobile}
            >
              발표자료 다운로드
            </Button.Default>
          </Link>
          <Link
            download
            href={award?.download.sourceCodeUri ?? '#'}
          >
            <Button.Default
              variant={ButtonVariant.SECONDARY}
              leadingIcon={GlyphIcon.CODE}
              fullWidth={isMobile}
            >
              소스코드 다운로드
            </Button.Default>
          </Link>
        </DStack>
        {/* <HStack spacing={spacingVars.moderate}>
          <Stat
            icon={GlyphIcon.VISIBILITY}
            value={831}
          />
          <Stat
            icon={GlyphIcon.DOWNLOAD}
            value={182}
          />
        </HStack> */}
      </DStack>
    </ContentSection>
  );
}

/*
 * type StatProps = {
 *   icon:  IconName;
 *   value: number;
 * };
 */

/*
 * function Stat(props: StatProps) {
 *   return (
 *     <HStack
 *       className={stat}
 *       spacing={spacingVars.tiny}
 *     >
 *       <Icon
 *         name={props.icon}
 *         size={20}
 *       />
 *       <Typo.Petite weight={Weight.MEDIUM}>{props.value}</Typo.Petite>
 *     </HStack>
 *   );
 * }
 */
