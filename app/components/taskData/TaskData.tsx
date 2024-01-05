import TaskGardenData from "../taskGardenData/TaskGardenData";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type TaskDataProps = {
  taskItem: Task;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

function TaskData({ taskItem, onChange }: TaskDataProps) {
  switch (taskItem.categoryName) {
    case "simpletask":
      break;
    case "gardentask":
      return <TaskGardenData taskItem={taskItem} onChange={onChange} />;
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
  }
  return "";
}

export default TaskData;
