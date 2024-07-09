import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Banner from '@/images/banner.png';
import Banner1 from '@/images/banner1.png';
import Banner2 from '@/images/banner2.png';

import Category1 from '@/images/food images/cat1.png';
import Category2 from '@/images/food images/cat2.jpeg';
import Category3 from '@/images/food images/cat3.jpeg';
import Category4 from '@/images/food images/cat4.jpeg';
import Category5 from '@/images/food images/cat5.jpeg';
import Category6 from '@/images/food images/cat6.jpeg';

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

import Hotel1 from "@/images/hotels/hotel1.jpeg";
import Hotel2 from "@/images/hotels/hotel2.jpg";
import Hotel3 from "@/images/hotels/hotel3.jpeg";
import Hotel4 from "@/images/hotels/hotel4.jpeg";
import Hotel5 from "@/images/hotels/hotel5.jpeg";
import Hotel6 from "@/images/hotels/hotel6.jpeg";
import Hotel7 from "@/images/hotels/hotel7.jpeg";


import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export function HomePage() {
  return (
    <>
      {/* Banner section  */}
      <section className="mt-6">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Image
                src={Banner}
                width={1400}
                height={380}
                alt="Offers 1"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Banner1}
                width={1400}
                height={380}
                alt="Offers 2"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Banner2}
                width={1400}
                height={380}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* Category section  */}
      <section className="mt-10">
        <h1 className="font-semibold text-2xl">Pick what you love ❤️</h1>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category1}
                width={160}
                height={160}
                alt="Offers 1"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category2}
                width={160}
                height={160}
                alt="Offers 2"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category3}
                width={160}
                height={160}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category4}
                width={160}
                height={160}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category5}
                width={160}
                height={160}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category6}
                width={160}
                height={160}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category1}
                width={160}
                height={160}
                alt="Offers 1"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category2}
                width={160}
                height={160}
                alt="Offers 2"
                className="rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/6">
              <Image
                src={Category3}
                width={160}
                height={160}
                alt="Offers 3"
                className="rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* Restarent section section  */}
      <section className="mt-10">
        <h1 className="font-semibold text-2xl">Popular Restarents</h1>
        <div className="flex mt-6 gap-8 flex-wrap">
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel1} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel7} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel4} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel2} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel4} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel5} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel6} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel7} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel1} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel2} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel3} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel4} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel5} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
          <Card className={'w-[23%] p0'}>
            <CardContent className='p-0'>
                <Image src={Hotel6} width={305} height={140} alt='hotel 1' className='rounded-sm'/>
            </CardContent>
            <CardFooter className='py-4 px-6 flex flex-col items-start'>
              <p className='flex gap-1 items-center'><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarFilledIcon className='text-yellow-500'/><StarIcon/> <span className='text-sm text-gray-600'>(1200)</span></p>
              <h2 className='text-xl font-semibold mt-2'>Mc Donald's</h2>
              <span className='text-gray-500 text-md font-light'>Chennai</span>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
