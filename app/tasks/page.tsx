"use client";
import NavBar from "../components/navBar/NavBar";
import PageBody from "../components/pageBody/PageBody";
import withAuth from "../hocs/withAuth";

function Tasks() {
  return (
    <main>
      <NavBar />
      <PageBody />
    </main>
  );
}

export default withAuth(Tasks);
