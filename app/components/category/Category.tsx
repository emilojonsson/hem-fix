import Task from "../task/Task";
import styles from "./Category.module.css";
import { Task as TaskType } from "@/app/types/MyTypes";

type CategoryProps = {
  tasks: TaskType[];
  backgroundColor: string;
  deleteTask: (newTask: TaskType) => void;
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
}

export default Category;
