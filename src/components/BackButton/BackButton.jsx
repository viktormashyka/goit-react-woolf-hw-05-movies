import { Button, Text } from './BackButton.styled';
import { ReactComponent as UndoSvg } from '../../images/undo.svg';

import { ReactComponent as FilmSvg } from '../../images/film.svg';

const BackButton = () => {
  const handleBack = () => {
    console.log('Back button clicked');
  };

  return (
    <Button onClick={handleBack}>
      <UndoSvg /> <Text>Go back</Text>
    </Button>
  );
};

export default BackButton;
