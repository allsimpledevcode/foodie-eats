import Image from 'next/image';
import './globals.css';

import { User } from './user';
import Logo from '@/images/logo.svg';
import {
  HomeIcon,
  RocketIcon,
  CrumpledPaperIcon,
  CardStackIcon
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body>
        <header className="bg-gray-50 py-6">
          <div className="container flex justify-between">
            <div>
              <Image src={Logo} width={200} height={200} alt="Fooedie eats" />
            </div>
            <div className="flex items-center gap-6">
              <nav className="flex gap-8">
                <a className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center">
                  <HomeIcon />
                  Home
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center">
                  <RocketIcon />
                  Restarents
                </a>
                <a className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center">
                  <CrumpledPaperIcon />
                  Offers
                </a>
              </nav>
              <User />
              <Button variant={'outline'} className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center">
                <CardStackIcon />
                Cart
                (0)
              </Button>
            </div>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="container">Footer column</footer>
      </body>
    </html>
  );
}
