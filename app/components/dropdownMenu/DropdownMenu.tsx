import style from "./DropdownMenu.module.css";

type DropdownMenuProps = {
  menuName: string;
  defaultValue?: string;
  placeholderText: string;
  options: string[];
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

function DropdownMenu({
  menuName,
  defaultValue,
  placeholderText,
  onChange,
  options,
}: DropdownMenuProps) {
  return (
    <select
      className={style.dataChild}
      name={menuName}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <option disabled>{placeholderText}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DropdownMenu;
