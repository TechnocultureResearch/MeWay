// import React, { useContext } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import AddButton from "./AddButton";
// import RandomApp from "./RandomApp";
// import DecreaseButton from "./DecreaseButton";
// import WidgetShell from "./WidgetShell";
// import { GlobalStateContext } from "./GlobalState";
// import { useMachine, useSelector } from "@xstate/react";
// import { State, StateFrom } from "xstate";
// import { gazeMachine } from "../machines/navigationMachine";

// const passengerDetector = (state: any) => {
//   return state.matches("passenger_detected");
// };
// const attract_gaze = (state: any) => {
//   return state.matches("attract_gaze");
// };

// const MinimalUi = (props: any) => {
//   const globalServices = useContext(GlobalStateContext);

//   const isPassengerIn = useSelector(
//     globalServices.gazeService,
//     passengerDetector
//   );
//   const AttractGaze = useSelector(globalServices.gazeService, attract_gaze);
//   const { send } = globalServices.gazeService;

//   return (
//     <View className="flex gap-[15px]">
//       <View
//         className={`h-[70%]  bg-white
//       ${AttractGaze ? "w-[64vw]" : ""}

//       `}
//       >
//         {AttractGaze && <RandomApp />}
//       </View>
//       <View className="h-[180px] justify-center items-center flex flex-row gap-5  ">
//         {isPassengerIn && <DecreaseButton />}

//         <WidgetShell />
//         <WidgetShell />
//         {isPassengerIn && <RandomApp />}
//         <AddButton />
//         <TouchableOpacity onPress={() => send("PASSENGER_DETECTED")}>
//           <Text className="text-4xl font-normal text-white cursor-pointer">
//             add app
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default MinimalUi;

import React from "react";
import { View } from "react-native";
import AddButton from "./AddButton";
import RandomApp from "./RandomApp";
import DecreaseButton from "./DecreaseButton";
import WidgetShell from "./WidgetShell";
import { useMachine } from "@xstate/react";
import { gazeMachine, gazeMachineContext } from "../machines/navigationMachine";

const MinimalUi = () => {
  const [state, send] = useMachine<any>(gazeMachine, {
    devTools: true,
  });

  return (
    <gazeMachineContext.Provider value={{ send, state }}>
      <View className="flex gap-[15px]">
        <View>
          <View
            className={`h-[70%]  bg-white
      ${state.matches("attract_gaze") ? "w-[64vw]" : ""}

      `}
          >
            {state.matches("attract_gaze") && <RandomApp />}
          </View>
        </View>
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
