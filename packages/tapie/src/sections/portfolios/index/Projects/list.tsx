'use client';

import { Grid, spacingVars } from '@tapie-kr/inspire-react';
import PortfolioItem from '@/components/portfolio/Item';
import PortfolioItemSkeleton from '@/components/portfolio/Item/skeleton';

import { Temporal } from '@js-temporal/polyfill';
import { useEffect, useState } from 'react';
import { client } from '@/utils/api';

interface Project {
  uuid:         string;
  name:         string;
  slug:         string;
  description:  string;
  summary:      string;
  tags:         string[];
  thumbnailUri: string;
}

export default function PortfolioProjectsSectionList() {
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

  return isLoading
    ? <PortfolioItemSkeleton />
    : (
      <Grid
        fullWidth
        rowGap={spacingVars.base}
        columnGap={spacingVars.petite}
        columnCount={2}
      >
        {data.map(project => (
          <PortfolioItem
            key={project.uuid}
            name={project.name}
            catchPhrase={project.summary}
            thumbnailUri={project.thumbnailUri}
            releasedAt={Temporal.Now.plainDateTimeISO()}
            portfolioUri={`/portfolios/${project.slug}`}
          />
        ))}
      </Grid>
    );
}
