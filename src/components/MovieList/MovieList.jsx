import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as FilmSvg } from '../../images/film.svg';
import { List, Item } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <FilmSvg />
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
