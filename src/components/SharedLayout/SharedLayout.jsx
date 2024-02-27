import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Header, Link } from './SharedLayout.styled';
import { ReactComponent as FilmSvg } from '../../images/film.svg';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <FilmSvg />
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default SharedLayout;
