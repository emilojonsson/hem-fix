"use client";
import { Dispatch, SetStateAction } from "react";
import styles from "./Category.module.css";
import { Category } from "@/app/types/MyTypes";

type CategorySelectorProps = {
  categories: Category[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

function CategorySelector({
  categories,
  selected,
  setSelected,
  onChange,
}: CategorySelectorProps) {
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
}

export default CategorySelector;
