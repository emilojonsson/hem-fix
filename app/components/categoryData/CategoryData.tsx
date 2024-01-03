import CategoryGarden from "../categoryGarden/CategoryGarden";

interface Props {
  categoryName: string;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const CategoryData: React.FC<Props> = ({ categoryName, onChange }) => {
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
      };
      return (
        <CategoryGarden onChange={onChange} defaultValues={defaultValues} />
      );
    case "maintenancetask":
      break;
    case "purchasetask":
      break;
    default:
      break;
  }
  return "";
};

export default CategoryData;
