import { useMachine } from "@xstate/react";
import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { navigationMachine } from "../machines/navigationMachine";
import AddButton from "./AddButton";
import WidgetShell from "./WidgetShell";

const MinimalUi = () => {
  const [state, send] = useMachine(navigationMachine);
  return (
    <View className="flex gap-[15px]">
      <View className="h-[70%]  bg-white">
        <TextInput placeholder={state.value === "addApp" ? "hello" : "none"} />
      </View>
      <View className="h-[180px] justify-center items-center flex flex-row gap-5  ">
        <WidgetShell />
        <WidgetShell />
        <AddButton />
        <TouchableOpacity
          onPress={() => {
            state.value === "addApp" ? send("clickOnApp") : send("ADD_APP");
          }}
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
