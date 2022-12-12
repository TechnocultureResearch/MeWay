import { useMachine } from "@xstate/react";
import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { gazeMachine } from "../machines/navigationMachine";

const AddButton = () => {
  const [state, send] = useMachine(gazeMachine);

  return (
    <TouchableOpacity>
      <View className="h-[62px] w-[62px] cursor-pointer rounded-full flex justify-center items-center border-[1px] border-[white] bg-black">
        <Text className="text-4xl font-normal text-white cursor-pointer">
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
