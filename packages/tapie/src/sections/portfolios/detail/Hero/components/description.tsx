'use client';

import {
  colorVars,
  radiusVars,
  Skeleton,
  Typo,
  TypographyVariant,
  useMediaQuery,
  Weight,
} from '@tapie-kr/inspire-react';

export default function HeroDescription() {
  const isMobile = useMediaQuery();
  const isPending = true;

  if (isPending) {
    return (

      <Skeleton
        width={368}
        height={216}
        borderRadius={radiusVars.default}
      />
    );
  }

  return (
    <Typo
      variant={isMobile ? TypographyVariant.PETITE : TypographyVariant.BASE}
      weight={Weight.MEDIUM}
      color={colorVars.content.default}
    >
      Plock은 사용자가 하루 일정을 블록 형태로 손쉽게 계획하고 관리할 수 있도록
      도와주는 혁신적인 일정 관리 애플리케이션입니다. 단순한 일정 관리 기능을
      넘어, 사용자는 자신의 필요에 맞는 맞춤형 가상 비서를 추가해 더욱
      스마트하게 일상을 관리할 수 있습니다. 이 앱은 직관적이고 유연한 사용자
      경험을 제공하기 위해 React를 사용하여 프론트엔드를 구현했으며, NestJS를
      기반으로 한 백엔드 기술을 통해 안정적이고 확장 가능한 서버 구조를
      구축했습니다.
    </Typo>
  );
}
