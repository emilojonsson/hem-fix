import CategoryGarden from "../categoryGarden/CategoryGarden";

type Task = {
  id: string;
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
  title: string;
  exposure?: string | undefined;
  minZone?: string | undefined;
  maxZone?: string | undefined;
  plantingDistance?: string | undefined;
  soil?: string | undefined;
  prune?: string | undefined;
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
