import { PostRoutes } from './PostRoutes';
import person4 from './assets/person4.jpg';
import pic18 from './assets/pic18.jpg';
import pic16 from './assets/pic16.jpg';
import pic12 from './assets/pic12.jpg';
import pic26 from './assets/pic26.jpg';
import {
  BiAlarm,
  BiSolidLeftArrowAlt,
  BiSolidRightArrowAlt,
} from 'react-icons/bi';
import { Card } from './components/ui/card';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogsPage = ({ postComponent }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPostIndex = PostRoutes.findIndex(
    (post) => post.path === location.pathname
  );

  const previousPostPath =
    currentPostIndex > 0 ? PostRoutes[currentPostIndex - 1].path : null;
  const nextPostPath =
    currentPostIndex < PostRoutes.length - 1
      ? PostRoutes[currentPostIndex + 1].path
      : null;

  return (
    <>
      {postComponent}
      <div className='flex justify-between items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        {previousPostPath && (
          <button
            className='flex items-center justify-center font-medium text-linkColor hover:text-hoverColor'
            onClick={() => navigate(previousPostPath)}>
            <BiSolidLeftArrowAlt />
            Previous Article
          </button>
        )}
        {nextPostPath && (
          <button
            className='flex items-center justify-center font-medium text-linkColor hover:text-hoverColor'
            onClick={() => navigate(nextPostPath)}>
            Next Article
            <BiSolidRightArrowAlt />
          </button>
        )}
      </div>
      <div className='mx-4 my-6 md:mx-6 md:my-12 lg:mx-8 xl:mx-12 text-fontColor'>
        <h1 className='inline-flex items-center text-fontColor font-semibold mb-4'>
          More Articles
        </h1>
        <div className='space-y-8 md:space-y-0 md:flex md:space-x-8'>
          <div className='md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <Card className='mb-3'>
              <img
                src={pic18}
                alt=''
                loading='lazy'
                className='w-full h-full rounded-md'
              />
            </Card>
            <div>
              <h2 className='mb-2 w-32 text-center rounded-full bg-selfColor py-1 text-bgColor text-xs font-semibold'>
                Personal Growth
              </h2>
              <a href='' className='text-xl font-semibold'>
                How to accomplish big things with long-term goals
              </a>
              <div className='relative flex mt-3'>
                <div className='h-5 w-5 mr-1'>
                  <img
                    src={person4}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-full'
                  />
                </div>
                <p className='mr-2 text-sm'>Tracey Wilson</p>
                <span className='border-l-2 pl-2 flex items-center'>
                  <BiAlarm /> <p className='pl-1 text-sm'>6mins read</p>
                </span>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <Card className='mb-3'>
              <img
                src={pic16}
                alt=''
                loading='lazy'
                className='w-full h-full rounded-md'
              />
            </Card>
            <div>
              <h2 className='mb-2 w-32 text-center rounded-full bg-lifeColor py-1 text-bgColor text-xs font-semibold'>
                Lifestyle
              </h2>
              <a href='' className='text-xl font-semibold'>
                How to accomplish big things with long-term goals
              </a>
              <div className='relative flex mt-3'>
                <div className='h-5 w-5 mr-1'>
                  <img
                    src={person4}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-full'
                  />
                </div>
                <p className='mr-2 text-sm'>Tracey Wilson</p>
                <span className='border-l-2 pl-2 flex items-center'>
                  <BiAlarm /> <p className='pl-1 text-sm'>6mins read</p>
                </span>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 md:hidden lg:block lg:w-1/3 xl:w-1/4'>
            <Card className='mb-3'>
              <img
                src={pic12}
                alt=''
                loading='lazy'
                className='w-full h-full rounded-md'
              />
            </Card>
            <div>
              <h2 className='mb-2 w-32 text-center rounded-full bg-healthColor py-1 text-bgColor text-xs font-semibold'>
                Mental Health
              </h2>
              <a href='' className='text-xl font-semibold'>
                How to accomplish big things with long-term goals
              </a>
              <div className='relative flex mt-3'>
                <div className='h-5 w-5 mr-1'>
                  <img
                    src={person4}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-full'
                  />
                </div>
                <p className='mr-2 text-sm'>Tracey Wilson</p>
                <span className='border-l-2 pl-2 flex items-center'>
                  <BiAlarm /> <p className='pl-1 text-sm'>6mins read</p>
                </span>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 md:hidden xl:block xl:w-1/4'>
            <Card className='mb-3'>
              <img
                src={pic26}
                alt=''
                loading='lazy'
                className='w-full h-full rounded-md'
              />
            </Card>
            <div>
              <h2 className='mb-2 w-32 text-center rounded-full bg-lifeColor py-1 text-bgColor text-xs font-semibold'>
                Lifestyle
              </h2>
              <a href='' className='text-xl font-semibold'>
                How to accomplish big things with long-term goals
              </a>
              <div className='relative flex mt-3'>
                <div className='h-5 w-5 mr-1'>
                  <img
                    src={person4}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-full'
                  />
                </div>
                <p className='mr-2 text-sm'>Tracey Wilson</p>
                <span className='border-l-2 pl-2 flex items-center'>
                  <BiAlarm /> <p className='pl-1 text-sm'>6mins read</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
