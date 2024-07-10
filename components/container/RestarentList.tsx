'use client';

import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';

import Hotel1 from '@/images/hotels/hotel1.jpeg';
import Hotel2 from '@/images/hotels/hotel2.jpg';
import Hotel3 from '@/images/hotels/hotel3.jpeg';
import Hotel4 from '@/images/hotels/hotel4.jpeg';
import Hotel5 from '@/images/hotels/hotel5.jpeg';
import Hotel6 from '@/images/hotels/hotel6.jpeg';
import Hotel7 from '@/images/hotels/hotel7.jpeg';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function RestarentList() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <section className="mt-10">
      <h1 className="font-semibold text-2xl">Popular Restarents</h1>
      <div className="mt-6 flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-3xl px-6 gap-1">
              Sort <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Sort</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Price low to high
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              Fast delivery
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Customer reviews
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="rounded-3xl px-6" variant={'outline'}>
          Offers
        </Button>
        <Button className="rounded-3xl px-6" variant={'outline'}>
          Fast delivery
        </Button>
        <Button className="rounded-3xl px-6" variant={'outline'}>
          Poularity
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className={'p0'}>
          <Link href={`/restarents/Mc Donald's`}>
            <CardContent className="p-0">
              <Image src={Hotel1} alt="hotel 1" className="rounded-sm" />
            </CardContent>
            <CardFooter className="py-4 px-6 flex flex-col items-start">
              <p className="flex gap-1 items-center">
                <span className="text-sm text-gray-600">4.3</span>
                <StarFilledIcon className="text-yellow-500" />
                <StarFilledIcon className="text-yellow-500" />
                <StarFilledIcon className="text-yellow-500" />
                <StarFilledIcon className="text-yellow-500" />
                <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
              </p>
              <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
              <span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
              <span className="text-gray-500 text-md font-light">Chennai</span>
            </CardFooter>
          </Link>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel7} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel4} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel2} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel4} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel5} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel6} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel7} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel1} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel2} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel3} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel4} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel5} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
        <Card className={'p0'}>
          <CardContent className="p-0">
            <Image src={Hotel6} alt="hotel 1" className="rounded-sm" />
          </CardContent>
          <CardFooter className="py-4 px-6 flex flex-col items-start">
            <p className="flex gap-1 items-center">
              <span className="text-sm text-gray-600">4.3</span>
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarFilledIcon className="text-yellow-500" />
              <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
            </p>
            <h2 className="text-xl font-semibold mt-2">Mc Donald's</h2>
<span className="text-gray-500 text-md font-light mt-1">Chineses, thai</span>
            <span className="text-gray-500 text-md font-light">Chennai</span>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
