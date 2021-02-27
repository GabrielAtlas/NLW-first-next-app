import CompletedChallanges from "../components/CompletedChallanges";
import Coutdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import ChallangeBox from "../components/ChallangeBox";
import { CountdownContextProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallangesProvider } from "../contexts/ChallangeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challangesCompleted: number;
}

export const getServerSidePropos: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challangesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted),
    },
  };
};

export default function Home(props: HomeProps) {
  return (
    <ChallangesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challangesCompleted={props.challangesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownContextProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Coutdown />
            </div>
            <div>
              <ChallangeBox />
            </div>
          </section>
        </CountdownContextProvider>
      </div>
    </ChallangesProvider>
  );
}
