import { project, projectContainer } from './styles.css';

import {
  AspectRatio,
  Box,
  Button,
  ButtonSize,
  colorVars,
  GlyphIcon,
  Grid,
  HStack,
  Image,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Link from 'next/link';
import { type Project as ProjectType } from '@/app/members/[id]/page';
import ProjectSkeleton from './skeleton';

interface Project {
  pending:   boolean;
  projects?: ProjectType[];
}

export default function MembersDetailProjectsSection(_props: Project) {
  const { pending, projects } = _props;

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
          {pending
            ?           <ProjectSkeleton />
            : projects?.map((project: ProjectType) => (
              <Project
                key={project.name}
                pending={pending}
                {...project}
              />
            ))}
        </Grid>
      </VStack>
    </ContentSection>
  );
}

interface ProjectProps extends ProjectType {
  pending: boolean;
}

function Project(props: ProjectProps) {
  return (
    <Link href={`/portfolios/${props.slug}`}>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
        className={project}
      >
        <HStack spacing={spacingVars.base}>
          <Box className={projectContainer}>
            <AspectRatio
              ratio={16 / 9}
              width={150}
            >
              {props.pending
                ?           (
                  <Skeleton
                    fullWidth
                    fullHeight
                    borderRadius={radiusVars.default}
                  />
                )
                : (
                  <Image
                    src={props.thumbnailUri ?? ''}
                    alt='thumbnail'
                    className={project}
                  />
                )}
            </AspectRatio>
          </Box>
          <VStack
            spacing={spacingVars.optical}
            align={StackAlign.START}
          >
            <Typo.Base weight={Weight.SEMIBOLD}>{props.name}</Typo.Base>
            <Typo.Petite
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              {props.role}
            </Typo.Petite>
          </VStack>
        </HStack>
        <Button.Icon
          icon={GlyphIcon.ARROW_FORWARD}
          size={ButtonSize.SMALL}
        />
      </HStack>
    </Link>
  );
}
