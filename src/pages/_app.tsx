import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import "../styles/globals.css";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} /> <Toaster richColors closeButton />
    </Layout>
  );
}
