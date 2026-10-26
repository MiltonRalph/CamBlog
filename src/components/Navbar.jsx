import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  BiBookOpen,
  BiChalkboard,
  BiEnvelope,
  BiListUl,
  BiMenu,
  BiWrench,
} from 'react-icons/bi';
import { useEffect, useState } from 'react';

const linkClass = ({ isActive }) =>
  isActive
    ? 'px-1 lg:px-3 py-2 font-normal text-hoverColor md:text-sm hover:text-hoverColor'
    : 'px-1 lg:px-3 py-2 font-normal text-linkColor md:text-sm hover:text-hoverColor';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [searchPost, setSearchPost] = useState([]);
  useEffect(() => {
    fetch('./blogList.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not okay');
        } else {
          return res.json();
        }
      })
      .then((jsonData) => {
        setSearchPost(jsonData);
        console.log(jsonData);
      })
      .catch((error) =>
        console.error('There was a problem with the fetch operation:', error)
      );
  }, []);
  return (
    <>
      <nav className='nav sticky top-0 z-50 mx-auto max-w-8xl px-4 md:px-6 lg:px-8 xl:px-12 py-3 bg-bgColor lg:flex justify-between'>
        {/* <!-- Hamburger Icon --> */}
        <button
          className='left-3 block hamburger lg:hidden focus:outline-none transition-all duration-500 ease-in-out'
          onClick={toggleMenu}>
          <BiMenu
            className={` ${
              openMenu ? 'hidden' : ''
            } h-7 w-7 transition-all duration-500 ease-in-out`}
          />
          <BiListUl
            className={`${
              openMenu ? '' : 'hidden'
            } w-7 h-7 transition-all duration-500 ease-in-out`}
          />
        </button>
        {/* Logo */}
        <Link to='/' className='flex self-center items-center justify-center'>
          <img
            src={logo}
            alt='logo.png'
            loading='lazy'
            className='logo w-8 h-8'
          />
          <h3 className='font-semibold text-gray-700'>
            Cam<span className='font-bold'>Blog</span>
          </h3>
        </Link>
        {/* Nav items for medium screens */}
        <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
          <div className='hidden lg:ml-6 lg:block'>
            <div className='flex space-x-1'>
              <NavLink to='/' className={linkClass} aria-current='page'>
                Home
              </NavLink>
              <NavLink to='/about' className={linkClass}>
                About
              </NavLink>
              <NavLink
                to='/#category'
                className='px-1 lg:px-3 py-2 text-sm font-normal text-linkColor hover:text-hoverColor'>
                Category
              </NavLink>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-linkColor px-1 font-normal lg:px-3 hover:text-hoverColor'>
                      Blog
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='flex flex-col h-26 space-y-1 py-1 cursor-pointer'>
                      <NavLink
                        to='/#blogs'
                        className='link flex text-xs text-left text-secondaryColor hover:bg-gray-100 pl-4 py-1 pr-4'>
                        <BiChalkboard className='w-5 h-5 mr-1' />
                        Featured Posts
                      </NavLink>
                      <NavLink
                        to='/#quote'
                        className='link flex text-xs text-left text-secondaryColor pl-4 py-1 pr-16 hover:bg-gray-100 active:bg-gray-100'>
                        <BiBookOpen className='w-5 h-5 mr-1' />
                        Quotes
                      </NavLink>
                      <NavLink
                        to='/#support'
                        className='link flex text-xs text-left text-secondaryColor pl-4 py-1 pr-4 hover:bg-gray-100 active:bg-gray-100'>
                        <BiEnvelope className='w-5 h-5 mr-1' />
                        Contact Us
                      </NavLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavLink
                to='/#testimonial'
                className='px-1 lg:px-3 py-2 text-sm font-normal text-linkColor hover:text-hoverColor'>
                Testimonials
              </NavLink>
              <NavLink
                to='/#subscribe'
                className='px-1 lg:px-3 py-2 text-sm font-normal text-linkColor hover:text-hoverColor'>
                Subscribe
              </NavLink>
            </div>
          </div>
        </div>
        {/* Search Input and Notification Bell*/}
        <div className='absolute top-0 my-2 lg:my-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0'>
          <SearchBar data={searchPost} />
          {/* Bell Notification */}
          <button
            type='button'
            className='rounded-full bg-fontColor p-1 mt-1 mr-1 ml-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:mr-3 lg:mt-0 lg:mr-0'>
            <span className='sr-only'>View notifications</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0' />
            </svg>
          </button>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className='lg:hidden relative' id='mobile-menu'>
          <div
            className={`absolute mobileMenu z-10 w-full rounded-sm flex flex-col items-center self-end py-8 mt-3 space-y-6 font-bold bg-white lg:w-auto lg:self-center drop-shadow-md origin-top transition-all duration-500 ease-in-out transform ${
              openMenu ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}>
            <NavLink to='/#home' className={linkClass} aria-current='page'>
              Home
            </NavLink>
            <NavLink to='/about' className={linkClass}>
              About
            </NavLink>
            <NavLink
              to='/#category'
              className='px-1 lg:px-3 py-2 font-normal text-linkColor hover:text-hoverColor'>
              Category
            </NavLink>
            <NavigationMenu className='z-0'>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='text-linkColor text-md px-1 font-normal hover:text-hoverColor'>
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='flex flex-col h-30 space-y-1 py-1 cursor-pointer'>
                    <NavLink
                      to='/#blogs'
                      className='flex text-sm text-left text-secondaryColor hover:bg-gray-100 pl-4 py-1 pr-4'>
                      <BiChalkboard className='w-5 h-5 mr-1' />
                      Featured Posts
                    </NavLink>
                    <NavLink
                      to='/#quote'
                      className='flex text-sm text-left text-secondaryColor pl-4 py-1 pr-20 hover:bg-gray-100 active:bg-gray-100'>
                      <BiBookOpen className='w-5 h-5 mr-1' />
                      Quotes
                    </NavLink>
                    <NavLink
                      to='/#support'
                      className='flex text-sm text-left text-secondaryColor pl-4 py-1 pr-4 hover:bg-gray-100 active:bg-gray-100'>
                      <BiWrench className='w-5 h-5 mr-1' />
                      Support Us
                    </NavLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavLink
              to='/#testimonial'
              className='px-1 lg:px-3 py-2 font-normal text-linkColor hover:text-hoverColor'>
              Testimonials
            </NavLink>
            <NavLink
              to='/#subscribe'
              className='px-1 lg:px-3 py-2 font-normal text-linkColor hover:text-hoverColor'>
              Subscribe
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
