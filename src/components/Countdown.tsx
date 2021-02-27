import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export default function Coutdown() {
  const {
    seconds,
    minutes,
    finished,
    active,
    stopCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");

  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {finished ? (
        <button className={styles.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {active ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={stopCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
