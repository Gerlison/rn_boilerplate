import styled from 'styled-components/native';
import { spacing } from '~shared/styles/metrics';
import { sizing, styling } from '~shared/styles/fonts';
import colors from '~shared/styles/colors';

export const Container = styled.View`
  min-width: ${props => props.contentSized ? 'auto' : 130};
  padding: ${props => props.contentSized ? 0 : spacing['SMALL']}px;
  border-radius: ${props => props.rounded ? 200 : 3}px;
  border-width: ${props => props.outlined ? 2 : 0}px;
  border-color: ${props => colors[props.backgroundColor || 'PRIMARY']}
  align-items: center;
  justify-content: center;
  background-color: ${props => props.contentSized || props.outlined
    ? 'transparent'
    : colors[props.backgroundColor || 'PRIMARY']
  };
`;

