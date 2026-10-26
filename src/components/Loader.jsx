import logo from '../assets/logo.png';
const Loader = () => {
  return (
    <>
      <div className='center flex items-center justify-center min-h-[100vh]'>
        <div className='ring absolute w-36 h-36 rounded-full'></div>
        <img
          src={logo}
          alt='logo.png'
          loading='lazy'
          className='loader w-20 h-20'
        />
      </div>
    </>
  );
};

export default Loader;
