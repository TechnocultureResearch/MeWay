import "../styles/globals.css";

import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="h-[100vh] overflow-hidden bg-[#fff]">
      <Component {...pageProps} />
    </div>
  );
}
