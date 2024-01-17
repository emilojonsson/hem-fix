import { Task } from "@/app/types/MyTypes";
import Reminder from "../reminder/Reminder";
import style from "./PlanningList.module.css";

type PlanningListProp = { planningTasks: Task[]; columnSpan: boolean };

function PlanningList({ planningTasks, columnSpan }: PlanningListProp) {
  const gridStyles = !columnSpan ? { gridColumn: "span 2" } : {};

  return (
    <div className={style.planningListContainer} style={gridStyles}>
      {planningTasks.map((taskItem) => (
        <Reminder key={taskItem.id} taskItem={taskItem} />
      ))}
    </div>
  );
}

export default PlanningList;
