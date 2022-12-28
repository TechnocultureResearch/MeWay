import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import DecreaseButton from "./DecreaseButton";
import WidgetShell from "./WidgetShell";
import { useMachine } from "@xstate/react";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";
import Animated, {
  useAnimatedStyle,
  withSpring,
  SlideInDown,
  useSharedValue,
} from "react-native-reanimated";
import SwipeUp from "./SwipeUp";
const MinimalUi = () => {
  const width = useSharedValue(1300);
  const minimalUiStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(width.value, {
        damping: 10,
        mass: 3,
        stiffness: 117,
        velocity: 50,
      }),
    };
  }, []);
  useEffect(() => {
    if (state.matches("passenger_present")) {
      width.value = 950;
    } else {
      width.value = 1300;
    }
  });

  const [state, send] = useMachine<any>(gazeMachine, {
    devTools: true,
  });

  return (
    <gazeMachineContext.Provider value={{ state, send }}>
      <View className="flex gap-[15px] ">
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
