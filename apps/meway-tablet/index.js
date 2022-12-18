/* eslint-disable no-undef */
import * as Sentry from 'sentry-expo';
Sentry.init({
  dsn: 'https://321935807a544823a2ce6ecfcdac2f67@o1430003.ingest.sentry.io/4504351639470080',
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});
import { registerRootComponent } from "expo";
import { App } from "./src/_app"; /* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */
registerRootComponent(Sentry.Native.wrap(App));
