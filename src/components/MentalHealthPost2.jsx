import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const MentalHealthPost2 = ({category}) => {
  const getImage = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <>
      <div className='flex flex-col mb-6 lg:flex-row space-y-3 lg:space-x-3'>
        {category.map((post, index) => (
          <Card key={index} className='lg:w-1/2 mt-3'>
            <CardContent className='relative flex items-left justify-left h-full p-0'>
              <img
                src={getImage(post.imgSrc)}
                alt={`Image ${index}`}
                loading='lazy'
                className='w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 p-3 rounded-md image'
              />
              <div className='w-full'>
                <CardHeader className='hidden h-1/2 pl-0 pr-3 font-semibold md:flex'>
                  {post.description}
                </CardHeader>
                <CardHeader className='h-1/2 pl-0 pr-3 text-sm font-semibold md:text-normal md:hidden'>
                  {post.description.length >= 45
                    ? post.description.substring(0, 45) + '...'
                    : post.description}
                </CardHeader>
                <CardFooter className='h-1/2 flex items-center justify-between pl-0 pb-0 pr-3 text-xs text-secondaryColor opacity-80'>
                  {post.date}
                  <a
                    href='#'
                    className='inline-flex items-center rounded-md bg-bgColor px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20 hover:bg-gray-200'>
                    Read More
                  </a>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MentalHealthPost2