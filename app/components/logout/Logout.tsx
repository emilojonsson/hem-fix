import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Logout.module.css";
import dataToStart from "../category/dataToStart";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface ICategory {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: ITask[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: ITask) => void;
}

interface Props {
  getDataFromAPI: (date: ICategory[]) => void;
}

const Logout: React.FC<Props> = ({ getDataFromAPI }) => {
  function handleLogout() {
    getDataFromAPI(dataToStart);
  }

  return (
    <button className={styles.navBarButton} onClick={handleLogout}>
      <LogoutIcon />
    </button>
  );
};

export default Logout;
