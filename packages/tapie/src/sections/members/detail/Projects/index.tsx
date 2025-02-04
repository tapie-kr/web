import { project } from './styles.css';

import { AspectRatio, Button, ButtonSize, colorVars, GlyphIcon, Grid, HStack, radiusVars, Skeleton, spacingVars, StackAlign, StackJustify, Typo, VStack, Weight } from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function MembersDetailProjectsSection() {
  return (
    <ContentSection
      verticalPadding={spacingVars.moderate}
      horizontalPadding={spacingVars.none}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Petite
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >
          참여 작품
        </Typo.Petite>
        <Grid
          fullWidth
          columnCount={2}
          gap={spacingVars.micro}
        >
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </Grid>
      </VStack>
    </ContentSection>
  );
}

function Project() {
  return (
    <HStack
      fullWidth
      justify={StackJustify.BETWEEN}
      className={project}
    >
      <HStack spacing={spacingVars.base}>
        <AspectRatio
          ratio={16 / 9}
          width={150}
        >
          <Skeleton
            fullWidth
            fullHeight
            borderRadius={radiusVars.default}
          />
        </AspectRatio>
        <VStack
          spacing={spacingVars.optical}
          align={StackAlign.START}
        >
          <Typo.Base weight={Weight.SEMIBOLD}>프로젝트 이름</Typo.Base>
          <Typo.Petite
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
          >역할
          </Typo.Petite>
        </VStack>
      </HStack>
      <Button.Icon
        icon={GlyphIcon.ARROW_FORWARD}
        size={ButtonSize.SMALL}
      />
    </HStack>
  );
}
