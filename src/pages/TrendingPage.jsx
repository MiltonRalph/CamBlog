import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import pic16 from '@/assets/pic16.jpg';
import pic15 from '@/assets/pic15.jpg';
import pic13 from '@/assets/pic13.jpg';
import pic1 from '@/assets/pic1.jpg';
import pic22 from '@/assets/pic22.jpg';
import {
  BiChart,
  BiTrendingUp,
} from 'react-icons/bi';

const TrendingPage = () => {
  return (
    <>
      <div className='relative mx-4 my-6 md:mx-6 md:my-12 lg:mx-8 xl:mx-12'>
        <div className='flex justify-between'>
          <h1 className='inline-flex items-center text-fontColor font-semibold'>
            Trending
          </h1>
          <h3 className='inline-flex items-center rounded-md bg-bgColor px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20 hover:bg-gray-50 cursor-pointer'>
            View All Post
          </h3>
        </div>
        {/* Cards */}
        <div className='overflow-hidden overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing py-6 pb-0 flex w-full space-x-4 xl:space-x-8 md:pb-0'>
          <Card>
            <CardContent className='relative aspect-square flex items-center justify-center p-20 sm:p-24 md:p-28 xl:px-32'>
              <img
                src={pic16}
                alt=''
                loading='lazy'
                className='absolute w-full h-full rounded-lg'
              />
              <Link to='/Posts/Post1'>
                <div className='z-10 absolute bottom-5 left-3 flex flex-col items-left text-lightColor md:bottom-10'>
                  <CardHeader className='absolute flex-row items-center rounded-full px-2 py-1.5 text-xs bg-healthColor text-bgColor md:py-2'>
                    <span className='mr-1'>
                      <BiChart />
                    </span>{' '}
                    Mental Health
                  </CardHeader>
                  <CardFooter className='relative top-7 px-1 text-xs md:text-sm text-bgColor md:top-9 xl:pr-3'>
                    The AI magically removes moving objects from videos.
                  </CardFooter>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='relative aspect-square flex items-center justify-center p-20 sm:p-24 md:p-28 xl:px-32'>
              <img
                src={pic1}
                alt=''
                loading='lazy'
                className='absolute w-full h-full rounded-lg'
              />
              <Link to='/Posts/Post2'>
                <div className='z-10 absolute bottom-5 left-3 flex flex-col items-left text-lightColor md:bottom-10'>
                  <CardHeader className='absolute flex-row items-center rounded-full px-2 py-1.5 text-xs bg-selfColor text-bgColor md:py-2'>
                    <span className='mr-1'>
                      <BiChart />
                    </span>{' '}
                    Personal Growth
                  </CardHeader>
                  <CardFooter className='relative top-7 px-1 text-xs md:text-sm text-bgColor md:top-9 xl:pr-3'>
                    The AI magically removes moving objects from videos.
                  </CardFooter>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='relative aspect-square flex items-center justify-center p-20 sm:p-24 md:p-28 xl:px-32'>
              <img
                src={pic13}
                alt=''
                loading='lazy'
                className='absolute w-full h-full rounded-lg'
              />
              <Link to='/Posts/Post3'>
                <div className='z-10 absolute bottom-5 left-3 flex flex-col items-left text-lightColor md:bottom-10'>
                  <CardHeader className='absolute flex-row items-center rounded-full px-2 py-1.5 text-xs bg-selfColor text-bgColor md:py-2'>
                    <span className='mr-1'>
                      <BiTrendingUp />
                    </span>{' '}
                    Personal Growth
                  </CardHeader>
                  <CardFooter className='relative top-7 px-1 text-xs md:text-sm text-bgColor md:top-9 xl:pr-3'>
                    The AI magically removes moving objects from videos.
                  </CardFooter>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='relative aspect-square flex items-center justify-center p-20 sm:p-24 md:p-28 xl:px-32'>
              <img
                src={pic22}
                alt=''
                loading='lazy'
                className='absolute w-full h-full rounded-lg'
              />
              <Link to='/Posts/Post4'>
                <div className='z-10 absolute bottom-5 left-3 flex flex-col items-left text-lightColor md:bottom-10'>
                  <CardHeader className='absolute flex-row items-center rounded-full px-2 py-1.5 text-xs bg-lifeColor text-bgColor md:py-2'>
                    <span className='mr-1'>
                      <BiTrendingUp />
                    </span>{' '}
                    Lifestyle
                  </CardHeader>
                  <CardFooter className='relative top-7 px-1 text-xs md:text-sm text-bgColor md:top-9 xl:pr-3'>
                    The AI magically removes moving objects from videos.
                  </CardFooter>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='relative aspect-square flex items-center justify-center p-20 sm:p-24 md:p-28 xl:px-32'>
              <img
                src={pic15}
                alt=''
                loading='lazy'
                className='absolute w-full h-full rounded-lg'
              />
              <Link to='/Posts/Post5'>
                <div className='z-10 absolute bottom-5 left-3 flex flex-col items-left text-lightColor md:bottom-10'>
                  <CardHeader className='absolute flex-row items-center rounded-full px-2 py-1.5 text-xs bg-healthColor text-bgColor md:py-2'>
                    <span className='mr-1'>
                      <BiChart />
                    </span>{' '}
                    Mental Health
                  </CardHeader>
                  <CardFooter className='relative top-7 px-1 text-xs md:text-sm text-bgColor md:top-9 xl:pr-3'>
                    The AI magically removes moving objects from videos.
                  </CardFooter>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
