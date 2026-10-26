import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import { BiMessageAltDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100 px-4 py-8 mt-8 md:px-6 lg:px-8 xl:px-12 md:mt-16'>
        <div className='flex flex-col justify-between border-b-2 pb-6 lg:flex-row lg:space-x-20'>
          <div className='lg:w-1/3'>
            <h1 className='font-semibold mb-2 text-fontColor'>About</h1>
            <p className='text-sm text-fontColor mb-2 leading-relaxed'>
              CamBlog is your daily source of inspiration, offering
              thought-provoking content to uplift your spirit, empower your
              decisions, and help you navigate life's challenges. Our mission is
              to connect with you on a deeper level, providing insights that
              resonate and motivate.  
              <span>
                <Link to='/about' className='ml-1 text-sm text-linkColor hover:text-hoverColor'>
                  Read More
                </Link>
              </span>
            </p>
            <p className='text-sm font-semibold'>Follow us on:</p>
            <div className='flex '>
              <Link to=''>
                <img src={icon3} alt='' className='w-8 h-8 mr-1' />
              </Link>
              <Link to=''>
                <img src={icon2} alt='' className='w-8 h-8 mr-1' />
              </Link>
              <Link to=''>
                <img src={icon1} alt='' className='w-8 h-8 mr-1' />
              </Link>
              <Link to=''>
                <img src={icon4} alt='' className='w-8 h-8' />
              </Link>
            </div>
          </div>
          <div className='flex space-x-20 py-4 lg:py-0'>
            <div id='two'>
              <h1 className='font-semibold text-fontColor mb-2'>QuickLinks</h1>
              <ul>
                <Link to='/'>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Home
                  </li>
                </Link>
                <Link to='/about'>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    About Us
                  </li>
                </Link>
                <Link to='/#quote'>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Quotes
                  </li>
                </Link>
                <Link to=''>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Featured Posts
                  </li>
                </Link>
                <Link to=''>
                  <li className='text-sm text-gray-500 hover:text-hoverColor'>
                    Notification
                  </li>
                </Link>
              </ul>
            </div>
            <div id='three'>
              <h1 className='font-semibold mb-2'>Category</h1>
              <ul>
                <Link to=''>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Technology
                  </li>
                </Link>
                <Link to=''>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Lifestyle
                  </li>
                </Link>
                <Link to=''>
                  <li className='text-sm mb-2 text-gray-500 hover:text-hoverColor'>
                    Business
                  </li>
                </Link>
                <Link to=''>
                  <li className='text-sm text-gray-500 hover:text-hoverColor'>
                    Health
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div id='four'>
            <Card id='subscribe' className='p-6'>
              <h1 className='font-semibold text-fontColor text-lg text-center mb-2'>
                Weekly Newsletter
              </h1>
              <p className='text-xs text-fontColor mb-4'>
                Get special updates and recommendation in your inbox now!
              </p>
              <span className='flex items-center justify-center relative mb-4'>
                <Input type='email' name='email' placeholder='Your Email' />
                <BiMessageAltDetail className='absolute right-0 mr-3 text-gray-500' />
              </span>
              <Button
                type='submit'
                className='w-full bg-linkColor hover:bg-hoverColor'>
                Subscribe
              </Button>
            </Card>
          </div>
        </div>
        <div className='flex flex-col items-center translate-y-4 md:flex-row md:justify-between'>
          <div className='flex items-center pb-1 md:pb-0'>
            <img src={logo} alt='logo.png' className='w-7 h-7' />
            <h3 className='font-semibold text-gray-700'>
              Cam<span className='font-bold'>Blog</span>
            </h3>
          </div>
          <p>Copyright &copy; 2024. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
