import QuotesUI from '@/components/QuotesUI';
import BlogCategory from '@/components/BlogCategory';
import BlogPost from '@/components/BlogPost';
import BlogPost2 from '@/components/BlogPost2';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
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
import person4 from '@/assets/person4.jpg';
import gif1 from '@/assets/gif1.jpg';
import gif2 from '@/assets/gif2.jpg';
import gif3 from '@/assets/gif3.jpg';
import video4 from '@/assets/video4.mp4';
import { useEffect, useState } from 'react';

import { BiSolidStar } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const heading = [
    'The Impact of Technology on the Workplace: How Technology is Changing',
  ];

  const date = ['August, 23, 2022'];

  const badge = ['Personal Growth'];

  const lead = ['Tracey Wilson'];

  const badgeClass = [
    'absolute inline-flex top-1 items-center rounded-full px-3 py-1 text-xs ring-1 ring-inset ring-gray-500/10 bg-selfColor text-bgColor md:py-2',
  ];
  const [blog, setBlog] = useState({
    quote: [],
    category: [],
    post: [],
    post2: [],
  });
  useEffect(() => {
    fetch('/blog.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((JsonData) => setBlog(JsonData))
      .catch((error) =>
        console.error('There was a problem with the fetch operation:', error)
      );
  }, []);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const gifs = [gif1, gif2, gif3];
  return (
    <>
      <div className='mx-4 my-6 md:mx-6 lg:mx-8 xl:mx-12 md:my-12 flex flex-col lg:space-x-6 lg:flex-row'>
        <div className='lg:w-2/3 mb-3 lg:mb-0'>
          <div className='flex justify-between pb-6' id='blogs'>
            <h1 className='inline-flex items-center text-fontColor font-semibold'>
              Featured Posts
            </h1>
            <h3 className='inline-flex items-center rounded-md bg-bgColor px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20 hover:bg-gray-50 cursor-pointer'>
              View All Post
            </h3>
          </div>
          <Card>
            <a href=''>
              <CardContent className='relative flex items-center justify-center p-28 overflow-hidden md:p-36 lg:p-40 xl:p-48'>
                <video
                  src={video4}
                  loading='lazy'
                  autoPlay
                  muted
                  loop
                  playsInline
                  crossOrigin='anonymous'
                  className='absolute w-full h-full object-cover rounded-md'></video>
                <div className='z-10 absolute left-1 bottom-2 w-full md:bottom-6 md:left-4 flex flex-col items-left text-lightColor'>
                  <CardHeader className='relative p-3 md:p-4'>
                    <h4 className={badgeClass}>
                      {}
                      <BiSolidStar className='w-4 h-4 mr-1' />
                      {badge}
                    </h4>
                    <h3 className='font-semibold text-lg text-bgColor relative top-4 pb-1 md:top-5 md:mr-10'>
                      {heading}
                    </h3>
                  </CardHeader>
                  <CardFooter className='relative flex items-center top-1 pl-3 md:mr-20 md:pl-4 md:top-1'>
                    <p className='text-xs text-bgColor flex items-center justify-center mr-3'>
                      <div className='relative w-6 h-6 mr-2'>
                        <img
                          src={person4}
                          alt=''
                          loading='lazy'
                          className='w-full h-full rounded-full'
                        />
                      </div>
                      {lead}
                    </p>
                    <p className='text-xs text-bgColor opacity-80'>{date}</p>
                  </CardFooter>
                </div>
              </CardContent>
            </a>
          </Card>

          <div className='cards my-3 space-y-3'>
            <div className='flex flex-col w-full space-y-3 md:space-y-0 md:space-x-5 md:flex-row'>
              <BlogPost blog={blog.post} />
            </div>
            <div className='flex flex-col w-full space-y-3 md:space-y-0 md:space-x-5 md:flex-row'>
              <BlogPost2 blog={blog.post2} />
            </div>
          </div>
        </div>

        <div className='popular lg:w-1/3' id='quote'>
          <div className='pb-5 lg:pb-8'>
            <h1 className='inline-flex items-center text-fontColor font-semibold'>
              Inspirational Quotes
            </h1>
          </div>
          <QuotesUI blog={blog.quote} />
          {/* Category Number */}
          <div className='py-6'>
            <Card>
              <CardContent className='p-6'>
                <CardDescription className='text-lg mb-3 text-fontColor'>
                  Category
                </CardDescription>
                <BlogCategory blog={blog.category} />
              </CardContent>
            </Card>
          </div>
          {/*Subscribe Content */}
          <div>
            <Card id='support' className='py-5'>
              <CardContent>
                <Carousel plugins={[plugin.current]} className='w-full '>
                  <CarouselContent>
                    {gifs.map((gif, index) => (
                      <CarouselItem key={index}>
                        <div>
                          <img
                            src={gif}
                            alt=''
                            loading='lazy'
                            className='px-16 sm:px-52 lg:px-16'
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <h1 className='font-semibold text-linkColor text-2xl text-center lg:text-2xl'>
                  Advertise with Us
                </h1>
                <p className='text-fontColor text-center md:text-lg mb-3 flex items-center justify-center py-3 lg:py-1 xl:py-3'>
                  Got any related product or service you'd like to promote? Reach out to us for exciting advertising opportunities.
                </p>
                <Link to="hamiltonjude679@gmail.com" className='flex justify-center'>
                  <Button className='bg-linkColor hover:bg-hoverColor'>Contact Us</Button>
                </Link>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
