// This is used for layout that should be consistent across all pages like navbar, footer, styles etc.
import { Inter } from 'next/font/google';

import './globals.css';
import VerticalNavbar from './navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children,}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="flex">
        <VerticalNavbar />
        <main className="flex-1 ml-16">{children}</main>
      </div>
    </body>
    </html>
  )
}