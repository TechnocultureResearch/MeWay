import { Text } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
} from "react-native-reanimated";
const SwipeUp = () => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(-40),
            withDelay(1500, withTiming(0)),
            withTiming(-40)
          ),
          -1
        ),
      },
    ],
    opacity: withRepeat(
      withSequence(
        withDelay(1500, withTiming(0)),
        withDelay(300, withTiming(1))
      ),
      -1
    ),
  }));
  return (
    <Animated.Text className="text-3xl" style={[{}, animatedStyle]}>
      swipe up to open
    </Animated.Text>
  );
};

export default SwipeUp;
