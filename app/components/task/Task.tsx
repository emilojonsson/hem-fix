"use client";
import style from "./Task.module.css";
import FabButton from "../fabButton/FabButton";
import TaskData from "../taskData/TaskData";
import { useState } from "react";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type TaskProps = {
  deleteTask: (newTask: Task) => void;
  taskItem: Task;
  token: string | null;
};

function Task({ taskItem, token, deleteTask }: TaskProps) {
  const [editedTask, setEditedTask] = useState<Task>(taskItem);

  const deleteClick = async () => {
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

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
    console.log("editedTask", editedTask);
  }

  const editClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updateDataResponse = await fetch(
      `https://localhost:7167/${editedTask.categoryName}/update`,
      {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedTask),
      }
    );
    if (updateDataResponse.ok) {
    }
  };

  return (
    <div className={style.taskContainer}>
      <form onSubmit={editClick}>
        <textarea
          onChange={handleChange}
          name="title"
          value={editedTask.title}
          rows={1}
        />

        <TaskData taskItem={taskItem} onChange={handleChange} />
        <FabButton
          zoomIn={true}
          onClick={deleteClick}
          iconName="delete"
          buttonProps={{
            position: "absolute",
            right: 18,
            bottom: -18,
            width: 36,
            height: 36,
          }}
        />
        <FabButton
          zoomIn={true}
          type="submit"
          iconName="editNote"
          buttonProps={{
            position: "absolute",
            right: 58,
            bottom: -18,
            width: 36,
            height: 36,
          }}
        />
      </form>
    </div>
  );
}

export default Task;
