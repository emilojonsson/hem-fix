import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Logout.module.css";
import dataToStart from "../category/dataToStart";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type Category = {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: Task[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: Task) => void;
};

type LogoutProps = {
  getDataFromAPI: (date: Category[]) => void;
};

function Logout({ getDataFromAPI }: LogoutProps) {
  function handleLogout() {
    getDataFromAPI(dataToStart);
  }

  return (
    <button className={styles.navBarButton} onClick={handleLogout}>
      <LogoutIcon />
    </button>
  );
}

export default Logout;
