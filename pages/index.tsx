import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import PageTitle from "Components/PageTitle";
import Container from "Components/Container";
import Ballots from "Components/Ballots";
import * as API from "Services/api";
import { SubmitBallotButton } from "Components/buttons";

const Home: NextPage = () => {
  const [ballots, setBallots] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await API.getBallots();
      if (response.ok) {
        setBallots(response.items);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Take Home Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <PageTitle>AWARDS 2021</PageTitle>
        <Ballots ballots={ballots} />
        <SubmitBallotButton />
      </Container>
    </>
  );
};

export default Home;
