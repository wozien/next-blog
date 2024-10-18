'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ThemeProvider = ({ children }: { children: Readonly<React.ReactNode> }) => {

  return (
    <NextThemeProvider attribute='class' defaultTheme='light' enableSystem>
      {children}
    </NextThemeProvider>
  )
}