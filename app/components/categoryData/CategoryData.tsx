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
  switch (categoryName) {
    case "simpletask":
      return "";
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
      return "";
    case "purchasetask":
      return "";
  }
}

export default CategoryData;
