import InputArea from "../inputArea/InputArea";
import styles from "./Header.module.css";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
};
type Category = {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: Task[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (taskItem: Task) => void;
};
type HeaderProps = {
  addTask: (newTask: Task) => void;
  categories: Category[];
  token: string | null;
};

function Header({ addTask, categories, token }: HeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <InputArea addTask={addTask} categories={categories} token={token} />
    </div>
  );
}

export default Header;
