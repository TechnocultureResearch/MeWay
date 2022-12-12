import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import WidgetShell from "./WidgetShell";
import { GlobalStateContext } from "./GlobalState";
import { useSelector } from "@xstate/react";

const MinimalUi = (props: any) => {
  // const globalServices = useContext(GlobalStateContext);
  // const passengerInSelector = (state: any) => {
  //   state.matches("idle");
  // };
  // const isPassengerIn = useSelector(
  //   globalServices.gazeService,
  //   passengerInSelector
  // );
  // const { send } = globalServices.gazeService;

  return (
    <View className="flex gap-[15px]">
      <View className="h-[70%]  bg-white"></View>
      <View className="h-[180px] justify-center items-center flex flex-row gap-5  ">
        <WidgetShell />
        <WidgetShell />
        <RandomApp />
        <AddButton />
        <TouchableOpacity
        // onPress={() => {
        //   send("PASSENGER_DETECTED");
        // }}
        >
          <Text className="text-4xl font-normal text-white cursor-pointer">
            add app
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MinimalUi;
