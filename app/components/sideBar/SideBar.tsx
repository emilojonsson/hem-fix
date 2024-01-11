import styles from "./SideBar.module.css";
import RoofingIcon from "@mui/icons-material/Roofing";

function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <button className={styles.sideBarButton}>
        <RoofingIcon />
      </button>
      <button className={styles.sideBarButton}>
        <RoofingIcon />
      </button>
    </div>
  );
}

export default SideBar;
