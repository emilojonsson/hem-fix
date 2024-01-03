import styles from "./InputArea.module.css";
import { useState } from "react";
import CategorySelector from "../categorySelector/CategorySelector";
import FabButton from "../fabButton/FabButton";
import CategoryData from "../categoryData/CategoryData";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface ICategory {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: ITask[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: ITask) => void;
}
interface Props {
  addTask: (newTask: ITask) => void;
  categories: ICategory[];
  token: string;
}

const InputArea: React.FC<Props> = ({ addTask, categories, token }) => {
  const [task, setTask] = useState<ITask>({
    id: crypto.randomUUID(),
    title: "",
    categoryName: "simpletask",
  });

  const addTaskToDatabase = async (
    categoryName: string,
    accessToken: string,
    task: ITask
  ) => {
    try {
      const saveResponse = await fetch(
        `https://localhost:7167/${categoryName.toLowerCase()}/create`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(task),
        }
      );

      if (!saveResponse.ok) {
        console.error(`Failed to save data: ${saveResponse.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching secure resource:", error);
    }
  };

  function submitTask(event: React.FormEvent<HTMLFormElement>) {
    if (task.title !== "") {
      addTaskToDatabase(task.categoryName, token, task);
      addTask(task);
      setTask({
        categoryName: task.categoryName,
        title: "",
        id: crypto.randomUUID(),
      });
    }
    event.preventDefault();
  }
  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className={styles.formContainer} onSubmit={submitTask}>
        <div className={styles.formChildLeft}>
          <div>
            <CategorySelector categories={categories} onChange={handleChange} />
            <input
              name="title"
              onChange={handleChange}
              className={styles.inputItem}
              placeholder="Rubrik..."
              value={task.title}
            ></input>
          </div>
        </div>
        <div className={styles.formChildRight}>
          <CategoryData
            categoryName={task.categoryName}
            onChange={handleChange}
          />
        </div>
        <FabButton
          zoomIn={true}
          iconName="postAdd"
          buttonProps={{
            position: "absolute",
            right: 18,
            bottom: -18,
            width: 36,
            height: 36,
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default InputArea;