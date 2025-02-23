export type LayoutProps = {
  children: React.ReactNode;
};

export type PageParams<P extends string | number | symbol = '', S extends string | number | symbol = ''> = {
  params:       Promise<Record<P, string>>;
  searchParams: Promise<Record<S, string>>;
};
