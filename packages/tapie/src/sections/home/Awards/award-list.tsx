import * as s from './styles.css';

import { HStack } from '@cottons-kr/react-foundation';

import { spacingVars } from '@tapie-kr/inspire-react';
import awards from '@/../public/_awards.json';
import AwardItem from './award-item';

export default function HomeAwardsSectionAwardList() {
  return (
    <HStack
      wrap
      className={s.awardList}
      gap={spacingVars.base}
    >
      {awards.map((award, i) => (
        <AwardItem
          key={i}
          {...award}
          order={i}
        />
      ))}
    </HStack>
  );
}
