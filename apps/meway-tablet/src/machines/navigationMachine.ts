import { createMachine } from "xstate";

interface deviceContext {
  volume: number;
  gaze_timeout_s: number;
}
type Event= 
| { type: 'PASSENGER_DETECTED',
value: "idle",
} | 
{
  type: "PASSENGER_LEFT",
  value: 'idle'
}
|{
  type: 'GAZE', 
  value: "in_gaze",
} |{
  type: "GAZE_REMOVED",
  value: 'idle'
}


export const gazeMachine = createMachine<deviceContext, Event>({
  predictableActionArguments:true,
  id: "gaze",
  initial: "idle",
  
  context: {
    volume: 50,
    gaze_timeout_s: 1.0,},

 
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
            4000: {
              target: "attract_gaze",
            },
          },
        },
        attract_gaze: {
          entry: ["refresh_playlist"],
          on: {
            GAZE: "in_gaze",
          },
          after: {
            3000: "hyper_attract_gaze",
          },
        },
        hyper_attract_gaze: {
          on: {
            GAZE: "in_gaze",
          },
          after: {
            5000: "flip_channel",
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
            "": "flip_channel",
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
});