"use client";
import NavBar from "./components/navBar/NavBar";
import PageBody from "./components/pageBody/PageBody";
import dataToStart from "./components/category/dataToStart";
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
type Category = {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: Task[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: Task) => void;
};

function Home() {
  const [categories, setCategories] = useState<Category[]>(dataToStart);
  const [token, setToken] = useState("");

  function addTask(newTask: Task) {
    const categoryIndex = findCategoryIndex(newTask);
    if (categoryIndex !== -1) {
      setCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const updatedTasks = [
          ...updatedCategories[categoryIndex].tasks,
          { ...newTask },
        ];
        updatedCategories[categoryIndex] = {
          ...updatedCategories[categoryIndex],
          tasks: updatedTasks,
        };
        return updatedCategories;
      });
    }
  }

  function deleteTask(taskToDelete: Task) {
    const categoryIndex = findCategoryIndex(taskToDelete);
    if (categoryIndex !== -1) {
      setCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        updatedCategories[categoryIndex].tasks = updatedCategories[
          categoryIndex
        ].tasks.filter((taskItem) => taskItem.id !== taskToDelete.id);
        return updatedCategories;
      });
    }
  }

  function findCategoryIndex(newTask: Task) {
    const categoryIndex: number = categories.findIndex(
      (category) =>
        category.name.toLowerCase() === newTask.categoryName.toLocaleLowerCase()
    );
    return categoryIndex;
  }

  function getDataFromAPI(categoryToStart: Category[]) {
    setCategories(categoryToStart);
  }

  return (
    <main>
      <NavBar getDataFromAPI={getDataFromAPI} saveToken={setToken} />
      <PageBody
        categoriesLength={categories.length}
        addTask={addTask}
        categories={categories}
        deleteTask={deleteTask}
        token={token}
      />
    </main>
  );
}

export default Home;
