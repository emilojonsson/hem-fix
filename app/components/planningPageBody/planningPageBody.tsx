"use client";
import PlanningList from "../planningList/PlanningList";
import PurchaseList from "../purchaseList/PurchaseList";
import style from "./planningPageBody.module.css";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Task } from "@/app/types/MyTypes";

type PlanningPageBodyProp = {
  setPlanningTasks: Dispatch<SetStateAction<Task[]>>;
  planningTasks: Task[];
  setPurchaseTasks: Dispatch<SetStateAction<Task[]>>;
  purchaseTasks: Task[];
};

function PlanningPageBody({
  setPlanningTasks,
  planningTasks,
  setPurchaseTasks,
  purchaseTasks,
}: PlanningPageBodyProp) {
  const [dataLoaded, setDataLoaded] = useState(true);
  const [isPurchaseList, setIsPurchaseList] = useState(true);

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
      if (categoryName === "purchasetask") {
        if (dataResponse.length > 0) {
          setIsPurchaseList(true);
          setPurchaseTasks((prevTasks) => {
            const updatedTasks = [
              ...prevTasks,
              ...dataResponse.filter(
                (newTask: Task) =>
                  !prevTasks.some((task) => task.id === newTask.id)
              ),
            ];
            return updatedTasks;
          });
        }
      } else {
        setPlanningTasks((prevTasks) => {
          const updatedTasks = [
            ...prevTasks,
            ...dataResponse.filter(
              (newTask: Task) =>
                !prevTasks.some((task) => task.id === newTask.id)
            ),
          ];
          return updatedTasks;
        });
      }
    }
  };

  return (
    <div className={style.planningPageBodyContainer}>
      {dataLoaded && (
        <>
          <PlanningList
            planningTasks={planningTasks}
            columnSpan={isPurchaseList}
          />
          {isPurchaseList && <PurchaseList purchaseTasks={purchaseTasks} />}
        </>
      )}
    </div>
  );
}

export default PlanningPageBody;
