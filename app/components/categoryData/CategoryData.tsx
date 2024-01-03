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
      return <CategoryGarden onChange={onChange} />;
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
