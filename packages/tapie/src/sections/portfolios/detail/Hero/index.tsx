import { introContainer } from './styles.css';

import PortfolioCarousel from '@/components/portfolio/Carousel';

import {
  Badge,
  BadgeTheme,
  BrandIcon,
  Button,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  Stack,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function PortfoliosDetailHeroSection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <Stack
        spacing={spacingVars.base}
        align={StackAlign.START}
        fullWidth
      >
        <PortfolioCarousel />
        <VStack
          className={introContainer}
          align={StackAlign.START}
          justify={StackJustify.BETWEEN}
          fullHeight
        >
          <VStack
            spacing={spacingVars.moderate}
            align={StackAlign.START}
          >
            <VStack
              spacing={spacingVars.base}
              align={StackAlign.START}
            >
              <VStack
                spacing={spacingVars.tiny}
                align={StackAlign.START}
              >
                <Typo.Large weight={Weight.BOLD}>Plock</Typo.Large>
                <Typo.Moderate
                  weight={Weight.SEMIBOLD}
                  color={colorVars.content.default}
                >
                  함께하는 사이드프로젝트를 위하여
                </Typo.Moderate>
              </VStack>
              <HStack spacing={spacingVars.tiny}>
                <Badge.Default
                  theme={BadgeTheme.RED}
                  leadingIcon={GlyphIcon.TROPHY}
                  label='수상작'
                />
                <Badge.Default label='앱' />
                <Badge.Default label='출품작' />
                <Badge.Default label='해커톤' />
              </HStack>
            </VStack>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              Plock은 사용자가 하루 일정을 블록 형태로 손쉽게 계획하고 관리할 수 있도록 도와주는
              혁신적인 일정 관리 애플리케이션입니다. 단순한 일정 관리 기능을 넘어, 사용자는 자신의
              필요에 맞는 맞춤형 가상 비서를 추가해 더욱 스마트하게 일상을 관리할 수 있습니다. 이
              앱은 직관적이고 유연한 사용자 경험을 제공하기 위해 React를 사용하여 프론트엔드를
              구현했으며, NestJS를 기반으로 한 백엔드 기술을 통해 안정적이고 확장 가능한 서버 구조를
              구축했습니다.
            </Typo.Base>
          </VStack>
          <VStack
            spacing={spacingVars.petite}
            align={StackAlign.START}
            fullWidth
          >
            <HStack spacing={spacingVars.tiny}>
              <Icon name={BrandIcon.GITHUB} />
              <Typo.Petite weight={Weight.SEMIBOLD}>https://github.com/jijiwon</Typo.Petite>
            </HStack>
            <HStack
              fullWidth
              spacing={spacingVars.micro}
            >
              <Button.Default
                leadingIcon={GlyphIcon.LINK}
                fullWidth
              >
                프로젝트 바로가기
              </Button.Default>
              <Button.Icon
                variant={ButtonVariant.SECONDARY}
                icon={GlyphIcon.SHARE}
              />
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </ContentSection>
  );
}
