'use client';

import { ThemeProvider } from '@teispace/next-themes'

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      {children}
    </ThemeProvider>
  )
}
