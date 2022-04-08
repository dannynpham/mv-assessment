import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as API from "Services/api";

const Home: NextPage = () => {
  React.useEffect(() => {
    (async () => {
      const response = await API.getBallots();
      console.log(response);
    })()
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Take Home Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Good Luck!</h1>
      </main>
    </div>
  );
};

export default Home;
