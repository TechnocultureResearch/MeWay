import React, { useContext, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import DecreaseButton from "./DecreaseButton";
import WidgetShell from "./WidgetShell";
import { useMachine } from "@xstate/react";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";
import Animated, {
  // useSharedValue,
  useAnimatedStyle,
  // withTiming,
  withSpring,
  SlideInDown,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  // SlideInUp,
} from "react-native-reanimated";
import SwipeUp from "./SwipeUp";
const MinimalUi = () => {
  const springAnimation = useSharedValue(0);
  const width = useSharedValue(1300);
  const minimalUiStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(width.value, {
        damping: 40,
        mass: 22,
        stiffness: 300,
      }),
    };
  }, []);
  useEffect(() => {
    if (state.matches("passenger_present")) {
      width.value = withTiming(950, { duration: 500 });
    } else {
      width.value = withTiming(1300, { duration: 500 });
    }
  });
  const springAnimationStyle = useAnimatedStyle(() => {
    return {
      width: springAnimation.value,
    };
  });
  const startSpringAnimation = () => {
    "worklet";
    springAnimation.value = withSpring(250, {
      damping: 15,
      mass: 12,
      stiffness: 200,
    });
  };
  const [state, send] = useMachine<any>(gazeMachine, {
    devTools: true,
  });

  return (
    <gazeMachineContext.Provider value={{ state, send }}>
      <View className="flex gap-[15px]">
        <Animated.View>
          <Animated.View
            style={[{}, minimalUiStyle]}
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
            <Animated.View style={[{}, springAnimationStyle]}>
              <TouchableWithoutFeedback onPress={startSpringAnimation}>
                <View className="w-10 h-10 bg-purple-600"></View>
              </TouchableWithoutFeedback>
            </Animated.View>
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
