import React, { useState } from 'react';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button, Input } from '..';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';

const Search = ({className, ...props}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const setInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const goToSearch = (): void => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    console.log(e);
  };

  return (
    <form
      className={cn(className,styles.search)}
      role="search"
      {...props} 
    >
      <Input
        className={styles.input}
        placeholder='Search...'
        value={search}
        onChange={setInput}
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.button}
        appearance='primary'
        onClick={goToSearch}
        aria-label="Search"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};

export default Search;
