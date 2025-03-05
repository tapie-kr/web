import { historyItem } from './styles.css';

import {
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

import Link from 'next/link';
import { type History, type HistoryItem } from '@/app/members/[id]/page';

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

export default function MembersDetailHistorySectionList(_props: History) {
  return (
    <HStack
      fullWidth
      spacing={spacingVars.moderate}
      align={StackAlign.START}
    >
      <Typo.Moderate weight={Weight.MEDIUM}>{_props.year}</Typo.Moderate>
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        {_props.items.map((event: HistoryItem) => (
          <Item
            key={event.label}
            {...event}
          />
        ))}
      </VStack>
    </HStack>
  );
}

interface Props extends HistoryItem {
  isImportant?: boolean;
}

function Item(props: Props) {
  return (
    <Link href={props.internalLink?.includes('internal://') ? props.internalLink.replace('internal:/', '') : props.internalLink ?? ''}>
      <HStack
        className={historyItem}
        spacing={spacingVars.petite}
      >
        <Typo.Petite>{props.date}</Typo.Petite>
        <Typo.Base
          color={props.isImportant ? colorVars.content.emphasized : undefined}
          weight={props.isImportant ? Weight.BOLD : undefined}
        >
          {props.label}
        </Typo.Base>
        {props.internalLink && (
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={16}
          />
        )}
      </HStack>
    </Link>
  );
}
