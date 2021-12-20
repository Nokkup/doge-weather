import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
