import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import DecreaseButton from "./DecreaseButton";
import WidgetShell from "./WidgetShell";
import { useMachine } from "@xstate/react";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
const MinimalUi = () => {
  const [state, send] = useMachine<any>(gazeMachine, {
    devTools: true,
  });
  const opacitty = useSharedValue(0.5);

  const MinimalUiStyle = useAnimatedStyle(() => {
    return {
      opacity: opacitty.value,
    };
  }, []);
  useEffect(() => {
    opacitty.value = withTiming(1, { duration: 500 });
  });

  // const { state, send } = useContext(gazeMachineContext);
  return (
    <gazeMachineContext.Provider value={{ state, send }}>
      <View className="flex gap-[15px]">
        <Animated.View style={[{}, MinimalUiStyle]}>
          <View
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
            <Text
              className={`text-3xl hidden
            ${state.matches("passenger_present.attract_gaze") && "flex"}
            `}
            >
              Welcome to meway
            </Text>
          </View>
        </Animated.View>
        <View className="h-[180px] justify-center items-center flex flex-row gap-5  ">
          {state.matches("passenger_present") ? <DecreaseButton /> : ""}

          <WidgetShell />
          <WidgetShell />
          {state.matches("passenger_present") ? <RandomApp /> : ""}
          <AddButton />
        </View>
      </View>
    </gazeMachineContext.Provider>
  );
};

export default MinimalUi;
