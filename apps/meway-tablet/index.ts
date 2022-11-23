import { registerRootComponent } from "expo";
//No matching version found for eslint-config-custom@* inside the workspace
import { App } from "./src/_app";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
