// import React, { createContext } from "react";
// import { useInterpret } from "@xstate/react";
// import {
//   deviceContext,
//   gazeMachine,
//   Event,
// } from "../machines/navigationMachine";
// import { InterpreterFrom } from "xstate";

// export const GlobalStateContext = createContext({
//   gazeService: {} as InterpreterFrom<typeof gazeMachine>,
// });

// export const GlobalStateProvider = (props: any) => {
//   const gazeService: any = useInterpret<any>(gazeMachine);

//   return (
//     <GlobalStateContext.Provider value={{ gazeService }}>
//       {props.children}
//     </GlobalStateContext.Provider>
//   );
// };
