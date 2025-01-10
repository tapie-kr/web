import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color } from '@tapie-kr/inspire-react/variables'

type SectionLabelProps = {
  emphasized?: boolean
  children?: string
}

export default function PortfolioSectionLabel(props: SectionLabelProps) {
  const Text = props.emphasized ? Typo.Moderate : Typo.Petite
  const color = props.emphasized ? Color.Content.Emphasized : Color.Content.Default

  return <>
    <Text tag={Tag.Span} weight={Weight.SEMIBOLD} color={color}>{props.children}</Text>
  </>
}
