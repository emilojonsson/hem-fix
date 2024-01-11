"use client";
import styles from "./InputArea.module.css";
import { useState } from "react";
import CategorySelector from "../categorySelector/CategorySelector";
import FabButton from "../fabButton/FabButton";
import CategoryData from "../categoryData/CategoryData";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type Category = {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: Task[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: Task) => void;
};
type InputAreaProps = {
  addTask: (newTask: Task) => void;
  categories: Category[];
  token: string | null;
};

function InputArea({ addTask, categories, token }: InputAreaProps) {
  const [task, setTask] = useState<Task>({
    id: crypto.randomUUID(),
    title: "",
    categoryName: "simpletask",
  });
  const [selected, setSelected] = useState("simpletask");

  const addTaskToDatabase = async (
    categoryName: string,
    accessToken: string | null,
    task: Task
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
      setSelected("simpletask");
    }
    event.preventDefault();
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  }

  return (
    <div>
      <form className={styles.formContainer} onSubmit={submitTask}>
        <div className={styles.formChildLeft}>
          <div>
            <CategorySelector
              categories={categories}
              onChange={handleChange}
              selected={selected}
              setSelected={setSelected}
            />
            <input
              name="title"
              onChange={handleChange}
              className={styles.inputItem}
              placeholder="rubrik..."
              value={task.title}
            ></input>
          </div>
        </div>
        <div className={styles.formChildRight}>
          <CategoryData categoryName={selected} onChange={handleChange} />
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
}

export default InputArea;
