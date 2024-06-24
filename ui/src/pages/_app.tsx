import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <RecoilRoot>
      <Head>
        <title>Code Practice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Web application that contains leetcode problems and video solutions"
        />
      </Head>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
