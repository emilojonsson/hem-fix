import Task from "../task/Task";
import styles from "./Category.module.css";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}

interface Props {
  tasks: ITask[];
  backgroundColor: string;
  deleteTask: (newTask: ITask) => void;
  token: string;
}

const Category: React.FC<Props> = ({
  tasks,
  backgroundColor,
  deleteTask,
  token,
}) => {
  return (
    <div
      className={styles.categoryContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      {tasks.map((taskItem) => {
        return (
          <Task
            key={taskItem.id}
            taskItem={taskItem}
            deleteTask={deleteTask}
            token={token}
          />
        );
      })}
    </div>
  );
};

export default Category;
