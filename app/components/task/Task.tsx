import style from "./Task.module.css";
import FabButton from "../fabButton/FabButton";
import TaskData from "../taskData/TaskData";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface Props {
  title: string;
  deleteTask: (newTask: ITask) => void;
  taskItem: ITask;
  token: string;
}

const Task: React.FC<Props> = ({ taskItem, title, token, deleteTask }) => {
  const handleClick = async () => {
    const categoryName = taskItem.categoryName;
    const taskId = taskItem.id;
    const deleteDataResponse = await fetch(
      `https://localhost:7167/${categoryName}/delete?id=${taskId}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (deleteDataResponse.ok) {
      deleteTask(taskItem);
    }
  };

  return (
    <div className={style.taskContainer}>
      <h1>{title}</h1>
      <TaskData category={taskItem.categoryName} taskItem={taskItem} />
      <FabButton
        zoomIn={true}
        onClick={handleClick}
        iconName="delete"
        buttonProps={{
          position: "absolute",
          right: 18,
          bottom: -18,
          width: 36,
          height: 36,
        }}
      />
    </div>
  );
};

export default Task;
