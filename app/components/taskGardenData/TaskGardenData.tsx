import CategoryGarden from "../categoryGarden/CategoryGarden";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
  exposure?: string | undefined;
  minZone?: string | undefined;
  maxZone?: string | undefined;
  plantingDistance?: string | undefined;
  soil?: string | undefined;
  prune?: string | undefined;
}
interface Props {
  taskItem: ITask;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const TaskGardenData: React.FC<Props> = ({ taskItem, onChange }) => {
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
};

export default TaskGardenData;
