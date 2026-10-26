import { Card, CardContent } from './ui/card';
const BlogPost2 = ({blog}) => {
  const getImage = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };
  return (
    <>
            {blog.map((post, index) => (
        <Card key={index} className='mx-3 md:mx-0 md:w-1/2 h-full shadow-md'>
          <CardContent className='relative flex items-center justify-center p-24 overflow-hidden md:p-24 lg:p-20 xl:p-28'>
            <img
              src={getImage(post.img)}
              alt=''
              loading='lazy'
              className='absolute w-full h-full rounded-md'
            />
          </CardContent>
          <CardContent className='relative bg-gray-50 px-4 py-5'>
            <a href=''>
              <h3 className='font-semibold  mb-1'>
                {post.heading}
              </h3>
              <p className='text-sm mb-3 leading-relaxed'>
                {post.description}
              </p>
              <div className='flex items-center '>
                <div className='relative w-6 h-6 mr-2'>
                  <img
                    src={getImage(post.profile)}
                    alt=''
                    loading='lazy'
                    className='w-full h-full rounded-full'
                  />
                </div>
                <h4 className='text-xs font-semibold mr-2'>{post.author}</h4>
                <h4 className='text-xs text-secondaryColor opacity-80'>
                  {post.date}
                </h4>
              </div>
            </a>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default BlogPost2
