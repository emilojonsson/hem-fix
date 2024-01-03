import styles from "./SideBar.module.css";
import RoofingIcon from "@mui/icons-material/Roofing";

interface Props {
  spanRow: number;
}

const SideBar: React.FC<Props> = ({ spanRow }) => {
  return (
    <div
      className={styles.sideBarContainer}
      style={{ gridRow: `span ${spanRow}` }}
    >
      <button className={styles.sideBarButton}>
        <RoofingIcon />
      </button>
      <button className={styles.sideBarButton}>
        <RoofingIcon />
      </button>
    </div>
  );
};

export default SideBar;
