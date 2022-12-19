import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import { View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { gazeMachine } from "../machines/navigationMachine";

const RandomApp = () => {
  const [state, send] = useMachine<any>(gazeMachine, {});
  const scale = useSharedValue(0.2);

  const reAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);
  useEffect(() => {
    scale.value = withTiming(1, { duration: 500 });
  });
  return (
    <Animated.View
      className={`w-[180px] m-[15px] h-[180px] bg-white  flex  
      ${state.matches("passenger_present") ? "hidden" : ""}

    
  `}
      style={[{}, reAnimatedStyle]}
    >
      <Button
        title="SHOW"
        onPress={() => {
          send("GAZE");
          console.log("this is gaze");
        }}
      />
    </Animated.View>
  );
};

export default RandomApp;
