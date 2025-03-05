'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Award from '@/sections/portfolios/detail/Award';
import Download from '@/sections/portfolios/detail/Download';
import Hero from '@/sections/portfolios/detail/Hero';
import SeeMore from '@/sections/portfolios/detail/SeeMore';
import Team from '@/sections/portfolios/detail/Team';
import Technology from '@/sections/portfolios/detail/Technology';
import { client } from '@/utils/api';

export interface User {
  uuid?:       string;
  name?:       string;
  role?:       string;
  profileUri?: string;
  username?:   string;
}

export interface Link {
  icon: string;
  url:  string;
}

export interface SkillItem {
  icon:  string;
  label: string;
}

export interface SkillCategory {
  name:  string;
  items: SkillItem[];
}

export interface AwardDownload {
  presentationUri: string;
  sourceCodeUri:   string;
}

export interface Award {
  name:         string;
  grade:        number;
  gradeLabel:   string;
  organization: string;
  download:     AwardDownload;
}

export interface PortfolioDetail {
  uuid?:         string;
  name?:         string;
  slug?:         string;
  summary?:      string;
  tags?:         string[];
  thumbnailUri?: string;
  description?:  string;
  links?:        Link[];
  hyperlink?:    string;
  users?:        User[];
  skills?:       SkillCategory[];
  award?:        Award;
}

export default function PortfoliosDetailPage() {
  const [data, setData] = useState<PortfolioDetail>();
  const [isPending, setIsPending] = useState(true);
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  useEffect(() => {
    client.get(`/projects/${id}`).then(res => {
      setData(res.data.data as PortfolioDetail);
    })
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  // notFound();

  return (
    <>
      <Hero
        pending={isPending}
        {...data}
      />
      <Team
        pending={isPending}
        {...data}
      />
      <Technology
        pending={isPending}
        {...data}
      />
      <Award
        pending={isPending}
        {...data}
      />
      <Download
        pending={isPending}
        {...data}
      />
      <SeeMore />
    </>
  );
}
