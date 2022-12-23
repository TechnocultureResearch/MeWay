import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import DecreaseButton from "./DecreaseButton";
import WidgetShell from "./WidgetShell";
import { useMachine } from "@xstate/react";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";
import Animated, {
  // useSharedValue,
  // useAnimatedStyle,
  // withTiming,
  SlideInDown,
  // SlideInUp,
} from "react-native-reanimated";
import SwipeUp from "./SwipeUp";
const MinimalUi = () => {
  const [state, send] = useMachine<any>(gazeMachine, {
    devTools: true,
  });
  // const animation = useSharedValue({ width: 800 });
  // const animationStyle = useAnimatedStyle(() => ({
  //   width: withTiming(animation.value.width, {
  //     duration: 1000,
  //   }),
  // }));
  // const width = useSharedValue(1024);
  // const animation = useAnimatedStyle(() => {
  //   return {
  //     width: width.value,
  //   };
  // }, []);
  // useEffect(() => {
  //   width.value = withTiming(500, { duration: 10000 });
  // });
  // console.log(state.value);

  return (
    <gazeMachineContext.Provider value={{ state, send }}>
      <View className="flex gap-[15px]">
        <Animated.View>
          <Animated.View
            // style={[{}, state.matches("passenger_present") && animation]}
            className={`h-[70vh]  flex justify-center items-center bg-white
            ${state.matches("passenger_present.attract_gaze") && "w-[70vw]"}
            ${state.matches("passenger_present.fail") && "bg-red-800"}
            ${
              state.matches("passenger_present.hyper_attract_gaze") &&
              "bg-green-800"
            }
            ${state.matches("passenger_present.flip_channel") && "bg-blue-800"}
            
            `}
          >
            <SwipeUp />
            <Text
              className={`text-3xl hidden
            ${state.matches("passenger_present.attract_gaze") && "flex"}
            `}
            >
              Welcome to meway
            </Text>
          </Animated.View>
        </Animated.View>
        <Animated.View
          entering={SlideInDown}
          className="h-[180px] justify-center items-center flex flex-row gap-5  "
        >
          {state.matches("passenger_present") ? <DecreaseButton /> : ""}

          <WidgetShell />
          <WidgetShell />
          {state.matches("passenger_present") ? <RandomApp /> : ""}
          <AddButton />
        </Animated.View>
      </View>
    </gazeMachineContext.Provider>
  );
};

export default MinimalUi;
