import {
  GlyphIcon,
  Grid,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function PortfoliosDetailTechnologySection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <HStack
        spacing={spacingVars.jumbo}
        wrap={StackWrap.WRAP}
        align={StackAlign.START}
        justify={StackJustify.START}
      >
        <List title='개발' />
        <List title='운영' />
        <List title='기타' />
      </HStack>
    </ContentSection>
  );
}

type ListProps = { title: string };

function List(props: ListProps) {
  return (
    <VStack
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <Typo.Moderate weight={Weight.SEMIBOLD}>{props.title}</Typo.Moderate>

      <Grid
        rowGap={spacingVars.base}
        columnGap={spacingVars.moderate}
        columnCount={3}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <HStack
            key={index}
            spacing={spacingVars.tiny}
          >
            <Icon
              name={GlyphIcon.DEFAULT}
              size={28}
            />

            <Typo.Base weight={Weight.MEDIUM}>기술 이름</Typo.Base>
          </HStack>
        ))}
      </Grid>
    </VStack>
  );
}
