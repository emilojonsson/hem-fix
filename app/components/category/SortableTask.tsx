import { Task as TaskType } from "@/app/types/MyTypes";
import Task from "../task/Task";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import styles from "./SortableTask.module.css";

type SortableTaskProp = {
  taskItem: TaskType;
  deleteTask: (taskItem: TaskType) => void;
  token: string | null;
};

function SortableTask({ taskItem, deleteTask, token }: SortableTaskProp) {
  const [editMode, setEditMode] = useState(true);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: taskItem.id,
      disabled: editMode,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  function enterEditMode() {
    setEditMode(true);
  }
  function enterDragMode() {
    setTimeout(() => {
      setEditMode(false);
    }, 0);
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Task taskItem={taskItem} deleteTask={deleteTask} token={token}></Task>
      <div onMouseOver={enterDragMode} onMouseOut={enterEditMode}>
        <DragHandleIcon className={styles.dragHandle} htmlColor="#fff" />
      </div>
    </div>
  );
}

export default SortableTask;
