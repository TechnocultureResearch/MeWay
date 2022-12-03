import React from "react";
import { View } from "react-native";
import AddButton from "./AddButton";
import WidgetShell from "./WidgetShell";

const MinimalUi = () => {
  return (
    <View className="flex gap-[15px]">
      <View className="h-[70%]  bg-white"></View>
      <View className="h-[180px] justify-center items-center flex flex-row gap-5  ">
        <WidgetShell />
        <WidgetShell />
        <AddButton />
      </View>
    </View>
  );
};

export default MinimalUi;
