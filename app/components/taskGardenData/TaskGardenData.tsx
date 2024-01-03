interface ITask {
  id: string;
  categoryName: string;
  title: string;
  exposure: string;
  minZone: number;
  maxZone: number;
  plantingDistance: number;
  soil: string;
  prune: string;
}

interface Props {
  taskItem: ITask;
}

const TaskGardenData: React.FC<Props> = ({ taskItem }) => {
  return (
    <div>
      <p>{taskItem.exposure}</p>
      <p>{taskItem.minZone}</p>
      <p>{taskItem.maxZone}</p>
      <p>{taskItem.plantingDistance}</p>
      <p>{taskItem.soil}</p>
      <p>{taskItem.prune}</p>
    </div>
  );
};

export default TaskGardenData;
