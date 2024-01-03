import InputArea from "../inputArea/InputArea";
import styles from "./Header.module.css";

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
  deleteTask?: (taskItem: ITask) => void;
}
interface Props {
  addTask: (newTask: ITask) => void;
  categories: ICategory[];
  token: string;
}

const Header: React.FC<Props> = ({ addTask, categories, token }) => {
  return (
    <div className={styles.headerContainer}>
      <InputArea addTask={addTask} categories={categories} token={token} />
    </div>
  );
};

export default Header;
