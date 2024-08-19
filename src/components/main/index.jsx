import styles from "./styles.module.css";
import apple_green from "../../assets/apple_green.svg";
import apple_blue from "../../assets/apple_blue.svg";
import google_green from "../../assets/google_green.svg";
import google_blue from "../../assets/google_blue.svg";
import x_green from "../../assets/x_green.svg";
import x_blue from "../../assets/x_blue.svg";
import { useState } from "react";

function Main() {
  const [isAppleHovered, setIsAppleHovered] = useState(false);
  const [isGoogleHovered, setIsGoogleHovered] = useState(false);
  const [isXHovered, setIsXHovered] = useState(false);
  return (
    <div className={styles.main_container}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <h2>Sign in</h2>
      <h2>with</h2>
      <div className={styles.btn_container}>
        <button
          onMouseEnter={() => setIsAppleHovered(true)}
          onMouseLeave={() => setIsAppleHovered(false)}
        >
          <img
            className={styles.apple}
            src={isAppleHovered ? apple_blue : apple_green}
            alt="Apple logo"
            style={{
              transform: isAppleHovered ? "translateY(-6px)" : "translateY(0)",
              cursor: "pointer",
            }}
          />
        </button>
        <button
          onMouseEnter={() => setIsGoogleHovered(true)}
          onMouseLeave={() => setIsGoogleHovered(false)}
        >
          <img
            className={styles.google}
            src={isGoogleHovered ? google_blue : google_green}
            alt="Google logo"
            style={{
              transform: isGoogleHovered ? "translateY(-6px)" : "translateY(0)",
              cursor: "pointer",
            }}
          />
        </button>
        <button
          onMouseEnter={() => setIsXHovered(true)}
          onMouseLeave={() => setIsXHovered(false)}
        >
          <img
            className={styles.x}
            src={isXHovered ? x_blue : x_green}
            alt="X logo"
            style={{
              transform: isXHovered ? "translateY(-6px)" : "translateY(0)",
              cursor: "pointer",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Main;
