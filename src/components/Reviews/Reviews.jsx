import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'api/api';
import { List, Item, Text, Subheading } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviewsById(movieId);

        setReviews(results);
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
      {!error && !isLoading && reviews?.length > 0 ? (
        <List>
          {reviews.map(el => (
            <Item key={el.id}>
              <Subheading>Author: {el.author}</Subheading>
              <Text>{el.content}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <Text>We don't have any reviews fot this movie</Text>
      )}
    </>
  );
};

export default Reviews;
