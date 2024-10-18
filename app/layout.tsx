import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <header className='flex justify-end p-4'>
            <ThemeSwitch />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
