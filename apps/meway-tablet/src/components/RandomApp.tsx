import { useMachine } from "@xstate/react";
import React, { useContext, useEffect } from "react";
import { View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FlipOutYLeft,
} from "react-native-reanimated";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";

const RandomApp = () => {
  const { send, state } = useContext(gazeMachineContext);
  const scale = useSharedValue(0.2);

  const randomAppStyle = useAnimatedStyle(() => {
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
  `}
      exiting={FlipOutYLeft}
      style={[{}, state.matches("passenger_present") && randomAppStyle]}
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
