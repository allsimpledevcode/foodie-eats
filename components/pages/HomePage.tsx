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

import Image from 'next/image';

import {RestarentList } from "@/components/container/RestarentList";

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
      <RestarentList />
    </>
  );
}
