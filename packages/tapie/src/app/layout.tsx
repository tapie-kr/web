import '@cottons-kr/react-foundation/styles.css';

import { type ILayoutProps, Spacer } from '@cottons-kr/react-foundation';

import { InspireProvider } from '@tapie-kr/inspire-react/provider';

import Favicon from '@tapie-kr/web-shared/assets/favicon.png';

import Footer from '@tapie-kr/web-shared/layout/Footer';

import Header from '@tapie-kr/web-shared/layout/Header';

import { type Metadata, type Viewport } from 'next';

import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title:       'TAPIE',
  description: '선린인터넷고등학교 소프트웨어과 웹앱동아리, TAPIE',
  keywords:    [
    'TAPIE',
    'tapie',
    '테이피',
    '선린인터넷고등학교',
    'sunrin',
    '선린',
    '소프트웨어과',
    '동아리',
  ],
  openGraph: {
    type:        'website',
    url:         'https://tapie.kr',
    title:       'TAPIE',
    description: '선린인터넷고등학교 소프트웨어과 웹앱동아리, TAPIE',
    locale:      'ko_KR',
    siteName:    'TAPIE',
    images:      [
      { url: 'https://raw.githubusercontent.com/tapie-kr/.github/assets/cover.png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      color: '#050505',
      media: '(prefers-color-scheme: light)',
    },
    {
      color: '#FAFAFA',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout(props: ILayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang='ko'
    >
      <head>
        <link
          rel='icon'
          type='image/png'
          href={Favicon.src}
        />
      </head>

      <body>
        <ThemeProvider>
          <InspireProvider>
            <Header />
            <Spacer height='76px' />
            {props.children}
            <Footer />
          </InspireProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
