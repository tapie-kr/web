import {
  Button,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
} from '@tapie-kr/inspire-react';

import Link from 'next/link';
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

interface Props extends Pick<PortfolioDetail, 'hyperlink'> {
  pending: boolean;
}

export default function HeroActions(_props: Props) {
  const { pending, hyperlink } = _props;

  if (pending) {
    return (
      <HStack
        fullWidth
        spacing={spacingVars.micro}
      >
        <Skeleton
          fullWidth
          height={48}
          borderRadius={radiusVars.default}
        />
      </HStack>
    );
  }

  if (!hyperlink) {
    return null;
  }

  return (
    <Link
      href={hyperlink ?? ''}
      style={{ width: '100%' }}
    >
      <HStack
        fullWidth
        spacing={spacingVars.micro}
      >
        <Button.Default
          fullWidth
          leadingIcon={GlyphIcon.LINK}
        >
          프로젝트 바로가기
        </Button.Default>
        {/* <Button.Icon
          variant={ButtonVariant.SECONDARY}
          icon={GlyphIcon.SHARE}
        /> */}
      </HStack>
    </Link>
  );
}
