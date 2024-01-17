import { Task } from "@/app/types/MyTypes";
import Reminder from "../reminder/Reminder";
import style from "./PurchaseList.module.css";

type PurchaseListProp = { purchaseTasks: Task[] };

function PurchaseList({ purchaseTasks }: PurchaseListProp) {
  return (
    <div className={style.purchaseListContainer}>
      {purchaseTasks.map((taskItem) => (
        <Reminder key={taskItem.id} taskItem={taskItem} />
      ))}
    </div>
  );
}

export default PurchaseList;
