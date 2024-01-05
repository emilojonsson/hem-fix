import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import style from "./PageBody.module.css";
import Category from "../category/Category";

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
  deleteTask?: (newTask: Task) => void;
};
type PageBodyProps = {
  categoriesLength: number;
  addTask: (newTask: Task) => void;
  categories: Category[];
  deleteTask: (newTask: Task) => void;
  token: string;
};

function PageBody({
  categoriesLength,
  addTask,
  categories,
  deleteTask,
  token,
}: PageBodyProps) {
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
}

export default PageBody;
