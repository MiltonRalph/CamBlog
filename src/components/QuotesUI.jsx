import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from './ui/card';

import {
  BiClipboard,
  BiCopyAlt,
  BiLogoTwitter,
  BiSolidVolumeFull,
} from 'react-icons/bi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Button } from './ui/button';
import { useState } from 'react';

const QuotesUI = ({ blog }) => {
  const quoteText = document.querySelector('.quote-area .quote');
  const authorName = document.querySelector('.author .name');

  // Random quote function

  const [currentQuote, setCurrentQuote] = useState(null);
  const randomQuote = () => {
    if (blog.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * blog.length);
    setCurrentQuote(blog[randomIndex]);
  };

  const sound = () => {
    // SpeechSynthesisUtterance is a web speech api that represents a speech
    // request
    let utterance = new SpeechSynthesisUtterance(
      `${quoteText.innerText} from ${authorName.innerText}`
    );
    // speak method of speechutterances speaks the utterance
    speechSynthesis.speak(utterance);
  };

  const copy = () => {
    // Copying the quote text on copyBTn click
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
    const copyBtn = document.getElementById('copy');
    const copyBtnAlt = document.getElementById('copyAlt');
    copyBtn.classList = 'quote-icon h-5 w-5 text-linkColor'
      ? 'hidden'
      : 'quote-icon h-5 w-5 text-linkColor';
    copyBtnAlt.classList = 'hidden'
      ? 'quote-icon h-5 w-5 text-linkColor'
      : 'hidden';
    console.log(copyBtn.className);
    setTimeout(() => {
      copyBtn.classList = 'hidden'
        ? 'quote-icon h-5 w-5 text-linkColor'
        : 'hidden';
      copyBtnAlt.classList = 'quote-icon h-5 w-5 text-linkColor'
        ? 'hidden'
        : 'quote-icon h-5 w-5 text-linkColor';
      console.log(copyBtnAlt.className);
    }, 1500);
  };

  const twitter = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    // opening a new twitter tab with passing quote in the url
    window.open(tweetUrl, '_blank');
  };
  return (
    <>
      <Card className='wrapper'>
        <CardContent className='content'>
          <CardHeader className='quote-head text-2xl text-center font-semibold mb-1 text-fontolor'>
            Quote of the Day
          </CardHeader>
          {currentQuote ? (
            <>
              <CardDescription className='relative quote-area text-fontColor flex justify-center'>
                <FaQuoteLeft className='absolute top-0 left-0 opacity-90' />
                <p className='quote text-left text-xl pl-6 pr-6 opacity-90'>
                  {currentQuote.quote}
                </p>
                <FaQuoteRight className='absolute right-0 bottom-0 opacity-90' />
              </CardDescription>
              <CardFooter className='relative author flex flex-end mt-4 pb-0 pt-1'>
                <span className='name absolute right-0 text-sm italic text-secondaryColor'>
                  {currentQuote.author}
                </span>
              </CardFooter>
            </>
          ) : (
            <>
              <CardDescription className='relative quote-area text-fontColor flex justify-center'>
                <FaQuoteLeft className='absolute top-0 left-0 opacity-90' />
                <p className='quote text-left text-xl pl-6 pr-6 opacity-90'>
                The greatest glory in living lies not in never falling, but in rising every time we fall.
                </p>
                <FaQuoteRight className='absolute right-0 bottom-0 opacity-90' />
              </CardDescription>
              <CardFooter className='relative author flex flex-end mt-4 pb-0 pt-1'>
                <span className='name absolute right-0 text-sm italic text-secondaryColor'>
                  Nelson Mandela
                </span>
              </CardFooter>
            </>
          )}
        </CardContent>
        <CardContent className='buttons border-y border-gray-200 mx-5 mt-2 px-0'>
          <div className='features flex items-center justify-between mt-6'>
            <ul className='flex space-x-2'>
              <li
                className='sound h-10 w-10 flex items-center justify-center border  rounded-full border-linkColor cursor-pointer hover:bg-linkColor'
                onClick={sound}>
                <BiSolidVolumeFull className='quote-icon h-5 w-5 text-linkColor' />
              </li>
              <li
                className='h-10 w-10 flex items-center justify-center border  rounded-full border-linkColor cursor-pointer hover:bg-linkColor'
                onClick={copy}>
                <BiCopyAlt
                  id='copy'
                  className='quote-icon h-5 w-5 text-linkColor'
                />
                <BiClipboard id='copyAlt' className='hidden' />
              </li>
              <li
                className='twitter h-10 w-10 flex items-center justify-center border  rounded-full border-linkColor cursor-pointer hover:bg-linkColor'
                onClick={twitter}>
                <BiLogoTwitter className='quote-icon h-5 w-5 text-linkColor' />
              </li>
            </ul>
            <Button
              className='quote-btn text-bgColor bg-linkColor py-2 px-4 rounded-2xl hover:bg-linkColor hover:bg-hoverColor'
              onClick={randomQuote}>
              New Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default QuotesUI;
