'use client';

import { Chip, HStack, spacingVars } from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';

import { useState } from 'react';

const options = {
  all:       '전체',
  web:       '웹',
  app:       '앱',
  design:    '디자인',
  hackathon: '해커톤',
  winner:    '수상작',
  entry:     '출품작',
  others:    '기타',
};

export default function PortfolioProjectsSectionFilter() {
  const [current, setCurrent] = useState('all');

  return (
    <Scroll direction='row'>
      <HStack spacing={spacingVars.micro}>
        {Object.entries(options).map(([key, label]) => (
          <FilterOption
            key={key}
            label={label}
            isActive={key === current}
            onClick={() => setCurrent(key)}
          />
        ))}
      </HStack>
    </Scroll>
  );
}

type FilterOptionProps = {
  label:     string;
  isActive?: boolean;
  onClick?:  () => void;
};

function FilterOption(props: FilterOptionProps) {
  return (
    <Chip
      isActive={props.isActive}
      onClick={props.onClick}
    >
      {props.label}
    </Chip>
  );
}
