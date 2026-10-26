import SharePost from '@/components/SharePost';
import person4 from '@/assets/person4.jpg';
import pic13 from '@/assets/pic13.jpg';
import pic11 from '@/assets/pic11.jpg';
import { BiAlarm } from 'react-icons/bi';

import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import emoji1 from '@/assets/emoji1.png';
import emoji2 from '@/assets/emoji2.png';
import emoji3 from '@/assets/emoji3.png';
import emoji4 from '@/assets/emoji4.png';
import emoji5 from '@/assets/emoji5.png';

const Post5 = () => {
  const initialReactions = {
    thumbsUp: 13,
    thumbsDown: 2,
    loveHeart: 18,
    angryFace: 0,
    confusedFace: 5,
  };

  const [reactions, setReactions] = useState(
    JSON.parse(localStorage.getItem('reactions5')) || initialReactions
  );
  const [userReacted, setUserReacted] = useState(
    localStorage.getItem('userReacted5') === 'true' || false
  );
  const [selectedReaction, setSelectedReaction] = useState(
    localStorage.getItem('selectedReaction5') || ''
  );

  useEffect(() => {
    localStorage.setItem('reactions5', JSON.stringify(reactions));
  }, [reactions]);
  useEffect(() => {
    localStorage.setItem('userReacted5', userReacted);
    localStorage.setItem('selectedReaction5', selectedReaction);
  }, [userReacted, selectedReaction]);

  const handleReaction = (reaction) => {
    if (userReacted) {
      alert("You've already reacted to this post!");
      return;
    }
    setReactions((prevReactions) => ({
      ...prevReactions,
      [reaction]: prevReactions[reaction] + 1,
    }));
    setUserReacted(true);
    setSelectedReaction(reaction);
  };

  const clearReaction = () => {
    localStorage.removeItem('reactions5');
    localStorage.removeItem('userReacted5');
    localStorage.removeItem('selectedReaction5');
    setReactions(initialReactions);
    setUserReacted(false);
    setSelectedReaction('');
  };

  const emojis = [emoji1, emoji2, emoji3, emoji4, emoji5];
  return (
    <>
      <div className='relative mx-4 my-6 md:mx-6 md:my-12 lg:mx-8 xl:mx-12'>
        <div className='mb-4'>
          <h3 className='text-xs'>
            Home/Category/{' '}
            <span className='text-xs font-semibold'>Personal Growth</span>
          </h3>
        </div>
        <div className='flex flex-col items-center justify-center '>
          <h3 className='bg-selfColor text-bgColor px-3 py-1 text-xs rounded-full mb-4'>
          Personal Growth
          </h3>
          <h1 className='text-2xl text-center font-medium mb-4 mx-1 md:text-3xl md:mx-20 lg:mx-32'>
            5 Tips for staying motivated when working remotely
          </h1>
          <div className='relative flex items-center justify-center mb-4'>
            <div className='h-5 w-5 mr-1'>
              <img
                src={person4}
                alt=''
                loading='lazy'
                className='w-full h-full rounded-full'
              />
            </div>
            <p className='mr-2 text-sm'>Tracey Wilson</p>
            <p className='mr-2 text-sm'>April 20, 2024</p>
            <span className='border-l-2 pl-2 flex items-center'>
              <BiAlarm /> <p className='pl-1 text-sm'>6mins read</p>
            </span>
          </div>
          <SharePost />
          <Card className='mt-4 w-[20em] sm:w-[24em] md:w-[38em] lg:w-[40em] xl:w-[45em]'>
            <img src={pic13} alt='' className='w-full h-full rounded-sm' />
          </Card>
        </div>
      </div>
      <div className='flex flex-col items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        <h2 className='text-2xl self-start font-medium md:text-3xl'>
          Introduction
        </h2>
        <div className='self-start text-lg py-4 italic'>
          <p className='border-l-2 pl-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            commodi quidem aut expedita eos magni pariatur tempora, officiis,
            eveniet molestiae neque dignissimos impedit atque ullam, officia
            numquam maxime doloribus ipsa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Perspiciatis, ipsam sed. Lorem ipsum
            dolor sit amet consectetur adipisicing. <br /> <br /> Atque
            veritatis aspernatur laboriosam fugiat cupiditate, nobis,
            repellendus nisi, rerum ad maiores eos vel veniam quo aliquid ea
            dolorum fugit doloremque molestias! Ea tenetur nihil nisi ex
            consectetur cupiditate?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. In quia illo ratione, architecto ab alias. Cum
            porro illo enim, tempora quam commodi voluptatibus vitae quaerat
            aliquam tempore quas vero impedit.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        <h2 className='text-2xl self-start font-medium md:text-3xl'>
          #1 Designate your space
        </h2>
        <Card className='my-4 w-[16em] sm:w-[20em] md:w-[28em] lg:w-[30em] xl:w-[34em]'>
          <img src={pic11} alt='' className='w-full h-full rounded-sm' />
        </Card>
        <div className='self-start text-lg pb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            commodi quidem aut expedita eos magni pariatur tempora, officiis,
            eveniet molestiae neque dignissimos impedit atque ullam, officia
            numquam maxime doloribus ipsa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Perspiciatis, ipsam sed? Atque
            veritatis aspernatur laboriosam fugiat cupiditate, nobis,
            repellendus nisi, rerum ad maiores eos vel veniam quo aliquid ea
            dolorum fugit doloremque molestias! Ea tenetur nihil nisi ex
            consectetur cupiditate?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. In quia illo ratione, architecto ab alias. Cum
            porro illo enim, tempora quam commodi voluptatibus vitae quaerat
            aliquam tempore quas vero impedit.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        <h2 className='text-2xl self-start font-medium md:text-3xl'>
          #2 Designate your space
        </h2>
        <Card className='my-4 w-[16em] sm:w-[20em] md:w-[28em] lg:w-[30em] xl:w-[34em]'>
          <img src={pic11} alt='' className='w-full h-full rounded-sm' />
        </Card>
        <div className='self-start text-lg pb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            commodi quidem aut expedita eos magni pariatur tempora, officiis,
            eveniet molestiae neque dignissimos impedit atque ullam, officia
            numquam maxime doloribus ipsa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Perspiciatis, ipsam sed? Atque
            veritatis aspernatur laboriosam fugiat cupiditate, nobis,
            repellendus nisi, rerum ad maiores eos vel veniam quo aliquid ea
            dolorum fugit doloremque molestias! Ea tenetur nihil nisi ex
            consectetur cupiditate?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. In quia illo ratione, architecto ab alias. Cum
            porro illo enim, tempora quam commodi voluptatibus vitae quaerat
            aliquam tempore quas vero impedit.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        <h2 className='text-2xl self-start font-medium md:text-3xl'>
          #3 Designate your space
        </h2>
        <Card className='my-4 w-[16em] sm:w-[20em] md:w-[28em] lg:w-[30em] xl:w-[34em]'>
          <img src={pic11} alt='' className='w-full h-full rounded-sm' />
        </Card>
        <div className='self-start text-lg pb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            commodi quidem aut expedita eos magni pariatur tempora, officiis,
            eveniet molestiae neque dignissimos impedit atque ullam, officia
            numquam maxime doloribus ipsa? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Perspiciatis, ipsam sed? Atque
            veritatis aspernatur laboriosam fugiat cupiditate, nobis,
            repellendus nisi, rerum ad maiores eos vel veniam quo aliquid ea
            dolorum fugit doloremque molestias! Ea tenetur nihil nisi ex
            consectetur cupiditate?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. In quia illo ratione, architecto ab alias. Cum
            porro illo enim, tempora quam commodi voluptatibus vitae quaerat
            aliquam tempore quas vero impedit.
          </p>
        </div>
      </div>
      <div className='border-y-2 py-6 flex flex-col items-center mx-8 mb-4 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-[24em] 3xl:mx-[26em]'>
        <h3 className='font-semibold mb-2'>
          Respond to this article with emojis
        </h3>
        <div className='flex items-center justify-evenly'>
          {Object.entries(reactions).map(([key, count], index) => (
            <button
              key={key}
              id='btn'
              className={`${
                selectedReaction === key
                  ? 'text-white bg-linkColor'
                  : 'text-linkColor'
              } border-2 mr-2 p-2 text-2xl rounded-lg cursor-pointer md:mr-4 md:p-4 hover:bg-linkColor`}
              onClick={() => handleReaction(key)}>
              <img src={emojis[index]} alt='' className='w-7 md:w-9 md:h-9' />
              <span className='text-sm'>{count}</span>
            </button>
          ))}
        </div>
        {userReacted && (
          <Button
            className='bg-linkColor px-3 py-1 text-bgColor mt-3 hover:bg-hoverColor'
            onClick={clearReaction}>
            Clear Reaction
          </Button>
        )}
      </div>
    </>
  );
};

export default Post5;
