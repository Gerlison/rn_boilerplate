import { Animated } from 'react-native';

export function oscillateOpacity(value) {
  Animated.loop(
    Animated.sequence([
      Animated.timing(value, {
        toValue: 0.8,
        duration: 1000,
        useNativeDriver: true
      }),
      Animated.timing(value, {
        toValue: 0.4,
        duration: 1000,
        useNativeDriver: true
      }),
    ]),
    {iterations: 10}
  ).start(() => oscillateOpacity(value))
}