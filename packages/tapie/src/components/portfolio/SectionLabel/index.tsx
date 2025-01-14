import { colorVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react'

type SectionLabelProps = {
  emphasized?: boolean
  children?: string
}

export default function PortfolioSectionLabel(props: SectionLabelProps) {
  const Text = props.emphasized ? Typo.Moderate : Typo.Petite
  const color = props.emphasized ? colorVars.content.emphasized : colorVars.content.default

  return <>
    <Text tag={Tag.H2} weight={Weight.SEMIBOLD} color={color}>{props.children}</Text>
  </>
}
