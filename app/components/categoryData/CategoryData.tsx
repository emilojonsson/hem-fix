import GardenTask from "../gardenTask/GardenTask";

type CategoryDataProps = {
  categoryName: string;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

function CategoryData({ categoryName, onChange }: CategoryDataProps) {
  let dataDisplay = null;
  switch (categoryName) {
    case "simpletask":
      break;
    case "gardentask":
      const defaultValues = {
        exposure: "läge",
        minZone: "från zon",
        maxZone: "till zon",
        plantingDistance: undefined,
        soil: undefined,
        description: undefined,
        reminderType: "påminnelse",
        month: undefined,
        interval: undefined,
      };
      dataDisplay = <GardenTask onChange={onChange} taskItem={defaultValues} />;
      break;
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
  }

  return dataDisplay;
}

export default CategoryData;
