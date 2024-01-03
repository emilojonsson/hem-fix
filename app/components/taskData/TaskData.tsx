import TaskGardenData from "../taskGardenData/TaskGardenData";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface Props {
  category: string;
  taskItem: ITask;
}

const TaskData: React.FC<Props> = ({ category, taskItem }) => {
  switch (category) {
    case "simpletask":
      break;
    case "gardentask":
      return <TaskGardenData taskItem={taskItem} />;
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
