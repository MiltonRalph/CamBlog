import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  TwitterShareButton,
} from 'react-share';

const SharePost = () => {
  const postUrl = window.location.href;
  const postTitle = 'Check out this amazing post';
  return (
    <>
                <div className='flex mb-8'>
            <div className='mr-2 border-2 border-gray-300 px-3 py-1 rounded-lg'>
              <FacebookShareButton
                className='flex'
                url={postUrl}
                title={postTitle}>
                <FacebookIcon size={20} round />
                <p className='text-sm pl-2 font-semibold'>Share</p>
              </FacebookShareButton>
            </div>
            <div className='mr-2 border-2 border-gray-300 px-3 py-1 rounded-lg'>
              <LinkedinShareButton
                className='flex'
                url={postUrl}
                title={postTitle}>
                <LinkedinIcon size={20} round />
                <p className='text-sm pl-2 font-semibold'>Share</p>
              </LinkedinShareButton>
            </div>
            <div className='mr-2 border-2 border-gray-300 px-3 py-1 rounded-lg'>
              <TwitterShareButton
                className='flex'
                url={postUrl}
                title={postTitle}>
                <XIcon size={20} round />
                <p className='text-sm pl-2 font-semibold'>Tweet</p>
              </TwitterShareButton>
            </div>
          </div>
    </>
  )
}

export default SharePost
