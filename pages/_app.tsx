import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
