"use client";
import NavBar from "../components/navBar/NavBar";
import SideBar from "../components/sideBar/SideBar";
import Footer from "../components/footer/footer";
import withAuth from "../hocs/withAuth";
import PlanningPageBody from "../components/planningPageBody/planningPageBody";
import style from "./page.module.css";

function PlanningPage() {
  return (
    <main>
      <NavBar />
      <div className={style.container}>
        <SideBar />
        <PlanningPageBody />
      </div>
      <Footer />
    </main>
  );
}

export default withAuth(PlanningPage);
