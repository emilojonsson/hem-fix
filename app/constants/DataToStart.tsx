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

const dataToStart: Category[] = [
  {
    id: 0,
    name: "simpletask",
    nameSwedish: "enkla",
    background: "blue",
    defaultSelected: true,
    tasks: [],
  },
  {
    id: 1,
    name: "gardentask",
    nameSwedish: "trädgård",
    background: "red",
    defaultSelected: false,
    tasks: [],
  },
  {
    id: 2,
    name: "maintenancetask",
    nameSwedish: "underhåll",
    background: "black",
    defaultSelected: false,
    tasks: [],
  },
  {
    id: 3,
    name: "purchasetask",
    nameSwedish: "inköpslista",
    background: "yellow",
    defaultSelected: false,
    tasks: [],
  },
];

export default dataToStart;
