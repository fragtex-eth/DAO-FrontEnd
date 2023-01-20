import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import Main from "@/components/main";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "@rainbow-me/rainbowkit/styles.css";
import { ToastContainer, toast } from "react-toastify";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "react-toastify/dist/ReactToastify.css";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/37184/simple-dao/v0.0.2",
});

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "DAO Coinsensus",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>DAO</title>
        <meta
          name="description"
          content="Website to display informations of DAOs and allow to access them"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <ApolloProvider client={client}>
              <Navigation />
              <Main />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </main>
    </>
  );
}
