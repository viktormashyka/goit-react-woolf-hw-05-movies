import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchBarHeader,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    searchQuery && setSearch(searchQuery);
  }, [searchParams]);

  const handleChange = evt => {
    setSearch(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: search });
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          value={search}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
      </SearchForm>
    </SearchBarHeader>
  );
};
