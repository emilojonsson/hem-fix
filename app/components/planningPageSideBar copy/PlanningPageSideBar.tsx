import styles from "./PlanningPageSideBar.module.css";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Dispatch, SetStateAction } from "react";
import { Task } from "@/app/types/MyTypes";

type PlanningPageSideBarProp = {
  setPlanningTasks: Dispatch<SetStateAction<Task[]>>;
  setPurchaseTasks: Dispatch<SetStateAction<Task[]>>;
};
function PlanningPageSideBar({
  setPlanningTasks,
  setPurchaseTasks,
}: PlanningPageSideBarProp) {
  function sortPlanningOnPriority() {
    setPlanningTasks((prevTasks) => {
      const sortedTasks = [...prevTasks].sort((a, b) => {
        return a.priority === b.priority ? 0 : a.priority ? -1 : 1;
      });
      return sortedTasks;
    });
  }
  function sortPurchaseOnPriority() {
    setPurchaseTasks((prevTasks) => {
      const sortedTasks = [...prevTasks].sort((a, b) => {
        return a.priority === b.priority ? 0 : a.priority ? -1 : 1;
      });
      return sortedTasks;
    });
  }

  return (
    <div className={styles.sideBarContainer}>
      <button className={styles.sideBarButton} onClick={sortPlanningOnPriority}>
        <RoofingIcon />
      </button>
      <button className={styles.sideBarButton} onClick={sortPurchaseOnPriority}>
        <RoofingIcon />
      </button>
    </div>
  );
}

export default PlanningPageSideBar;
