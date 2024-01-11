import GardenTask from "../gardenTask/GardenTask";
import {
  SimpleTask as SimpleTaskType,
  GardenTask as GardenTaskType,
  MaintenanceTask as MaintenanceTaskType,
  PurchaseTask as PurchaseTaskType,
} from "@/app/types/MyTypes";

type TaskObject =
  | SimpleTaskType
  | GardenTaskType
  | MaintenanceTaskType
  | PurchaseTaskType;
type TaskDataProps = {
  taskItem: TaskObject;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

function TaskData({ taskItem, onChange }: TaskDataProps) {
  let dataDisplay = null;
  switch (taskItem.categoryName) {
    case "simpletask":
      break;
    case "gardentask":
      dataDisplay = (
        <GardenTask onChange={onChange} taskItem={taskItem as GardenTaskType} />
      );
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
  }

  return dataDisplay;
}

export default TaskData;
