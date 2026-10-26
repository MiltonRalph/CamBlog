import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

import RandomPost from '@/components/RandomPost';
import RandomPost1 from '@/components/RandomPost1';
import RandomPost2 from '@/components/RandomPost2';
import PersonalGrowthPost from '@/components/PersonalGrowthPost';
import PersonalGrowthPost1 from '@/components/PersonalGrowthPost1';
import PersonalGrowthPost2 from '@/components/PersonalGrowthPost2';
import MentalHealthPost from '@/components/MentalHealthPost';
import MentalHealthPost1 from '@/components/MentalHealthPost1';
import MentalHealthPost2 from '@/components/MentalHealthPost2';
import LifePost from '@/components/LifePost';
import LifePost1 from '@/components/LifePost1';
import LifePost2 from '@/components/LifePost2';

import { useState, useEffect } from 'react';

const CategoryPage = () => {
  const [category, setCategory] = useState({
    random: [],
    random1: [],
    random2: [],
    PersonalGrowth: [],
    PersonalGrowth1: [],
    PersonalGrowth2: [],
    MentalHealth: [],
    MentalHealth1: [],
    MentalHealth2: [],
    lifestyle: [],
    lifestyle1: [],
    lifestyle2: [],
  });
  useEffect(() => {
    fetch('./category.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((jsonData) => {
        setCategory(jsonData);
      })
      .catch((error) =>
        console.error('There was a problem with the fetch operation:', error)
      );
  }, []);

  const [selectedValue, setSelectedValue] = useState('All');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <>
      <div
        className='relative mx-4 my-6 md:mx-6 md:my-12 lg:mx-8 xl:mx-12'
        id='category'>
        <div className='flex justify-between items-center'>
          <h1 className='inline-flex items-center text-fontColor font-semibold'>
            Categories{' '}
            <span className='ml-2'>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  {selectedValue || 'Select an option'}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='All'>
                    <span className='flex text-xs font-normal'>All</span>
                  </SelectItem>
                  <SelectItem value='Personal Growth' >
                    <span className='flex text-xs font-normal'>Personal Growth</span>
                  </SelectItem>
                  <SelectItem value='Mental Health'>
                    <span className='flex text-xs font-normal'>Mental Health</span>
                  </SelectItem>
                  <SelectItem value='LifeStyle'>
                    <span className='flex text-xs font-normal'>LifeStyle</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </span>
          </h1>
          <a
            href=''
            className='inline-flex items-center rounded-md bg-bgColor px-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20 hover:bg-gray-100'>
            View All Post
          </a>
        </div>
        {/* Categories Posts */}
        {/* Random Posts */}
        {selectedValue === 'All' && (
          <div className='py-6 pb-0'>
            <RandomPost category={category.random} />
            <RandomPost1 category={category.random1} />
            <RandomPost2 category={category.random2} />
          </div>
        )}
        {/* PersonalGrowth Posts */}
        {selectedValue === 'Personal Growth' && (
          <div className='mt-6'>
            <PersonalGrowthPost category={category.PersonalGrowth} />
            <PersonalGrowthPost1 category={category.PersonalGrowth1} />
            <PersonalGrowthPost2 category={category.PersonalGrowth2} />
          </div>
        )}
        {/* MentalHealth Posts */}
        {selectedValue === 'Mental Health' && (
          <div className='mt-6'>
            <MentalHealthPost category={category.MentalHealth} />
            <MentalHealthPost1 category={category.MentalHealth1} />
            <MentalHealthPost2 category={category.MentalHealth2} />
          </div>
        )}
        {/* Life Posts */}
        {selectedValue === 'LifeStyle' && (
          <div className='mt-6'>
            <LifePost category={category.lifestyle} />
            <LifePost1 category={category.lifestyle1} />
            <LifePost2 category={category.lifestyle2} />
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
