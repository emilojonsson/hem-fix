import React, { useState } from "react";
import styles from "./Category.module.css";

interface ITask {
  id: string;
  categoryName: string;
  title: string;
}

interface ICategory {
  id: number;
  name: string;
  nameSwedish: string;
  tasks: ITask[];
  background: string;
  defaultSelected: boolean;
  deleteTask?: (newTask: ITask) => void;
}

interface Props {
  categories: ICategory[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CategorySelector: React.FC<Props> = ({ categories, onChange }) => {
  const [selected, setSelected] = useState<string>("simpletask");

  function onSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setSelected(newValue);
    onChange(event);
  }

  return (
    <div className={styles.CategorySelectorContainer}>
      {categories.map((categoryItem) => (
        <div
          className={styles.CategorySelectorPair}
          key={categoryItem.id}
          style={{ color: categoryItem.background }}
        >
          <label>{categoryItem.nameSwedish}</label>
          <input
            type="radio"
            name="categoryName"
            value={categoryItem.name}
            className="radio"
            checked={selected === categoryItem.name}
            onChange={onSelect}
          />
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
