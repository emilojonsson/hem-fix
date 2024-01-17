import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import styles from "./Category.module.css";
import { Task as TaskType } from "@/app/types/MyTypes";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTask from "./SortableTask";
import { useState, useEffect } from "react";

type CategoryProps = {
  tasks: TaskType[];
  backgroundColor: string;
  deleteTask: (newTask: TaskType) => void;
  token: string | null;
  categoryName: string;
};

function Category({
  tasks,
  backgroundColor,
  deleteTask,
  token,
  categoryName,
}: CategoryProps) {
  const [dragTasks, setDragTasks] = useState<TaskType[]>(tasks);

  useEffect(() => {
    setDragTasks(tasks);
  }, [tasks]);

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setDragTasks((prevTasks) => {
      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const newIndex = prevTasks.findIndex((task) => task.id === over?.id);
      const updatedTasks = arrayMove(prevTasks, oldIndex, newIndex);
      const updatedTasksWithIndex = updateTaskOrder(updatedTasks);
      updateArrayIndexInDatabase(categoryName, updatedTasksWithIndex);
      return updatedTasksWithIndex;
    });
  }

  function updateTaskOrder(updatedTasks: TaskType[]) {
    return updatedTasks.map((task, index) => ({
      ...task,
      taskIndex: index,
    }));
  }

  const updateArrayIndexInDatabase = async (
    categoryName: string,
    dragTasks: TaskType[]
  ) => {
    dragTasks.map(async (taskItem) => {
      const updateDataResponse = await fetch(
        `https://localhost:7167/${categoryName}/update`,
        {
          method: "PUT",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(taskItem),
        }
      );
    });
  };

  return (
    <div
      className={styles.categoryContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={dragTasks}
          strategy={horizontalListSortingStrategy}
        >
          {dragTasks.map((taskItem) => (
            <SortableTask
              key={taskItem.id}
              taskItem={taskItem}
              deleteTask={deleteTask}
              token={token}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default Category;
