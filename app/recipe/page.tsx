"use client";
import NavBar from "../components/navBar/NavBar";
import withAuth from "../hocs/withAuth";

function RecipePage() {
  return (
    <main>
      <NavBar />
    </main>
  );
}

export default withAuth(RecipePage);
