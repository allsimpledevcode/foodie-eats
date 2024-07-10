import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Category1 from '@/images/food images/cat1.png';
import Category2 from '@/images/food images/cat2.jpeg';
import Category3 from '@/images/food images/cat3.jpeg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Restarent({ params }: { params: { slug: string } }) {
  const url = decodeURI(params?.slug);
  return (
    <section className="mt-8 max-w-[780px] m-auto">
      <div>
        <h1 className="font-semibold text-2xl">{url}</h1>
        <p className="flex gap-1 items-center">
          <span className="text-sm text-gray-600">4.3</span>
          <StarFilledIcon className="text-yellow-500" />
          <StarFilledIcon className="text-yellow-500" />
          <StarFilledIcon className="text-yellow-500" />
          <StarFilledIcon className="text-yellow-500" />
          <StarIcon /> <span className="text-sm text-gray-600">(1200)</span>
        </p>
        <p className="text-gray-500 text-md font-light mt-1">Chineses, thai</p>
        <span className="text-gray-500 text-md font-light">Chennai</span>
      </div>
      <hr className="mt-6 mb-6 border-gray-200" />
      <div className="flex gap-4 items-center mt-8">
        <div className="flex items-center space-x-1">
          <Switch id="airplane-mode" />
          <Label htmlFor="non-veg-mode" className="text-green-600">
            Veg
          </Label>
        </div>
        <div className="flex items-center space-x-1">
          <Switch id="airplane-mode" />
          <Label htmlFor="non-veg-mode" className="text-red-600">
            Non-Veg
          </Label>
        </div>
      </div>
      <div className="mt-6">
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3 className="font-semibold text-lg text-slate-800">
                Recommended
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category2} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Mutton Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category3} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken 65 Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h3 className="font-semibold text-lg text-slate-800">
                Veg Starters
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Mutton Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken 65 Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h3 className="font-semibold text-lg text-slate-800">
                Non-Veg Starters
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Mutton Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div>
                  <Image src={Category1} alt="Category 1" width={120} />
                </div>
                <div className="ml-2 flex-1">
                  <h1 className="text-lg font-semibold">Chicken 65 Biryani</h1>
                  <p className="text-slate-500">
                    Chiecken, Raitha, chicken 65 and contains sweets
                  </p>
                </div>
                <div>
                  <Button
                    className="border-green-400 text-green-500 py-2 px-6 h-8"
                    variant={'outline'}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Restarent;
