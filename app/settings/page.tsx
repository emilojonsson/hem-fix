"use client";
import NavBar from "../components/navBar/NavBar";
import withAuth from "../hocs/withAuth";

function SettingsPage() {
  return (
    <main>
      <p>test</p>
    </main>
  );
}

export default withAuth(SettingsPage);
