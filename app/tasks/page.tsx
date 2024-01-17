"use client";
import NavBar from "../components/navBar/NavBar";
import TaskPageBody from "../components/taskPageBody/TaskPageBody";
import TaskPageSideBar from "../components/taskPageSideBar/TaskPageSideBar";
import Footer from "../components/footer/footer";
import withAuth from "../hocs/withAuth";
import style from "./page.module.css";

function TasksPage() {
  return (
    <main className={style.pageContainer}>
      <NavBar />
      <div className={style.bodyContainer}>
        <TaskPageSideBar />
        <TaskPageBody />
        <Footer />
      </div>
    </main>
  );
}

export default withAuth(TasksPage);
