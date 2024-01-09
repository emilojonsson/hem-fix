"use client";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import style from "./PageBody.module.css";
import Category from "../category/Category";
import dataToStart from "../category/dataToStart";

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

function PageBody() {
  const [categories, setCategories] = useState<Category[]>(dataToStart);
  const [dataLoaded, setDataLoaded] = useState(false);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      await listCategory("simpletask", token);
      await listCategory("gardentask", token);
      await listCategory("maintenancetask", token);
      await listCategory("purchasetask", token);
      setDataLoaded(true);
    };

    fetchData();
  }, [token]);

  const listCategory = async (categoryName: string, token: string | null) => {
    const loadDataResponse = await fetch(
      `https://localhost:7167/${categoryName}/list`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (loadDataResponse.ok) {
      const loadData = await loadDataResponse.json();
      let categoryId: number = 0;
      switch (categoryName) {
        case "simpltetask":
          categoryId = 0;
          break;
        case "gardentask":
          categoryId = 1;
          break;
        case "maintenancetask":
          categoryId = 2;
          break;
        case "purchasetask":
          categoryId = 3;
          break;
      }
      setCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];

        updatedCategories[categoryId] = {
          ...updatedCategories[categoryId],
          tasks: loadData,
        };
        return updatedCategories;
      });
    }
  };

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
        category.name.toLowerCase() === newTask.categoryName.toLowerCase()
    );
    return categoryIndex;
  }

  return (
    <div className={style.container}>
      <SideBar spanRow={categories.length + 1} />
      <Header addTask={addTask} categories={categories} token={token} />
      {dataLoaded &&
        categories.map((categoryItem) => {
          return (
            <Category
              key={categoryItem.id}
              tasks={categoryItem.tasks}
              backgroundColor={categoryItem.background}
              deleteTask={deleteTask}
              token={token}
            />
          );
        })}
    </div>
  );
}

export default PageBody;
