import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import person4 from '@/assets/person4.jpg';
import person2 from '@/assets/person2.jpg';
import person3 from '@/assets/person3.jpg';
import person5 from '@/assets/person5.jpg';
import person1 from '@/assets/person1.jpg';
import person6 from '@/assets/person6.jpg';
import { FaStar } from 'react-icons/fa';

const TestimonialPage = () => {
  const images = [person4, person3, person2, person1, person6, person5];
  const review = [
    `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet, consequuntur corporis odio, voluptates ut at autem quaerat."`,
    `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet, consequuntur corporis odio, volupta tes ut at autem quaerat."`,
    `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet, consequuntur corporis odio, voluptates ut at autem quaerat."`,
    `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet, consequuntu corporis odio, voluptates ut at autem quaerat."`,
    `"Lorem ipsum dolor sit amet consectetu adipisicing elit. Ab eveniet, consequuntur corporis odio, voluptates ut at autem quaerat."`,
    `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet."`,
  ];
  const author = [
    'Maria slivia',
    'Sebastian Edward',
    'Catherine Walters',
    'Mathew Alto',
    'James Garner',
    'Philip Mars',
  ];
  return (
    <>
          <div id='testimonial' className='relative mx-4 my-6 md:mx-6 md:my-12 lg:mx-8 xl:mx-12'>
        <div className='lg:flex lg:space-x-4  xl:space-x-12'>
          <div className='lg:w-1/3 flex flex-col justify-center'>
            <h2 className='font-semibold text-xl text-linkColor'>
              What They Say?
            </h2>
            <br />
            <p className='text-fontColor'>
              CamBlog has got more than 6 positive ratings from our users
              around the world.
              <br /> <br />
              Some of the brands and creators were greatly helped from contents
              made by CamBlog.
              <br /> <br />
              Review the comments from our top users.
            </p>
          </div>
          <div className='relative flex items-center justify-center mt-16 lg:mt-0'>
            <Carousel
              opts={{
                align: 'start',
              }}
              className='w-full max-w-sm'
              className='carusel w-[20em] md:w-[38em] xl:w-[53em]'>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className='md:basis-1/2 xl:basis-1/3 cursor-grab'>
                    <div className='p-1'>
                      <Card className='relative'>
                        <CardContent className='flex aspect-square items-center justify-center p-6'>
                          <img
                            src={image}
                            alt=''
                            loading='lazy'
                            className='absolute w-full h-full rounded-lg'
                          />
                          <Card className='absolute bottom-[-4px] left-5 py-3 px-4'>
                            <p className='text-xs text-fontColor pl-2.5 border-l-2'>
                              {review[index]}
                            </p>
                            <CardFooter className='flex justify-between p-0 pt-2'>
                              <p className='font-bold text-xs'>
                                {author[index]}
                              </p>
                              <div className='flex space-x-1/2'>
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                              </div>
                            </CardFooter>
                          </Card>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='translate-x-8' />
              <CarouselNext className='translate-x-[-30px]' />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialPage
