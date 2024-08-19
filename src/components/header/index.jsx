import styles from "./styles.module.css";
import spotify from "../../assets/spotify.svg";

function Header() {
  return (
    <div className={styles.header_container}>
      <img className={styles.logo} src={spotify} alt="Spotify logo" />
    </div>
  );
}

export default Header;
