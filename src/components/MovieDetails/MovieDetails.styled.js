import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 16px;
`;

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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Heading = styled.h1`
  font-size: 24px;
`;

export const Subheading = styled.h2`
  font-size: 18px;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const SubheadingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;
`;

export const Item = styled.li``;
