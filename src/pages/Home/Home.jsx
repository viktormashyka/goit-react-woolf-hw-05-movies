import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Container, Heading } from 'pages/Home/Home.styled';
import { fetchTrendingMoviesToday } from 'api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendingMoviesToday();

        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && movies.length > 0 && (
        <>
          <Heading>Trending today</Heading>
          <MovieList movies={movies} />
        </>
      )}
    </Container>
  );
};

export default Home;
