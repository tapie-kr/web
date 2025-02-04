import { stat } from './styles.css';

import {
  Button,
  ButtonVariant,
  GlyphIcon,
  HStack,
  Icon,
  type IconName,
  spacingVars,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function PortfoliosDetailDownloadSection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <HStack spacing={spacingVars.medium}>
        <HStack spacing={spacingVars.micro}>
          <Button.Default leadingIcon={GlyphIcon.DOWNLOAD}>발표자료 다운로드</Button.Default>
          <Button.Default
            variant={ButtonVariant.SECONDARY}
            leadingIcon={GlyphIcon.CODE}
          >
            소스코드 다운로드
          </Button.Default>
        </HStack>
        <HStack spacing={spacingVars.moderate}>
          <Stat
            icon={GlyphIcon.VISIBILITY}
            value={831}
          />
          <Stat
            icon={GlyphIcon.DOWNLOAD}
            value={182}
          />
        </HStack>
      </HStack>
    </ContentSection>
  );
}

type StatProps = {
  icon:  IconName;
  value: number;
};

function Stat(props: StatProps) {
  return (
    <HStack
      className={stat}
      spacing={spacingVars.tiny}
    >
      <Icon
        name={props.icon}
        size={20}
      />
      <Typo.Petite weight={Weight.MEDIUM}>{props.value}</Typo.Petite>
    </HStack>
  );
}
