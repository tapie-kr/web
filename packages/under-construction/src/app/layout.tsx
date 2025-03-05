import '@tapie-kr/inspire-react/styles.css';
import '@cottons-kr/react-foundation/styles.css';
import '@/styles/app.css';

import { type ILayoutProps } from '@cottons-kr/react-foundation';

import { type Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'TAPIE',
  description:
    '선린인터넷고등학교 소프트웨어과 웹앱동아리, TAPIE. 현재 사이트 준비 중입니다.',
  keywords: [
    'TAPIE',
    'tapie',
    '테이피',
    '선린인터넷고등학교',
    'sunrin',
    '선린',
    '소프트웨어과',
    '동아리',
  ],
};

export default function RootLayout(props: ILayoutProps) {
  return (
    <html
      suppressHydrationWarning
      lang='ko'
    >
      <body>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
