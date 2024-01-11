import RoofingIcon from "@mui/icons-material/Roofing";
import NavBarButton from "../navBarButton/NavBarButton";
import styles from "./NavBar.module.css";
import Logout from "../logout/Logout";

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
        <NavBarButton text="Uppgifter" href="/tasks" iconName="tasks" />
        <NavBarButton text="Planering" href="/planning" iconName="tasks" />
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
