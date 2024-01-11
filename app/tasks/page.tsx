"use client";
import NavBar from "../components/navBar/NavBar";
import TaskPageBody from "../components/taskPageBody/TaskPageBody";
import SideBar from "../components/sideBar/SideBar";
import Footer from "../components/footer/footer";
import withAuth from "../hocs/withAuth";
import style from "./page.module.css";

function TasksPage() {
  return (
    <main>
      <NavBar />
      <div className={style.container}>
        <SideBar />
        <TaskPageBody />
      </div>
      <Footer />
    </main>
  );
}

export default withAuth(TasksPage);
