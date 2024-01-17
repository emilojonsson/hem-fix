"use client";
import style from "./Task.module.css";
import FabButton from "../fabButton/FabButton";
import TaskData from "../taskData/TaskData";
import { useState } from "react";
import { Task as TaskType } from "@/app/types/MyTypes";

type TaskProps = {
  deleteTask: (newTask: TaskType) => void;
  taskItem: TaskType;
  token: string | null;
};

function Task({ taskItem, token, deleteTask }: TaskProps) {
  const [editedTask, setEditedTask] = useState<TaskType>(taskItem);
  const [showEditButton, setShowEditButton] = useState(false);

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
    setShowEditButton(true);
    const { name, value } = event.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  }

  function handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    setShowEditButton(true);
    const { name, checked } = event.target;
    setEditedTask({
      ...editedTask,
      [name]: checked,
    });
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
      setShowEditButton(false);
    }
  };

  return (
    <form onSubmit={editClick} className={style.taskContainer}>
      <div className={style.taskHeader}>
        <input
          onChange={handleChange}
          name="title"
          value={editedTask.title}
          className={style.taskChild}
        />
        <input
          type="checkbox"
          name="priority"
          onChange={handleCheckbox}
          onClick={() => (taskItem.priority = !taskItem.priority)}
          checked={taskItem.priority}
        ></input>
      </div>
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
          border: "1px solid gray",
        }}
      />
      {showEditButton && (
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
            border: "1px solid gray",
          }}
        />
      )}
    </form>
  );
}

export default Task;
