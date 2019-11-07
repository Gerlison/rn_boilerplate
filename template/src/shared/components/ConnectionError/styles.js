import styled from 'styled-components/native';

export const Image = styled.Image.attrs(props => ({
  resizeMode: 'contain',
  source: require('~images/noConnection.png')
}))`
  width: 100%;
  height: 160px;
`;
