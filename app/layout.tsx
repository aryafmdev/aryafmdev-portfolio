import type { Metadata } from 'next';
import { Michroma } from 'next/font/google';
import './globals.css';
import { SpaceBackground } from '@/components/SpaceBackground';

const michroma = Michroma({
  variable: '--font-michroma',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AryaFMDev',
  description: 'Portfolio of AryaFMDev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${michroma.variable} antialiased`}>
        <SpaceBackground />
        {children}
      </body>
    </html>
  );
}
