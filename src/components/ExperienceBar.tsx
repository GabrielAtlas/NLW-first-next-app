import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangeContext";
import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallangesContext
  );

  const percenteToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp </span>
      <div>
        <div style={{ width: `${percenteToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percenteToNextLevel}%` }}
        >
          {" "}
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
