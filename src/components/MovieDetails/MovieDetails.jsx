import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieById } from 'api/api';
import BackButton from 'components/BackButton/BackButton';

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
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      try {
        setIsLoading(true);
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

  return (
    <Container>
      <BackButton />
      <MovieContainer>
        <ImageContainer>
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          ) : (
            <Image src="https://via.placeholder.com/200x300" alt="" />
          )}
        </ImageContainer>

        <ContentContainer>
          <Heading>{movie.title}</Heading>
          <Text>User score: {movie.vote_average}</Text>
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
    </Container>
  );
};

export default MovieDetails;
