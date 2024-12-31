import { ILayoutProps } from '@cottons-kr/react-foundation'
import { ThemeProvider } from 'next-themes'

import Header from '@tapie-kr/web-shared/components/header'
import Footer from '@tapie-kr/web-shared/components/footer'

import '@tapie-kr/inspire-react/styles.css'
import '@cottons-kr/react-foundation/styles.css'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko' suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {props.children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  </>
}
