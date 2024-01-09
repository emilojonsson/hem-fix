import { useState } from "react";
import styles from "./CategoryGarden.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

type CategoryGardenProps = {
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  defaultValues: {
    exposure?: string;
    minZone?: string;
    maxZone?: string;
    plantingDistance?: string;
    soil?: string;
    prune?: string;
    reminderType: string;
    reminderDate: string;
  };
};

function CategoryGarden({ onChange, defaultValues }: CategoryGardenProps) {
  const [reminder, setReminder] = useState("");
  const exposureOptions = [
    "sol",
    "sol till halvskugga",
    "halvskugga",
    "halvskugga till skugga",
    "skugga",
  ];
  const zoneOptions = [
    "Zon 1",
    "Zon 2",
    "Zon 3",
    "Zon 4",
    "Zon 5",
    "Zon 6",
    "Zon 7",
    "Zon 8",
  ];
  const reminderOptions = ["Tidpunkt", "Intervall", "Action"];
  const monthOptions = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  function onChangeReminder(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const reminderType = event.target.value;
    setReminder(reminderType);
    console.log("eventet för ", event);
    onChange(event);
  }

  return (
    <div>
      <h1>Skötselråd</h1>
      <div className={styles.dataContainer}>
        <DropdownMenu
          menuName="exposure"
          defaultValue={defaultValues.exposure}
          placeholderText="Läge"
          onChange={onChange}
          options={exposureOptions}
        />
        <DropdownMenu
          menuName="minZone"
          defaultValue={defaultValues.minZone}
          placeholderText="Från zon"
          onChange={onChange}
          options={zoneOptions}
        />
        <DropdownMenu
          menuName="maxZone"
          defaultValue={defaultValues.maxZone}
          placeholderText="Till zon"
          onChange={onChange}
          options={zoneOptions}
        />
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
        <DropdownMenu
          menuName="reminder"
          defaultValue="Påminnelse"
          placeholderText="Påminnelse"
          onChange={onChangeReminder}
          options={reminderOptions}
        />
        {reminder === "Intervall" && (
          <input
            type="number"
            placeholder="Dagar till nästa påminnelse"
          ></input>
        )}
        {reminder === "Tidpunkt" && (
          <DropdownMenu
            menuName="month"
            defaultValue="Månad"
            placeholderText="Månad"
            onChange={onChange}
            options={monthOptions}
          />
        )}

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
}

export default CategoryGarden;
