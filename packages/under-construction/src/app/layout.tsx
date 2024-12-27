import { ILayoutProps } from '@cottons-kr/react-foundation'
import { ThemeProvider } from 'next-themes'
import { Metadata } from 'next'

import '@tapie-kr/inspire-react/styles.css'
import '@cottons-kr/react-foundation/styles.css'
import '@/styles/app.css'

import Favicon from '@/assets/favicon.png'

export const metadata: Metadata = {
  title: 'TAPIE',
  description: '선린인터넷고등학교 소프트웨어과 웹앱동아리, TAPIE. 리뉴얼된 사이트로 2025년에 돌아오겠습니다.',
  keywords: [
    'TAPIE', 'tapie', '테이피',
    '선린인터넷고등학교', 'sunrin', '선린',
    '소프트웨어과', '동아리',
  ],
}

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko' suppressHydrationWarning>
      <head>
        <link rel='icon' href={Favicon.src} />
      </head>
      <body>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  </>
}
