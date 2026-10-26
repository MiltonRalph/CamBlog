import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import pic23 from '../assets/pic23.jpg';
import img1 from '../assets/img1.jpg';
import pic25 from '../assets/pic25.jpg';
import img22 from '../assets/img22.jpg';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { BiSolidHot } from 'react-icons/bi';

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const images = [img22, pic23, pic25, img1];

  const heading = [
    'Exercise Helps Reduce Stress',
    'Will AI Dominate Tech World',
    'Finally Metaverse Is Here',
    'Technology Adoption Gets Better',
  ];

  const date = [
    'July, 19, 2019',
    'October, 08, 2021',
    'March, 12, 2020',
    'August, 23, 2022',
  ];

  const badge = ['Mental Health', 'Personal Growth', 'Lifestyle', 'Personal Growth'];
  const lead = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic. Facere tempora minus alias illum!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita vel a voluptates eligendi placeat in officiis!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur a labore?',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic. Facere tempora minus alias illum!',
  ];

  const badgeClass = [
    'absolute inline-flex items-center rounded-full px-3 py-1 text-xs bg-healthColor text-bgColor',
    'absolute inline-flex items-center rounded-full px-3 py-1 text-xs bg-selfColor text-bgColor',
    'absolute inline-flex items-center rounded-full px-3 py-1 text-xs bg-lifeColor text-bgColor',
    'absolute inline-flex items-center rounded-full px-3 py-1 text-xs bg-selfColor text-bgColor',
  ];
  const link = ['./Posts/Post1', './Posts/Post2', './Posts/Post5', './Posts/Post6']
  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full '
      className='lg:w-3/4 relative'>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className='relative flex items-center justify-center p-28 overflow-hidden md:p-40 lg:p-52 xl:p-60'>
                  <Link to={link[index]} className='absolute w-full h-full rounded-md'>
                  <img
                    src={image}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-md'
                  />
                  <div className='z-10 absolute left-4 bottom-2 md:bottom-8 flex flex-col items-left text-lightColor'>
                    <CardHeader className='pl-0'>
                      <h4 className={badgeClass[index]}>
                        {}
                        <BiSolidHot className='w-5 h-5 mr-1' />
                        {badge[index]}
                      </h4>
                      <h3 className='relative top-7 font-bold text-lg text-bgColor md:text-xl'>
                        {heading[index]}
                      </h3>
                    </CardHeader>
                    <CardDescription className='text-xs md:text-sm relative top-1 text-bgColor pr-2'>
                      {lead[index]}
                    </CardDescription>
                    <CardFooter className='relative pl-0 top-2 text-xs text-bgColor opacity-80'>
                      {date[index]}
                    </CardFooter>
                  </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
