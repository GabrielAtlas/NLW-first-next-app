import { useState, useEffect, useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangeContext";

import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Coutdown() {
  const { startNewChallange } = useContext(ChallangesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");

  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function startCountdown() {
    setActive(true);
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time == 0) {
      setFinished(true);
      setActive(false);
      startNewChallange();
    }
  }, [active, time]);

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
