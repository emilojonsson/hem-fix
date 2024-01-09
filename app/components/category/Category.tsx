import TaskComponent from "../task/Task";
import styles from "./Category.module.css";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type CategoryProps = {
  tasks: Task[];
  backgroundColor: string;
  deleteTask: (newTask: Task) => void;
  token: string | null;
};

function Category({
  tasks,
  backgroundColor,
  deleteTask,
  token,
}: CategoryProps) {
  return (
    <div
      className={styles.categoryContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      {tasks.map((taskItem) => {
        return (
          <TaskComponent
            key={taskItem.id}
            taskItem={taskItem}
            deleteTask={deleteTask}
            token={token}
          />
        );
      })}
    </div>
  );
}

export default Category;
