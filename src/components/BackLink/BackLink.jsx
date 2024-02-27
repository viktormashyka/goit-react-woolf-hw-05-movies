import { ReactComponent as UndoSvg } from '../../images/undo.svg';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <UndoSvg />
      {children}
    </StyledLink>
  );
};
