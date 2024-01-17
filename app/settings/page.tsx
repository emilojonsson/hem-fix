"use client";
import NavBar from "../components/navBar/NavBar";
import withAuth from "../hocs/withAuth";
import { Task as TaskType } from "@/app/types/MyTypes";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTask from "./SortableTask";
import styles from "./SortableTask.module.css";

function SettingsPage() {
  const data: TaskType[] = [
    {
      id: "1234",
      title: "Emil1",
      categoryName: "simpletask",
      priority: true,
    },
    {
      id: "2341",
      title: "Emil2",
      categoryName: "simpletask",
      priority: true,
    },
    {
      id: "3412",
      title: "Emil3",
      categoryName: "simpletask",
      priority: true,
    },
    {
      id: "4123",
      title: "Emil4",
      categoryName: "simpletask",
      priority: true,
    },
  ];
  const [tasks, setTasks] = useState<TaskType[]>(data);

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setTasks((prevTasks) => {
      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const newIndex = prevTasks.findIndex((task) => task.id === over?.id);
      console.log(oldIndex, newIndex);
      console.log(arrayMove(prevTasks, oldIndex, newIndex));
      return arrayMove(prevTasks, oldIndex, newIndex);
    });
  }

  return (
    <main>
      <NavBar />
      <div className={styles.dnd}>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={tasks}
            strategy={horizontalListSortingStrategy}
          >
            {tasks.map((taskItem) => (
              <SortableTask key={taskItem.id} taskItem={taskItem} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
}

export default withAuth(SettingsPage);
