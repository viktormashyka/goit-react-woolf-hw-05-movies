import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { Image, List, Item, ImageContainer, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      try {
        setIsLoading(true);
        setError('');
        const { cast } = await fetchMovieCreditsById(movieId);

        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {!error && !isLoading && cast.length > 0 ? (
        <List>
          {cast.map(el => (
            <Item key={el.id}>
              <ImageContainer>
                <Image
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                      : 'https://via.placeholder.com/100x150'
                  }
                  alt=""
                />
              </ImageContainer>
              <Text>{el.name}</Text>
              <Text>Character: {el.character}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <Text>We don't have cast details fot this movie</Text>
      )}
    </>
  );
};

export default Cast;
