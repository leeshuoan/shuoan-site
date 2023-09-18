import '@/styles/globals.css'
import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
}, [])

  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
