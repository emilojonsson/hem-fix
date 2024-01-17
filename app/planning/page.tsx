"use client";
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
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
    <main>
      <NavBar />
      <div className={style.container}>
        <SideBar
          setPlanningTasks={setPlanningTasks}
          setPurchaseTasks={setPurchaseTasks}
        />
        <PlanningPageBody
          setPlanningTasks={setPlanningTasks}
          setPurchaseTasks={setPurchaseTasks}
          planningTasks={planningTasks}
          purchaseTasks={purchaseTasks}
        />
      </div>
      <Footer />
    </main>
  );
}

export default withAuth(PlanningPage);
