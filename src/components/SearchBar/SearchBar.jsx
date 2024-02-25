import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchBarHeader,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    setSearch(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(search);
    setSearch('');
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
