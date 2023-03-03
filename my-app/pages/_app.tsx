import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginPage from "./login";
import NProgress from "nextjs-progressbar";
import "nprogress/nprogress.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <NProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
