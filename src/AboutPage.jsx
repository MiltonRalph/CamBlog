import svg10 from './assets/svg10.svg';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import img12 from './assets/img12.jpg';
import person10 from './assets/person10.jpg';
import person12 from './assets/person12.jpg';
import { Card } from './components/ui/card';
import { BiSolidCheckCircle } from 'react-icons/bi';
const AboutPage = () => {
  return (
    <>
      <div className='hero-section flex flex-col-reverse space-x-0 px-4 py-7 md:px-6 md:py-10 lg:flex-row lg:space-x-10 xl:items-center lg:space-x-20 lg:space-y-0 lg:px-8 xl:px-12'>
        <div className='mt-8 flex flex-col justify-center lg:mb-8 lg:w-1/2'>
          <h2 className='mb-4 text-fontColor text-sm'>About Us</h2>
          <h1 className='text-3xl mb-4 text-fontColor font-semibold'>
            Helping business succeed through the power of blog.
          </h1>
          <p className='mb-6 text-fontColor leading-relaxed'>
            At CamBlog, we believe that words have the power to transform lives.
            Our blog is dedicated to inspiring, encouraging, and guiding our
            readers through the highs and lows of life. We cover a wide range of
            topics, including personal development, emotional well-being,
            spiritual growth, and financial empowerment, ensuring that there's
            something for everyone.
            <br />
            Founded with the vision of creating a safe space for reflection and
            growth, CamBlog is more than just a blog; it's a community of
            like-minded individuals striving to become the best versions of
            themselves. Our content is carefull curated to not only inform but
            also inspire actionable change in your life.
            <br />
            Join us on this journey of discovery, as we explore the many facets
            of human experience, offering wisdom and support every step of the
            way.
          </p>
          <a
            href=''
            className='bg-linkColor px-6 py-2 text-bgColor text-center w-[12em] rounded-full'>
            Read Our Blog
          </a>
        </div>
        <Card className='relative md:px-48 lg:px-0 lg:w-1/2 xl:h-[25em]'>
          <img
            src={svg10}
            alt=''
            loading='lazy'
            className='lg:absolute h-full w-full rounded-sm'
          />
        </Card>
      </div>
      <div className='relative mx-6 my-12 md:mx-24 lg:flex lg:space-x-16 lg:mx-8 xl:mx-12'>
        <Card className='mb-4 lg:mb-0 lg:w-1/2'>
          <img
            src={img12}
            loading='lazy'
            alt=''
            className='rounded-md h-full'
          />
        </Card>
        <div className='flex flex-col lg:justify-center lg:w-1/2'>
          <h1 className='text-3xl font-medium mb-4'>Why Choose Us?</h1>
          <p className=' text-lg mb-4'>
            We're committed to delivering content that makes a difference in
            your life. Our blog is more than just words on a screen; it's a
            resource for inspiration, growth, and empowerment. Here's why CamBlog is worth visting:
          </p>
          <ul>
            <li className='flex items-center mb-4'>
              <BiSolidCheckCircle className='text-linkColor text-2xl mr-3' />
              Authentic and Insightful Content Crafted with Care
            </li>
            <li className='flex items-center mb-4'>
              <BiSolidCheckCircle className='text-linkColor text-2xl mr-3' />
              Holistic Life Guidance for Every Reader.
            </li>
            <li className='flex items-center mb-8'>
              <BiSolidCheckCircle className='text-linkColor text-2xl mr-3' />
              A Supportive Community Focused on Growth.
            </li>
          </ul>
          <a
            href=''
            className='border-2 border-linkColor px-6 py-2 text-linkColor text-center w-[12em] rounded-full'>
            Connect Now
          </a>
        </div>
      </div>
      <div className='relative mx-6 my-8 flex flex-col-reverse justify-center md:mx-16 lg:flex-row lg:space-x-16 lg:mx-8 xl:mx-24'>
        <div className='flex flex-col justify-center lg:w-1/2'>
          <h2 className='mb-2'>Team Member</h2>
          <h1 className='text-3xl font-semibold mb-4'>Camatella Dickson</h1>
          <h3 className='border-b border-linkColor w-[6em] pb-3 mb-4'>
            Blog Writer
          </h3>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            sapiente laborum optio doloribus. Doloremque rerum aliquid saepe
            autem qui? Et odio autem nulla.
          </p>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            sapiente laborum optio doloribus. Doloremque rerum aliquid saepe
            autem qui? Et odio autem nulla.
          </p>
          <div>
            <p className='text-3xl font-light mb-2'>2+</p>
            <h2 className='mb-8'>years of experience</h2>
            <a
              href=''
              className='bg-linkColor px-6 py-2 text-bgColor text-center w-[12em] rounded-full'>
              Contact Me
            </a>
          </div>
        </div>
        <Card className='hidden lg:block w-1/4 my-10'>
          <img
            src={person10}
            loading='lazy'
            alt=''
            className='rounded-md w-full h-full'
          />
        </Card>
        <Card className='mx-24 md:mx-56 mb-4 lg:hidden'>
          <img
            src={person10}
            loading='lazy'
            alt=''
            className='rounded-md w-full h-full'
          />
        </Card>
      </div>
      <div className='relative mx-6 my-12 flex flex-col-reverse justify-center md:mx-16 lg:flex-row lg:space-x-16 lg:mx-8 xl:mx-24'>
        <div className='flex flex-col justify-center lg:w-1/2'>
          <h2 className='mb-2'>Team Member</h2>
          <h1 className='text-3xl font-semibold mb-4'>Milton Ralph</h1>
          <h3 className='border-b border-linkColor w-[8em] pb-3 mb-4'>
            Web Developer
          </h3>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            sapiente laborum optio doloribus. Doloremque rerum aliquid saepe
            autem qui? Et odio autem nulla? Inventore quos officiis at! Fugit
            recusandae pariatur ut harum est voluptas voluptatibus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facilis alias fugit vel
            iure, provident quod?
          </p>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            sapiente laborum optio doloribus. Doloremque rerum aliquid saepe
            autem qui? Et odio autem nulla? Inventore quos officiis at! Fugit
            recusandae pariatur ut harum est voluptas voluptatibus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Facilis alias fugit vel
            iure, provident quod?
          </p>
          <div>
            <p className='text-3xl font-light mb-2'>2+</p>
            <h2 className='mb-8'>years of experience</h2>
            <a
              href=''
              className='bg-linkColor px-6 py-2 text-bgColor text-center w-[12em] rounded-full'>
              Contact Me
            </a>
          </div>
        </div>
        <Card className='hidden lg:block w-1/4 my-10'>
          <img
            src={person12}
            loading='lazy'
            alt=''
            className='rounded-md w-full h-full'
          />
        </Card>
        <Card className='mx-20 md:mx-56 mb-4 lg:hidden'>
          <img
            src={person12}
            loading='lazy'
            alt=''
            className='rounded-md w-full h-full'
          />
        </Card>
      </div>
      <div className='flex items-center justify-evenly'>
        <img src={logo1} alt='' className='w-16 h-6 md:w-28 md:h-12' />
        <img src={logo2} alt='' className='w-16 h-6 md:w-28 md:h-12' />
        <img src={logo3} alt='' className='w-20 md:w-32 md:h-32' />
        <img src={logo4} alt='' className='w-20 md:w-32 md:h-32' />
      </div>
    </>
  );
};

export default AboutPage;
