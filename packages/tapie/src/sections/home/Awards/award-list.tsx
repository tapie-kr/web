import * as s from './styles.css';

import { HStack } from '@cottons-kr/react-foundation';
import { spacingVars } from '@tapie-kr/inspire-react';

import { useContext } from 'react';
import awards from '@/../public/_awards.json';
import AwardItem from './award-item';
import { HomeAwardsSectionContext } from './shared';

export default function HomeAwardsSectionAwardList() {
  const { selectedYear } = useContext(HomeAwardsSectionContext);

  const selectedAwards = awards[selectedYear.toString() as keyof typeof awards] as {
    name:  string | string[];
    label: string;
  }[];

  return (
    <HStack
      wrap
      className={s.awardList}
      gap={spacingVars.base}
    >
      {selectedAwards.map((award, i) => (
        <AwardItem
          key={`${selectedYear}-${i}`}
          {...award}
          order={i}
          selectedYear={selectedYear}
        />
      ))}
    </HStack>
  );
}
