import { Link } from 'react-router-dom';
import { ReactComponent as FilmSvg } from '../../images/film.svg';
import { List, Item } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <FilmSvg />
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </Item>
      ))}
    </List>
  );
};
