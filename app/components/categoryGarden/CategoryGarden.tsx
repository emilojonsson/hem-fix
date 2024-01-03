import styles from "./CategoryGarden.module.css";

interface Props {
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  defaultValues: {
    exposure: string | undefined;
    minZone: string | undefined;
    maxZone: string | undefined;
    plantingDistance: string | undefined;
    soil: string | undefined;
    prune: string | undefined;
  };
}
const CategoryGarden: React.FC<Props> = ({ onChange, defaultValues }) => {
  return (
    <div>
      <h1>Skötselråd</h1>
      <div className={styles.dataContainer}>
        <select
          className={styles.dataChild}
          name="exposure"
          defaultValue={defaultValues.exposure}
          onChange={onChange}
        >
          <option value="Läge" disabled>
            Läge
          </option>
          <option value="sol">Sol</option>
          <option value="sol till halvskugga">Sol till halvskugga</option>
          <option value="halvskugga">Halvskugga</option>
          <option value="halvskugga till skugga">Halvskugga till skugga</option>
          <option value="skugga">Skugga</option>
        </select>
        <select
          className={styles.dataChild}
          name="minZone"
          defaultValue={defaultValues.minZone}
          onChange={onChange}
        >
          <option value="Från zon" disabled>
            Från zon
          </option>
          <option value="1">Zon 1</option>
          <option value="2">Zon 2</option>
          <option value="3">Zon 3</option>
          <option value="4">Zon 4</option>
          <option value="5">Zon 5</option>
          <option value="6">Zon 6</option>
          <option value="7">Zon 7</option>
          <option value="8">Zon 8</option>
        </select>
        <select
          className={styles.dataChild}
          name="maxZone"
          defaultValue={defaultValues.maxZone}
          onChange={onChange}
        >
          <option value="Till zon" disabled>
            Till zon
          </option>
          <option value="1">Zon 1</option>
          <option value="2">Zon 2</option>
          <option value="3">Zon 3</option>
          <option value="4">Zon 4</option>
          <option value="5">Zon 5</option>
          <option value="6">Zon 6</option>
          <option value="7">Zon 7</option>
          <option value="8">Zon 8</option>
        </select>
        <input
          className={styles.dataChild}
          name="plantingDistance"
          placeholder="Plant.avst. [m]"
          onChange={onChange}
          defaultValue={defaultValues.plantingDistance ?? ""}
        />
        <input
          className={styles.dataChild}
          placeholder="Jordmån"
          onChange={onChange}
          name="soil"
          defaultValue={defaultValues.soil ?? ""}
        />
        <textarea
          className={styles.dataChild}
          placeholder="Beskärningssätt"
          name="prune"
          onChange={onChange}
          defaultValue={defaultValues.prune ?? ""}
        />
      </div>
    </div>
  );
};

export default CategoryGarden;
