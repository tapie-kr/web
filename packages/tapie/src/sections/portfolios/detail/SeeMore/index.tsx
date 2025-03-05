import { card } from './styles.css';

import {
  AspectRatio,
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
import Scroll from '@tapie-kr/web-shared/components/Scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/utils/api';

interface Portfolio {
  uuid:         string;
  name:         string;
  slug:         string;
  summary:      string;
  tags:         string[];
  thumbnailUri: string;
  description:  string;
}

interface Props {
  currentUUID?: string;
}

export default function PortfoliosDetailSeeMoreSection(_props: Props) {
  const { currentUUID } = _props;
  const [data, setData] = useState<Portfolio[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    client.get('/projects').then(res => {
      setData(res.data.data as Portfolio[]);
    })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Moderate weight={Weight.MEDIUM}>더 많은 작품</Typo.Moderate>
        <Scroll direction='row'>
          <HStack
            fullWidth
            spacing={spacingVars.micro}
            justify={StackJustify.START}
          >
            {data
              .filter(item => item.uuid !== currentUUID)
              .map(item => (
                <Card
                  key={item.uuid}
                  pending={pending}
                  name={item.name}
                  slug={item.slug}
                  thumbnailUri={item.thumbnailUri}
                />
              ))}
          </HStack>
        </Scroll>
      </VStack>
    </ContentSection>
  );
}

interface CardProps {
  pending:      boolean;
  name:         string;
  slug:         string;
  thumbnailUri: string;
}

function Card(_props: CardProps) {
  const {
    pending,
    name,
    slug,
    thumbnailUri,
  } = _props;

  return (
    <Link href={`/portfolios/${slug}`}>
      <AspectRatio
        className={card}
        width={250}
        ratio={16 / 9}
      >
        {pending
          ? (
            <Skeleton
              fullWidth
              fullHeight
              borderRadius={radiusVars.none}
            />
          )
          : (
            <Image
              fullHeight
              fullWidth
              alt={name ?? ''}
              className={card}
              src={thumbnailUri ?? 'https://images.unsplash.com/photo-1684275299096-1c9f3f7d5e8b'}
            />
          )}
      </AspectRatio>
    </Link>
  );
}
