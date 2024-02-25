import { Container, Header } from './SharedLayout.styled';
import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
