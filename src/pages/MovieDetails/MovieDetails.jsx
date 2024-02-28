import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieById } from 'api/api';
import { BackButton } from 'components/BackButton/BackButton';

import {
  Container,
  ContentContainer,
  MovieContainer,
  AdditionalInformation,
  ImageContainer,
  Heading,
  Subheading,
  Text,
  SubheadingContainer,
  Image,
  List,
  Item,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError('');
        const data = await fetchMovieById(movieId);

        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  const yearOfRelease = movie?.release_date?.slice(0, 4);
  const userScore = (Number(movie?.vote_average) * 10)?.toFixed(0);

  const handleBack = () => {
    navigate(location.state ?? '/movies');
  };

  return (
    <Container>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <>
          <BackButton handleBack={handleBack}>Go back</BackButton>
          <MovieContainer>
            <ImageContainer>
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                alt="movie poster"
              />
            </ImageContainer>
            <ContentContainer>
              <Heading>
                {movie.title} ({yearOfRelease})
              </Heading>
              <Text>User score: {userScore}%</Text>
              <Subheading>Overview</Subheading>
              <Text>{movie.overview}</Text>
              <Subheading>Genres</Subheading>
              <SubheadingContainer>
                {movie.genres &&
                  movie?.genres.map(genre => (
                    <Text key={genre.id}>{genre.name}</Text>
                  ))}
              </SubheadingContainer>
            </ContentContainer>
          </MovieContainer>
          <AdditionalInformation>
            <Subheading>Additional information</Subheading>
            <List>
              <Item>
                <Link to="cast">Cast</Link>
              </Item>
              <Item>
                <Link to="reviews">Reviews</Link>
              </Item>
            </List>
          </AdditionalInformation>

          <Outlet />
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
