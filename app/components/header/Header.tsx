import InputArea from "../inputArea/InputArea";
import styles from "./Header.module.css";
import { Task, Category } from "@/app/types/MyTypes";

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
