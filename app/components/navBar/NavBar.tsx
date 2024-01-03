import RoofingIcon from "@mui/icons-material/Roofing";
import NavBarButton from "../navBarButton/NavBarButton";
import styles from "./NavBar.module.css";
import Login from "../login/Login";
import Logout from "../logout/Logout";

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
  getDataFromAPI: (data: ICategory[]) => void;
  saveToken: (token: string) => void;
}

const NavBar: React.FC<Props> = ({ getDataFromAPI, saveToken: token }) => {
  return (
    <div className={styles.navBarContainer}>
      <h1 className={styles.navBarTitle}>
        <RoofingIcon />
        HemFix
      </h1>
      <div>
        <Login getDataFromAPI={getDataFromAPI} saveToken={token} />
        <Logout getDataFromAPI={getDataFromAPI} />
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
};

export default NavBar;
