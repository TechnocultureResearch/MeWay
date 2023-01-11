import { createMachine, interpret } from "xstate";
import { createContext } from "react";
import { useService } from "@xstate/react/lib/fsm";
export interface deviceContext {
  volume: number;
  gaze_timeout_s: number;
}

export type Event =
  | { type: "PASSENGER_DETECTED"; value: "idle" }
  | {
      type: "PASSENGER_LEFT";
      value: "idle";
    }
  | {
      type: "GAZE";
      value: "in_gaze";
    }
  | {
      type: "GAZE_REMOVED";
      value: "idle";
    };

export type state =
  | {
      value: "passenger_present";
      context: deviceContext;
    }
  | {
      value: "in_gaze";
      context: deviceContext;
    }
  | {
      value: "attract_gaze";
      context: deviceContext;
    }
  | {
      value: "hyper_attract_gaze";
      context: deviceContext;
    }
  | {
      value: "flip_channel";
      context: deviceContext;
    }
  | {
      value: "fail";
      context: deviceContext;
    };

export const gazeMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5RQIYC8wDoCWEA2YAxAAoCCAyuQKIByA4lQEoD6AIlQCpUDCXrA2gAYAuolAAHAPaxsAF2ySAdmJAAPRAEYArACZMANkFGdAZgAs+nYK0BOAOxmANCACemkxsw3vNgBxnvQTsbQzMAXzDnVAxMcRRYWDBFGAAnZnEUuCTZEgpqeiZmABkqADEOIVEkECkZeSUVdQQTK0wWjV8dMy1fTrMrO2c3ZsEvfX99DR07QXt9MzNfCKj0LDiEpNT0zMTFWRx8IjpSAC0qSpVauQVlaqaNIKHNXTNMHS6bQV87Fp15k2WIGia3iuy2GSyewOBEIqlgshQsiwKAAZkiUgAKMxGQQASkIwNioM2YDSEN2+1wBAu1Su9VuoCaOg0dgMONMFistgcTwQti0mDsDhs2IWXy6WkBhPWYNJ20h+0RshSKAAxrJmMDCMczjSJNJrg07poWbyNGYfoKPqZ5hZenYpasiRtknLydlMEqVerNatYfDEci0aSMSYcfjpcTXWSdh6vWqNcC9TUDfTGogtHZfF4ploLT9BCYWr5eaEvD5FtjZotHTEZSSYwrMAALFziOXxn1anXnESXVM3dPNDQmAw+fT6Ow6XT2HRmky6LzCjwPWaCDS1kEu8GxqGt9tpTuJv1whFIz3BzFacMEp316Pyikttsd2TKhO+jDJumD43D0f6OOk7Tjos5muaryzN4CwaIBXSbs6sqNk+KJ4Ng4jMKqzYoIoihgHg2qnL2VT6nUv6MhmMxvAEfi6FmJiGCYZqmHo7wBCYvhaJmGgjgh947k2qHoZh2G4fh-pnkG6IYtoN6Rtubq7vsQkYVhOF4Xg34DkaFF8r4owfLR0y+Axhbgf4VrsVxHidEskRAneUYCShKDYARPZaWROlqBm+nUd4nHGaZTGuCa5hvB814LP0uh8U5ilNtgiifkcRHMIwVAALIAPIAGpUAIfa0tpDI+Qgk68qKmA0fYRj0XYHRxQpyEeklKXQkQp6Bhe0lhkYEaOc1j6tclhJUmAnmGqVTT6fobyWBYtjGLM852HNU4BFYXS9COdkrHW8UtVCbWEqqUAaBJ3WotJ179beB1De6x2jU6Z0aJNaZ-g8OjZlMAQmSYMy6Bxq3rdagjbb4u1NUhw3Pe1Z06Jd57XSG+l3fJsNPZSL0xIjH3kWVf02F43y3f4XwmDYoOWTYW2LFDHEww2cM4wjUAmMjUkhqueL3VuWNKTguNYGdJgE959wWp4nFGB0K7aIDNMbXTEMM9DgKKJIEBwCowL9l502IAAtKBvLG1oc1aB4eYLv0lg2AuCHjQbU1Dv0vLfJgPRFu8HScVo2g6MzD7Y67n26Ro1OhcOc0+CKk72AxgEAvZmMs9jHXh4TTT2JVnSYN8-1y4sghmKn+0CxnQtHil2eS4ggOjB0djW58iwNR4vK2K8wo2D0AeAZKaeDYLTb7q+75dqs9dGwgI5zjHPEBN7sGGGTk62CHzkeipInqfhs-u6BYxdIYPwLsDWjgeXmBQSKEMilHrfbwlLluUff4zKOgddNOUchCFNfJe5o9D6RMmXa2C4o6vyOmzfWxVDZDn0IuCcXR+jlyhptZivQIqLEdrMaYE4HQjwemPJ8J0nQu0QW7L+RgDALQwRxc0dNVoChVrBQGgMGrD0rohauiURaYDep-XSdM9AvH7oECYZgNBsNpvMIIgCLSwNZsLdmOhRFEwgm0IuQpAbfGCPIlWijgiThUaQquochaULxhzLR9xk7+Wgv4T4IpjEfFMYA3hDkyECIoUIyQKIURyigNgNEmFJAAFcpClR-A3eeA9MA8X-qYKO2Jo7DBHK3WmnCfhCm0BECIQA */
  createMachine(
    {
      schema: {
        context: {} as deviceContext,
        events: {} as Event,
      },

      // tsTypes: {} as import("./navigationMachine.typegen").Typegen0,

      predictableActionArguments: true,
      id: "gaze",
      initial: "idle",
      context: {
        volume: 50,
        gaze_timeout_s: 1.0,
      },
      states: {
        idle: {
          on: {
            PASSENGER_DETECTED: "passenger_present",
          },
        },

        passenger_present: {
          initial: "idle",
          on: {
            PASSENGER_LEFT: "idle",
          },
          states: {
            idle: {
              on: {
                GAZE: "in_gaze",
              },
              after: {
                10000: {
                  target: "attract_gaze",
                  actions: "consoleEvent",
                },
              },
            },
            attract_gaze: {
              entry: ["refresh_playlist"],
              on: {
                GAZE: "in_gaze",
              },
              after: {
                13000: "hyper_attract_gaze",
              },
            },
            hyper_attract_gaze: {
              on: {
                GAZE: "in_gaze",
              },
              after: {
                15000: "flip_channel",
              },
            },
            flip_channel: {
              on: {
                GAZE: "in_gaze",
              },
              after: {
                15000: "fail",
              },
            },
            fail: {
              on: {
                GAZE: "flip_channel",
              },
            },
            in_gaze: {
              on: {
                GAZE_REMOVED: "idle",
              },
              initial: "idle",
              states: {
                idle: {
                  after: {
                    3000: "cg1",
                  },
                },
                cg1: {
                  after: {
                    5000: "cg2",
                  },
                },
                cg2: {
                  after: {
                    8000: "cg3",
                  },
                },
                cg3: {
                  after: {
                    1000: "offer_gift_coupon",
                  },
                },
                offer_gift_coupon: {},
              },
            },
          },
        },
      },
    },
    {
      actions: {
        consoleEvent: (context, event) => {
          console.log(event);
        },
      },
    }
  );

export const gazeMachineContext = createContext<any>({});
// export const gazeStateService = interpret(gazeMachine).start()
// export const handleGaze = ()=>{
//   gazeStateService.send('PASSENGER_DETECTED')
// }
