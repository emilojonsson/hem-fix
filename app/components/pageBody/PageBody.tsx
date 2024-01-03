import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import style from "./PageBody.module.css";
import Category from "../category/Category";

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
  categoriesLength: number;
  addTask: (newTask: ITask) => void;
  categories: ICategory[];
  deleteTask: (newTask: ITask) => void;
  token: string;
}
const PageBody: React.FC<Props> = ({
  categoriesLength,
  addTask,
  categories,
  deleteTask,
  token,
}) => {
  return (
    <div className={style.container}>
      <SideBar spanRow={categoriesLength + 1} />
      <Header addTask={addTask} categories={categories} token={token} />
      {categories.map((categoryItem) => {
        return (
          <Category
            key={categoryItem.id}
            tasks={categoryItem.tasks}
            backgroundColor={categoryItem.background}
            deleteTask={deleteTask}
            token={token}
          />
        );
      })}
    </div>
  );
};

export default PageBody;
