import { InspireProvider } from '@tapie-kr/inspire-react/provider';

import { ThemeProvider } from 'next-themes';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang='ko'
    >
      <body>
        <ThemeProvider>
          <InspireProvider>{props.children}</InspireProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
