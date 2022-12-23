import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gazeMachineContext } from "../machines/navigationMachine";

const AddButton = () => {
  const { send } = useContext(gazeMachineContext);

  return (
    <TouchableOpacity onPress={() => send("PASSENGER_DETECTED")}>
      <View className="h-[62px] w-[62px] cursor-pointer rounded-full flex justify-center items-center border-[1px] border-[white] bg-black">
        <Text className="text-4xl font-normal text-white cursor-pointer">
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
