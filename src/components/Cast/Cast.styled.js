import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 200px;
  height: auto;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  height: 300;
  object-fit: contain;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
