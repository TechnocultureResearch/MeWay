import React from "react";
import { View, Text } from "react-native";

const AddButton = () => {
  return (
    <View className="h-[62px] w-[62px] cursor-pointer rounded-full flex justify-center items-center border-[1px] border-[white] bg-black">
      <Text className="text-4xl font-normal text-white cursor-pointer">+</Text>
    </View>
  );
};

export default AddButton;
