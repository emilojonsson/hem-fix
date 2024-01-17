import styles from "./DropdownMenu.module.css";

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
      className={styles.dataChild}
      name={menuName}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <option disabled className={styles.placeholderOption}>
        {placeholderText}
      </option>
      {options.map((option) => (
        <option key={option} value={option} className={styles.valueOption}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default DropdownMenu;
