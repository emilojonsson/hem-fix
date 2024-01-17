"use client";
import NavBar from "../components/navBar/NavBar";
import PlanningPageSideBar from "../components/planningPageSideBar/PlanningPageSideBar";
import Footer from "../components/footer/footer";
import withAuth from "../hocs/withAuth";
import PlanningPageBody from "../components/planningPageBody/planningPageBody";
import style from "./page.module.css";
import { Task } from "@/app/types/MyTypes";
import { useState } from "react";

function PlanningPage() {
  const [planningTasks, setPlanningTasks] = useState<Task[]>([]);
  const [purchaseTasks, setPurchaseTasks] = useState<Task[]>([]);

  return (
    <main className={style.pageContainer}>
      <NavBar />
      <div className={style.bodyContainer}>
        <PlanningPageSideBar
          setPlanningTasks={setPlanningTasks}
          setPurchaseTasks={setPurchaseTasks}
        />
        <PlanningPageBody
          setPlanningTasks={setPlanningTasks}
          setPurchaseTasks={setPurchaseTasks}
          planningTasks={planningTasks}
          purchaseTasks={purchaseTasks}
        />
        <Footer />
      </div>
    </main>
  );
}

export default withAuth(PlanningPage);
