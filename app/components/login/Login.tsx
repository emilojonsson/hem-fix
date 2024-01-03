import LoginIcon from "@mui/icons-material/Login";
import styles from "./Login.module.css";
import dataWhenLogIn from "./dataWhenLogIn";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}
interface ICategory {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: ITask[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: ITask) => void;
}
interface Props {
  getDataFromAPI: (data: ICategory[]) => void;
  saveToken: (token: string) => void;
}

const Login: React.FC<Props> = ({ getDataFromAPI, saveToken }) => {
  const listCategory = async (categoryName: string, accessToken: string) => {
    const loadDataResponse = await fetch(
      `https://localhost:7167/${categoryName}/list`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (loadDataResponse.ok) {
      const loadData = await loadDataResponse.json();
      let categoryId: number = 0;
      switch (categoryName) {
        case "simpltetask":
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
      dataWhenLogIn[categoryId].tasks = loadData;
    }
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await fetch("https://localhost:7167/login", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "luke_admin",
          password: "MyPass_w0rd",
        }),
      });

      if (loginResponse.ok) {
        const accessToken = await loginResponse.json();
        saveToken(accessToken);

        listCategory("simpletask", accessToken);
        listCategory("gardentask", accessToken);
        listCategory("maintenancetask", accessToken);
        listCategory("purchasetask", accessToken);
      }

      getDataFromAPI(dataWhenLogIn);
    } catch (error) {
      console.error("Error fetching secure resource:", error);
    }
  };

  return (
    <button className={styles.navBarButton} onClick={handleLogin}>
      <LoginIcon />
    </button>
  );
};

export default Login;
