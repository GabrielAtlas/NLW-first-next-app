import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallangesContext } from "./ChallangeContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  finished: boolean;
  active: boolean;
  startCountdown: () => void;
  stopCountdown: () => void;
}

interface CountdownChildrenProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownContextProvider({ children }: CountdownChildrenProps) {
  const { startNewChallange } = useContext(ChallangesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [finished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setActive(true);
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.1 * 60);
    setFinished(false);
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
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        finished,
        active,
        startCountdown,
        stopCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
