import { ReactComponent as UndoSvg } from '../../images/undo.svg';
import { Button } from 'components/BackButton/BackButton.styled';

export const BackButton = ({ handleBack, children }) => {
  return (
    <Button onClick={handleBack}>
      <UndoSvg />
      {children}
    </Button>
  );
};
