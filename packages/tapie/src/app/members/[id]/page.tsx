'use client';

import { container, content, profileImage } from './page.css';

import {
  AspectRatio,
  Box,
  Image,
  radiusVars,
  Skeleton,
  spacingVars,
  Stack,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';

import { type MemberUnit } from '@tapie-kr/api-client/enum';
import { notFound, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Hero from '@/sections/members/detail/Hero';
import History from '@/sections/members/detail/History';
import Projects from '@/sections/members/detail/Projects';
import RepresentativeAward from '@/sections/members/detail/RepresentativeAward';
import RepresentativePortfolio from '@/sections/members/detail/RepresentativePortfolio';
import Skills from '@/sections/members/detail/Skills';
import { client } from '@/utils/api';

export interface Link {
  name: string;
  url:  string;
}

export interface RepresentProject {
  uuid?:         string;
  name?:         string;
  description?:  string;
  thumbnailUri?: string;
  slug?:         string;
}

export interface ProjectReference {
  name: string;
  uuid: string;
  slug: string;
}

export interface RepresentAward {
  name?:         string;
  grade?:        number;
  gradeLabel?:   string;
  organization?: string;
  project?:      ProjectReference;
}

export interface Skill {
  icon?:     string;
  label?:    string;
  verified?: boolean;
  learning?: boolean;
}

export interface Project {
  uuid?:         string;
  name?:         string;
  role?:         string;
  thumbnailUri?: string;
  slug?:         string;
}

export interface HistoryItem {
  date:         string;
  label:        string;
  internalLink: string | null;
}

export interface History {
  year:  string;
  items: HistoryItem[];
}

export interface MemberDetail {
  uuid:             string;
  name:             string;
  studentID:        number;
  username:         string;
  role:             string;
  unit:             MemberUnit;
  generation:       number;
  profileUri:       string;
  links:            Link[];
  representProject: RepresentProject;
  representAward:   RepresentAward;
  skills:           Skill[];
  projects:         Project[];
  history:          History[];
}

export default function MembersDetailPage() {
  const [data, setData] = useState<MemberDetail>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  useEffect(() => {
    client.get(`/members/${id}/`).then(res => {
      setData(res.data.data);

      setIsPending(false);
    })
      .catch(() => {
        // if (err.response.status === 404) {
        setError(true);

        // }
      });
  }, []);

  if (error) {
    notFound();
  }

  return (
    <Stack
      fullWidth
      className={container}
      spacing={spacingVars.medium}
      justify={StackJustify.CENTER}
      align={StackAlign.START}
    >
      <AspectRatio
        ratio={1}
        width={130}
      >
        <Box
          className={profileImage}
        >
          {isPending
            ? (
              <Skeleton
                fullWidth
                fullHeight
                borderRadius={radiusVars.full}
              />
            )
            : (
              <Image
                fullHeight
                fullWidth
                src={data?.profileUri ?? ''}
                alt={data?.name ?? ''}
                className={profileImage}
              />
            )}
        </Box>
      </AspectRatio>
      <VStack
        fullWidth
        className={content}
      >
        <Hero
          pending={isPending}
          {...data}
        />
        {data?.representProject && Object.keys(data?.representProject).length > 0 && (
          <RepresentativePortfolio
            pending={isPending}
            {...data?.representProject}
          />
        )}
        {data?.representAward && Object.keys(data?.representAward).length > 0 && (
          <RepresentativeAward
            pending={isPending}
            {...data?.representAward}
          />
        )}
        {data?.skills && data.skills.length > 0 && (
          <Skills
            pending={isPending}
            skills={data.skills}
          />
        )}
        {data?.projects && data.projects.length > 0 && (
          <Projects
            pending={isPending}
            projects={data?.projects}
          />
        )}
        {data?.history && data.history.length > 0 && (
          <History
            pending={isPending}
            history={data?.history}
          />
        )}
      </VStack>
    </Stack>
  );
}
