import { useMachine } from "@xstate/react";
import React from "react";
import { View, Button } from "react-native";
import { gazeMachine } from "../machines/navigationMachine";

const RandomApp = () => {
  const [state, send] = useMachine<any>(gazeMachine, {});
  return (
    <View
      className={`w-[180px] m-[15px] h-[180px] bg-white  flex  
      ${state.matches!("passenger_present") ? "hidden" : ""}
  `}
    >
      <Button
        title="SHOW"
        onPress={() => {
          send("GAZE");
          console.log("this is gaze");
        }}
      />
    </View>
  );
};

export default RandomApp;
