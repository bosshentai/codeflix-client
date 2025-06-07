import { ChangeEvent, FormEvent } from 'react';

import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

export const SearchForm = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
}: {
  searchTerm: string;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassCircleIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        id='search'
        name='Search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
};
