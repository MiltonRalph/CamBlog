import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
const SearchBar = ({ data }) => {
  const [open, setOpen] = useState(false);
  const toggleSearch = () => {
    setOpen(!open);
  };
  const handleBlur = () => {
    setOpen(false);
  };

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord === ''){
      setFilteredData([]);
    }else{
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <BiSearchAlt2 className='w-6 h-6 text-fontColor' onClick={toggleSearch} />
      <div
        className={`relative transition-all duration-300 ease-in-out ${
          open ? 'visible' : 'invisible'
        }`}>
        <input
          type='search'
          onChange={handleFilter}
          className={`text-xs transition-all duration-300 ease-in-out border-b-2 border-gray-300 rounded-md focus:outline-none hover:outline-none ${
            open ? 'w-52 ml-2 p-2' : 'w-0 p-0'
          }`}
          placeholder='Search...'
          onBlur={handleBlur}
        />
        {filteredData.length != 0 && (
          <Card
            className={`overflow-x-hidden mt-1 px-3 py-2 w-[20em] absolute right-0 md:w-[30em] dataResult ${
              open ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className='flex flex-col h-[15em] overflow-y-auto scrollbar-hide'>
              {filteredData.slice(0, 9).map((value) => (
                <>
                  <Link
                    to={value.link}
                    className='m-1 p-1 text-sm hover:bg-gray-100 text-fontColor'>
                    {value.title}
                  </Link>
                </>
              ))}
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default SearchBar;
