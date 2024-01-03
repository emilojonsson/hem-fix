"use client";
import NavBar from "./components/navBar/NavBar";
import PageBody from "./components/pageBody/PageBody";
import dataToStart from "./components/category/dataToStart";
import { useState } from "react";

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

function Home() {
  const [categories, setCategories] = useState<ICategory[]>(dataToStart);
  const [token, setToken] = useState<string>("");

  function addTask(newTask: ITask) {
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

  function deleteTask(taskToDelete: ITask) {
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

  function findCategoryIndex(newTask: ITask) {
    const categoryIndex: number = categories.findIndex(
      (category) =>
        category.name.toLowerCase() === newTask.categoryName.toLocaleLowerCase()
    );
    return categoryIndex;
  }

  function getDataFromAPI(categoryToStart: ICategory[]) {
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
