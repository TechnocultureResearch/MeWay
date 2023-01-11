// // This file was automatically generated. Edits will be overwritten

// export interface Typegen0 {
//   "@@xstate/typegen": true;
//   internalEvents: {
//     "xstate.after(1000)#gaze.passenger_present.in_gaze.cg3": {
//       type: "xstate.after(1000)#gaze.passenger_present.in_gaze.cg3";
//     };
//     "xstate.after(13000)#gaze.passenger_present.attract_gaze": {
//       type: "xstate.after(13000)#gaze.passenger_present.attract_gaze";
//     };
//     "xstate.after(15000)#gaze.passenger_present.flip_channel": {
//       type: "xstate.after(15000)#gaze.passenger_present.flip_channel";
//     };
//     "xstate.after(15000)#gaze.passenger_present.hyper_attract_gaze": {
//       type: "xstate.after(15000)#gaze.passenger_present.hyper_attract_gaze";
//     };
//     "xstate.after(3000)#gaze.passenger_present.in_gaze.idle": {
//       type: "xstate.after(3000)#gaze.passenger_present.in_gaze.idle";
//     };
//     "xstate.after(5000)#gaze.passenger_present.idle": {
//       type: "xstate.after(5000)#gaze.passenger_present.idle";
//     };
//     "xstate.after(5000)#gaze.passenger_present.in_gaze.cg1": {
//       type: "xstate.after(5000)#gaze.passenger_present.in_gaze.cg1";
//     };
//     "xstate.after(8000)#gaze.passenger_present.in_gaze.cg2": {
//       type: "xstate.after(8000)#gaze.passenger_present.in_gaze.cg2";
//     };
//     "xstate.init": { type: "xstate.init" };
//   };
//   invokeSrcNameMap: {};
//   missingImplementations: {
//     actions: "refresh_playlist";
//     delays: never;
//     guards: never;
//     services: never;
//   };
//   eventsCausingActions: {
//     consoleEvent: "xstate.after(5000)#gaze.passenger_present.idle";
//     refresh_playlist: "xstate.after(5000)#gaze.passenger_present.idle";
//   };
//   eventsCausingDelays: {};
//   eventsCausingGuards: {};
//   eventsCausingServices: {};
//   matchesStates:
//     | "idle"
//     | "passenger_present"
//     | "passenger_present.attract_gaze"
//     | "passenger_present.fail"
//     | "passenger_present.flip_channel"
//     | "passenger_present.hyper_attract_gaze"
//     | "passenger_present.idle"
//     | "passenger_present.in_gaze"
//     | "passenger_present.in_gaze.cg1"
//     | "passenger_present.in_gaze.cg2"
//     | "passenger_present.in_gaze.cg3"
//     | "passenger_present.in_gaze.idle"
//     | "passenger_present.in_gaze.offer_gift_coupon"
//     | {
//         passenger_present?:
//           | "attract_gaze"
//           | "fail"
//           | "flip_channel"
//           | "hyper_attract_gaze"
//           | "idle"
//           | "in_gaze"
//           | { in_gaze?: "cg1" | "cg2" | "cg3" | "idle" | "offer_gift_coupon" };
//       };
//   tags: never;
// }
