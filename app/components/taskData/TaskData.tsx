import TaskGardenData from "../taskGardenData/TaskGardenData";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface Props {
  category: string;
  taskItem: ITask;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const TaskData: React.FC<Props> = ({ category, taskItem, onChange }) => {
  switch (category) {
    case "simpletask":
      break;
    case "gardentask":
      return <TaskGardenData taskItem={taskItem} onChange={onChange} />;
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
    default:
      break;
  }
  return "";
};

export default TaskData;
