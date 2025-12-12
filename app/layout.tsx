import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'hello',
  description: 'Tiny hello container (local/UTC/IP debug)',
  icons: [
    { rel: 'icon', url: '/favicon.svg' },
    { rel: 'shortcut icon', url: '/favicon.svg' }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

