"use client";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./Logout.module.css";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("authToken");
    console.log("localStorage emptied");
    router.push("/login");
  }

  return (
    <button className={styles.navBarButton} onClick={handleLogout}>
      <LogoutIcon />
    </button>
  );
}

export default Logout;
