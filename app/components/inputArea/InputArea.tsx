"use client";
import styles from "./InputArea.module.css";
import { useState } from "react";
import CategorySelector from "../categorySelector/CategorySelector";
import FabButton from "../fabButton/FabButton";
import CategoryData from "../categoryData/CategoryData";
import { Task, Category } from "@/app/types/MyTypes";

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
    priority: false,
    background: "#861919",
    taskIndex: 9999,
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
    addTaskFromEvent(task.title);
    event.preventDefault();
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addTaskFromEvent(task.title);
    }
  };

  function addTaskFromEvent(taskTitle: string) {
    if (taskTitle !== "") {
      addTaskToDatabase(task.categoryName, token, task);
      addTask(task);
      setTask({
        categoryName: "simpletask",
        title: "",
        id: crypto.randomUUID(),
        priority: false,
        background: "#861919",
        taskIndex: 9999,
      });
      setSelected("simpletask");
    }
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    const categoryIndex = findCategoryIndex(value);
    if (name === "categoryName") {
      setTask({
        ...task,
        background: categories[categoryIndex].background,
        [name as keyof typeof task]: value,
      });
    } else {
      setTask({
        ...task,
        [name]: value,
      });
    }
  }

  function findCategoryIndex(name: string) {
    const categoryIndex: number = categories.findIndex(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
    return categoryIndex;
  }

  function handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setTask({
      ...task,
      [name]: checked,
    });
  }

  return (
    <form
      className={styles.formContainer}
      onSubmit={submitTask}
      onKeyDown={handleKeyDown}
    >
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
          <input
            name="priority"
            type="checkbox"
            onChange={handleCheckbox}
            checked={task.priority}
            onClick={() => (task.priority = !task.priority)}
            className={styles.checkBox}
          ></input>
          <label>Prioriterat!</label>
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
          border: "1px solid gray",
        }}
        type="submit"
      />
    </form>
  );
}

export default InputArea;
