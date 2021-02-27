import CompletedChallanges from "../components/CompletedChallanges";
import Coutdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import Head from "next/head";

import styles from "../styles/pages/Home.module.css";
import ChallangeBox from "../components/ChallangeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExperienceBar />

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
    </div>
  );
}
