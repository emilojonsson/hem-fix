"use client";
import { useState, useEffect } from "react";
import Header from "../header/Header";
import style from "./TaskPageBody.module.css";
import Category from "../category/Category";
import dataToStart from "../../constants/DataToStart";
import { Task, Category as CategoryType } from "@/app/types/MyTypes";

function TaskPageBody() {
  const [categories, setCategories] = useState<CategoryType[]>(dataToStart);
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
    const listDataResponse = await fetch(
      `https://localhost:7167/${categoryName}/list`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (listDataResponse.ok) {
      const dataResponse = await listDataResponse.json();
      let categoryId: number = 0;
      switch (categoryName) {
        case "simpletask":
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
          tasks: dataResponse,
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
    <div className={style.taskPageBodyContainer}>
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

export default TaskPageBody;
