import { colorVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react';

type SectionLabelProps = {
  isEmphasized?: boolean;
  children?: string;
};

export default function PortfolioSectionLabel(props: SectionLabelProps) {
  const Text = props.isEmphasized ? Typo.Moderate : Typo.Petite;
  const color = props.isEmphasized ? colorVars.content.emphasized : colorVars.content.default;

  return (
    <Text
      tag={Tag.H2}
      weight={Weight.SEMIBOLD}
      color={color}
    >
      {props.children}
    </Text>
  );
}
