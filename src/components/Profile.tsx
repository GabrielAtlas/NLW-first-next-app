import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GabrielAtlas.png" alt="Profile Picture" />
      <div>
        <strong>João Gabriel Betela da Costa</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}
