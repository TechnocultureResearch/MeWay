import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeScreen } from "./screens/home";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
export const App = () => {
  const progress = useSharedValue(0);

  const reAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  useEffect(() => {
    progress.value = withTiming(1, { duration: 2000 });
  });
  return (
    <SafeAreaView>
      <Animated.View className={`bg-black`} style={[{}, reAnimatedStyle]}>
        <HomeScreen />
      </Animated.View>
    </SafeAreaView>
  );
};
