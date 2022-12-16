import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";

const DecreaseButton = () => {
  const { send, state } = useContext(gazeMachineContext);
  return (
    <TouchableOpacity
      onPress={() => {
        send("PASSENGER_LEFT");
      }}
    >
      <View className="h-[62px] w-[62px] cursor-pointer rounded-full flex justify-center items-center border-[1px] border-[white] bg-black">
        <Text className="text-4xl font-normal text-white cursor-pointer">
          -
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DecreaseButton;
