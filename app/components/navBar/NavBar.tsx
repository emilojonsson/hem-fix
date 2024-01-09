import RoofingIcon from "@mui/icons-material/Roofing";
import NavBarButton from "../navBarButton/NavBarButton";
import styles from "./NavBar.module.css";
import Login from "../login/Login";
import Logout from "../logout/Logout";

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

function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <h1 className={styles.navBarTitle}>
        <RoofingIcon />
        HemFix
      </h1>
      <div>
        <Logout />
        <NavBarButton text="Packlistor" href="/reciept" iconName="receipt" />
        <NavBarButton text="Kvitton" href="/reciept" iconName="receipt" />
        <NavBarButton text="Anteckningar" href="/" iconName="notes" />
        <NavBarButton text="Recept" href="/reciept" iconName="receipt" />
        <NavBarButton text="Uppgifter" href="/" iconName="tasks" />
        <NavBarButton text="Planering" href="/" iconName="tasks" />
        <NavBarButton
          text="Inställningar"
          href="/settings"
          iconName="settings"
        />
      </div>
    </div>
  );
}

export default NavBar;
