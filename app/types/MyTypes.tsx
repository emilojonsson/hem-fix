export type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
  priority: boolean;
  background: string;
  taskIndex: number;
};
export type Category = {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: Task[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: Task) => void;
};
export type SimpleTask = Task & {};
export type GardenTask = Task & {
  exposure?: string;
  minZone?: string;
  maxZone?: string;
  plantingDistance?: string;
  soil?: string;
  description?: string;
  reminderType?: string;
  month?: string;
  interval?: number;
};
export type MaintenanceTask = Task & {};
export type PurchaseTask = Task & {};
