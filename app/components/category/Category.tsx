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
};

function Category({
  tasks,
  backgroundColor,
  deleteTask,
  token,
}: CategoryProps) {
  const [taskas, setTaskas] = useState<TaskType[]>(tasks);

  useEffect(() => {
    setTaskas(tasks);
  }, [tasks]);

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setTaskas((prevTasks) => {
      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const newIndex = prevTasks.findIndex((task) => task.id === over?.id);
      return arrayMove(prevTasks, oldIndex, newIndex);
    });
  }

  return (
    <div
      className={styles.categoryContainer}
      style={{ backgroundColor: backgroundColor }}
    >
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={taskas}
          strategy={horizontalListSortingStrategy}
        >
          {taskas.map((taskItem) => (
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
