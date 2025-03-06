'use client';

import {
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  Tag,
  Typo,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import GradientCard from '@/components/portfolio/GradientCard';
import PortfolioSectionLabel from '@/components/portfolio/SectionLabel';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Scroll from '@tapie-kr/web-shared/components/Scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/utils/api';
import RecentProjectCardSkeleton from './skeleton';

interface Project {
  uuid:         string;
  name:         string;
  slug:         string;
  description:  string;
  summary:      string;
  tags:         string[];
  thumbnailUri: string;
}

export default function PortfoliosRecentProjectsSection() {
  const isMobile = useMediaQuery();
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client.get('/projects').then(res => {
      setData(res.data.data as Project[]);
    })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.moderate}
    >
      <VStack
        fullWidth
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <PortfolioSectionLabel isEmphasized>최신 작품</PortfolioSectionLabel>
        <Scroll direction='row'>
          <HStack
            fullWidth
            spacing={spacingVars.petite}
            justify={StackJustify.START}
          >
            {isLoading
              ? (
                <>
                  <RecentProjectCardSkeleton />
                  <RecentProjectCardSkeleton />
                </>
              )
              : (
                <>
                  <RecentProjectCard project={data[0]} />
                  {!isMobile && <RecentProjectCard project={data[1] ?? data[0]} />}
                </>
              )}
          </HStack>
        </Scroll>
      </VStack>
    </ContentSection>
  );
}

type RecentProjectCardProps = {
  project: Project;
};

function RecentProjectCard(props: RecentProjectCardProps) {
  const isMobile = useMediaQuery();

  return (
    <Link
      href={`/portfolios/${props.project.slug}`}
      style={{ width: '100%' }}
    >
      <GradientCard
        height={isMobile ? 200 : 250}
        padding={spacingVars.moderate}
        thumbnailUri={props.project.thumbnailUri}
      >
        <VStack
          fullWidth
          spacing={spacingVars.tiny}
          align={StackAlign.START}
          data-theme='dark'
        >
          {/* <Badge.Default
          leadingIcon={GlyphIcon.TROPHY}
          label='수상작'
        /> */}
          <HStack
            spacing={spacingVars.base}
            align={StackAlign.END}
          >
            <Typo.Medium
              tag={Tag.P}
              weight={Weight.SEMIBOLD}
              color={colorVars.content.emphasized}
            >
              {props.project.name}
            </Typo.Medium>
            <HStack spacing={spacingVars.mini}>
              <Typo.Base
                tag={Tag.SPAN}
                weight={Weight.MEDIUM}
                color={colorVars.content.default}
              >
                {props.project.description}
              </Typo.Base>
              <Icon
                name={GlyphIcon.ARROW_FORWARD}
                size={18}
                color={colorVars.content.default}
              />
            </HStack>
          </HStack>
        </VStack>
      </GradientCard>
    </Link>
  );
}
