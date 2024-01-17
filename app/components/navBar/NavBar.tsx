"use client";
import RoofingIcon from "@mui/icons-material/Roofing";
import NavBarButton from "../navBarButton/NavBarButton";
import styles from "./NavBar.module.css";
import Logout from "../logout/Logout";
import { usePathname } from "next/navigation";

function NavBar() {
  const highlightColor = "#c3b01b";
  const subPageColors = {
    tasks: "#a1a1a1",
    planning: "#a1a1a1",
    settings: "#a1a1a1",
    recipe: "#a1a1a1",
    // receipt : "#a1a1a1",
  };
  const activePage = usePathname();

  if (activePage.endsWith("tasks")) {
    subPageColors.tasks = highlightColor;
  } else if (activePage.endsWith("settings")) {
    subPageColors.settings = highlightColor;
  } else if (activePage.endsWith("planning")) {
    subPageColors.planning = highlightColor;
  } else if (activePage.endsWith("recipe")) {
    subPageColors.recipe = highlightColor;
  }

  return (
    <div className={styles.navBarContainer}>
      <h1 className={styles.navBarTitle}>
        <RoofingIcon />
        HemFix
      </h1>
      <div className={styles.buttonContainer}>
        <Logout />
        {/* <NavBarButton text="Packlistor" href="/reciept" iconName="receipt" />
        <NavBarButton text="Kvitton" href="/reciept" iconName="receipt" />
        <NavBarButton text="Anteckningar" href="/" iconName="notes" /> */}
        <NavBarButton
          text="Recept"
          href="/recipe"
          iconName="recipe"
          color={subPageColors.recipe}
        />
        <NavBarButton
          text="Uppgifter"
          href="/tasks"
          iconName="tasks"
          color={subPageColors.tasks}
        />
        <NavBarButton
          text="Planering"
          href="/planning"
          iconName="tasks"
          color={subPageColors.planning}
        />
        <NavBarButton
          text="Inställningar"
          href="/settings"
          iconName="settings"
          color={subPageColors.settings}
        />
      </div>
    </div>
  );
}

export default NavBar;
