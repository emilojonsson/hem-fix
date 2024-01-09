import CategoryGarden from "../categoryGarden/CategoryGarden";

type CategoryDataProps = {
  categoryName:
    | "simpletask"
    | "gardentask"
    | "maintenancetask"
    | "purchasetask";
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
        exposure: "Läge",
        minZone: "Från zon",
        maxZone: "Till zon",
        plantingDistance: undefined,
        soil: undefined,
        prune: undefined,
        reminderType: "Tidpunkt",
        reminderDate: "2024-02",
      };
      dataDisplay = (
        <CategoryGarden onChange={onChange} defaultValues={defaultValues} />
      );
      break;
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
  }

  return dataDisplay;
}

export default CategoryData;
