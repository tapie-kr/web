import { historyItem } from './styles.css';

import {
  Badge,
  BadgeSize,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

/*
 * type Event = {
 *   month:        number;
 *   day:          number;
 *   title:        string;
 *   isImportant?: boolean;
 * };
 */

/*
 * type MembersDetailHistorySectionListProps = {
 *   year:   number;
 *   events: Array<Event>;
 * };
 */

export default function MembersDetailHistorySectionList() {
  return (
    <HStack
      fullWidth
      spacing={spacingVars.moderate}
      align={StackAlign.START}
    >
      <Typo.Moderate weight={Weight.MEDIUM}>2025</Typo.Moderate>
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Item />
        <Item />
        <Item isImportant />
        <Item />
      </VStack>
    </HStack>
  );
}

type ItemProps = {
  isImportant?: boolean;
};

function Item(props: ItemProps) {
  return (
    <HStack
      className={historyItem}
      spacing={spacingVars.petite}
    >
      <Typo.Petite>08-31</Typo.Petite>
      <Typo.Base
        color={props.isImportant ? colorVars.content.emphasized : undefined}
        weight={props.isImportant ? Weight.BOLD : undefined}
      >무슨무슨대회
      </Typo.Base>
      {props.isImportant && (
        <Badge.Default
          theme={BadgeTheme.RED}
          size={BadgeSize.SMALL}
          leadingIcon={GlyphIcon.ASTERISK}
          label='주요'
        />
      )}
      <Icon
        name={GlyphIcon.ARROW_FORWARD}
        size={16}
      />
    </HStack>
  );
}
