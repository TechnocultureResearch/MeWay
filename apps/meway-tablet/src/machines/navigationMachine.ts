import { createMachine } from "xstate";
interface context {
    apps: number;
}
export const navigationMachine = createMachine<context>({
  predictableActionArguments: true,
  id: "MeWayMachine",
  initial: "idle",
  states: {
    idle: {
      on: {
        ADD_APP: {
          target: "addApp",
        },
      },
    },
    addApp: {
      on: {
        clickOnApp: {
          target: "openApponSide",
        },
      },
    },
    openApponSide: {
      on: {
        clickOnSideApp: {
          target: "openApponSide",
          
        },
      },
    },
  },
});


