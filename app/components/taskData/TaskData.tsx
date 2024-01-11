import GardenTaskComponent from "../gardenTask/GardenTask";

type TaskCommon = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type SimpleTask = TaskCommon & {};
type GardenTask = TaskCommon & {
  exposure?: string;
  minZone?: string;
  maxZone?: string;
  plantingDistance?: string;
  soil?: string;
  description?: string;
  reminderType?: string;
  month?: string;
  interval?: number;
};
type MaintenanceTask = TaskCommon & {};
type PurchaseTask = TaskCommon & {};
type Task = SimpleTask | GardenTask | MaintenanceTask | PurchaseTask;
type TaskDataProps = {
  taskItem: Task;
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
        <GardenTaskComponent
          onChange={onChange}
          taskItem={taskItem as GardenTask}
        />
      );
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
  }

  return dataDisplay;
}

export default TaskData;
