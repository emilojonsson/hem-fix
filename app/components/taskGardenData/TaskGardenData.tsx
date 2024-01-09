import CategoryGarden from "../categoryGarden/CategoryGarden";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
  exposure?: string;
  minZone?: string;
  maxZone?: string;
  plantingDistance?: string;
  soil?: string;
  prune?: string;
};
type TaskGardenDataProps = {
  taskItem: Task;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

function TaskGardenData({ taskItem, onChange }: TaskGardenDataProps) {
  return (
    <CategoryGarden
      onChange={onChange}
      defaultValues={{
        exposure: taskItem.exposure ?? "Läge",
        minZone: taskItem.minZone ?? "Från zon",
        maxZone: taskItem.maxZone ?? "Till zon",
        plantingDistance: taskItem.plantingDistance,
        soil: taskItem.soil,
        prune: taskItem.prune,
      }}
    />
  );
}

export default TaskGardenData;
