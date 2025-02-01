declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

type SVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type Children = React.ReactNode;

type ChildrenProp = { children?: Children };
