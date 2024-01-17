import { Category } from "@/app/types/MyTypes";

const dataToStart: Category[] = [
  {
    id: 0,
    name: "simpletask",
    nameSwedish: "enkla",
    background: "#861919",
    defaultSelected: true,
    tasks: [],
  },
  {
    id: 1,
    name: "gardentask",
    nameSwedish: "trädgård",
    background: "#084F00",
    defaultSelected: false,
    tasks: [],
  },
  {
    id: 2,
    name: "maintenancetask",
    nameSwedish: "underhåll",
    background: "#8D5900",
    defaultSelected: false,
    tasks: [],
  },
  {
    id: 3,
    name: "purchasetask",
    nameSwedish: "inköpslista",
    background: "#3C5B6B",
    defaultSelected: false,
    tasks: [],
  },
];

export default dataToStart;
