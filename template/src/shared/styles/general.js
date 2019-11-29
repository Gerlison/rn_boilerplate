import styled from 'styled-components/native';
import { spacing } from '~shared/styles/metrics';
import { sizing, styling } from '~shared/styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.BACKGROUND};
`;

export const Text = styled.Text`
  font-size: ${props => sizing[props.size || 'MEDIUM']}px;
  font-family: ${props => styling[props.weight ? `ROBOTO_${props.weight}` : 'ROBOTO_REGULAR']};
  color: ${props => props.theme[props.color || 'DARKEST']};
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  size: props.size || 'small',
  color: props.theme[props.color || 'PRIMARY']
}))``;