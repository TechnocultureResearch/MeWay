import React, { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { gazeMachine } from "../machines/navigationMachine";
import { EventObject, InterpreterFrom } from "xstate";

export const GlobalStateContext = createContext({
  gazeService: {} as InterpreterFrom<typeof gazeMachine>,
});

export const GlobalStateProvider = (props: any) => {
  const gazeService = useInterpret(gazeMachine);

  return (
    <GlobalStateContext.Provider value={{ gazeService }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
