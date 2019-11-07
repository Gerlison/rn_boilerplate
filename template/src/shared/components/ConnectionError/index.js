//@flow
import React from 'react';
import { Image } from './styles';
import { Container, Text } from '~shared/styles/theme';
import { spacing } from '~shared/styles/metrics';
import Button from '~shared/components/Buttons';

function ConnectionError(props: properties) {
  return (
    <Container style={{marginTop: spacing['LARGEST']}} alignItems="center">
      <Image />
      <Text size="LARGE">Something goes wrong</Text>
      <Button.Transparent onPress={props.onPress} style={{marginTop: spacing['SMALL']}}>
        Try again
      </Button.Transparent>
    </Container>
  );
}

type properties = {
  onPress: Function
};

export default ConnectionError;