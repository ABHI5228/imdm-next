'use client';
 

import { ThemeProvider } from 'next-themes'

export default function Provider({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className=''>
      {children}
        </div>
    </ThemeProvider>
  )
}