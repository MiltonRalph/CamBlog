import { CardDescription } from './ui/card';
const BlogCategory = ({ blog }) => {
  return (
    <>
      {blog.map((post, index) => (
        <CardDescription
          key={index}
          className='p-2 caty-no flex items-center justify-between'>
          {post.type}
          <span className='bg-blue-100 text-primaryColor text-xs py-1 px-2 rounded-lg'>
            {post.number}
          </span>
        </CardDescription>
      ))}
    </>
  );
};

export default BlogCategory;
