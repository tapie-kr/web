import { project } from './styles.css';

import {
  AspectRatio,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';

export default function ProjectSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <HStack
          key={index}
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
              <Skeleton
                width={100}
                height={20}
                borderRadius={radiusVars.sharp}
              />
              <Skeleton
                width={30}
                height={20}
                borderRadius={radiusVars.sharp}
              />
            </VStack>
          </HStack>
          <Skeleton
            width={28}
            height={28}
          />
        </HStack>
      ))}
    </>
  );
}
