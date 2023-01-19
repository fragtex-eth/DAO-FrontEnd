import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import Main from "@/components/main";
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
        <Navigation />
        <Main />
      </main>
    </>
  );
}
