import { CarouselPlugin } from '../components/CarouselPlugin';
import { Card, CardContent } from '@/components/ui/card';
import pic12 from '../assets/pic12.jpg';
import pic2 from '../assets/pic2.jpg';

const HeroCard = () => {
  return (
    <><div className='hero-section flex flex-col space-x-0 px-4 py-7 md:px-6 md:py-10 lg:space-x-5 space-y-6 lg:space-y-0 lg:px-8 xl:px-12 lg:flex-row'>
        <CarouselPlugin />
        <div className='hidden lg:flex space-x-0 flex-col w-full space-y-7'>
          <div>
            <Card>
              <CardContent className='relative flex items-center justify-center p-24 xl:p-28'>
                <img
                  src={pic12}
                  alt=''
                  loading='lazy'
                  className='absolute w-full h-full rounded-md'
                />
                <a href=''>
                  <div className='z-10 absolute bottom-6 left-3 flex flex-col items-left'>
                    <h3 className='text-bgColor xl:pr-3'>
                      The AI magically removes moving objects from videos.
                    </h3>
                    <p className='text-xs mr-2 text-bgColor opacity-80'>
                      July, 15, 2020
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className=' relative flex items-center justify-center p-24 xl:p-28'>
                <img
                  src={pic2}
                  alt=''
                  loading='lazy'
                  className='absolute w-full h-full rounded-md'
                />
                <a href=''>
                  <div className='z-10 absolute bottom-6 left-3 flex flex-col items-left'>
                    <h3 className='text-bgColor xl:pr-2'>
                      The 20 Biggest Fintech Companies in America 2019
                    </h3>
                    <p className='text-xs mr-2 text-bgColor opacity-80'>
                      November, 29, 2020
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
