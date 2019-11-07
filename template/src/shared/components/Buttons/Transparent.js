/**
  @flow
 */

import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text } from '~shared/styles/theme'
import { Container } from './styles';

import colors from '~shared/styles/colors'
import _ from 'lodash'

function Transparent(props: properties) {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={props.isLoading ? null : props.onPress}>
      <Container {...props} contentSized {...props.containerStyle}>
        {props.isLoading 
          ? (
            <ActivityIndicator 
              size="small" 
              color={colors[_.get(props, 'textStyle.color') || 'PRIMARY']} />
          )
          : (
            <Text color="PRIMARY" {...props.textStyle}>
              {props.children}
            </Text>
          )
        }
      </Container>
    </TouchableOpacity>
  );
}

type properties = {
  onPress?: Function,
  containerStyle?: Object,
  textStyle?: Object,
  isLoading?: boolean,
  children: any,
}

export default Transparent;