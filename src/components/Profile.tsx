import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallangesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GabrielAtlas.png" alt="Profile Picture" />
      <div>
        <strong>João Gabriel Betela da Costa</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
