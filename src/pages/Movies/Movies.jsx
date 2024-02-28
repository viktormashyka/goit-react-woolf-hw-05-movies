import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesByTitle } from 'api/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Container } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    async function fetchData() {
      if (!searchQuery) return;
      try {
        setIsLoading(true);
        setError('');
        const { results } = await fetchMoviesByTitle(searchQuery);

        if (results.length === 0) {
          toast.info(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }

        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <Container>
      <SearchBar />
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && movies?.length > 0 && (
        <MovieList movies={movies} />
      )}
    </Container>
  );
};

export default Movies;
