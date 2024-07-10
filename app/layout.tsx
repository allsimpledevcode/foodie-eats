import Image from 'next/image';
import './globals.css';

import { User } from './user';
import Logo from '@/images/logo.svg';
import {
  RocketIcon,
  CrumpledPaperIcon,
  CardStackIcon
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { GlobalSearch } from '@/components/container/GlobalSearch';
import Link from "next/link"

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
            <Link href={"/"}>
              <Image src={Logo} width={200} height={200} alt="Fooedie eats" />
            </Link>
            <div className="flex items-center gap-6">
              <nav className="flex gap-8">
                <GlobalSearch />
                <Link href={"/offers-for-you"} className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center">
                  <CrumpledPaperIcon />
                  Offers
                </Link>
              </nav>
              <User />
              <Button
                variant={'ghost'}
                className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center"
              >
                <CardStackIcon />
                Cart (0)
              </Button>
            </div>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="mt-10 bg-gray-900 py-12">
          <div className="container flex justify-between">
            <Image src={Logo} width={200} height={200} alt="Fooedie eats"/>
            <div className='flex gap-14'>
              <div>
                <ul>
                  <li>
                    <a className="text-gray-400 text-md">FAQ</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Privacy policy</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Help & Support</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Term & Conditions</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a className="text-gray-400 text-md">FAQ</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Privacy policy</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Help & Support</a>
                  </li>
                  <li className="mt-4">
                    <a className="text-gray-400 text-md">Term & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
