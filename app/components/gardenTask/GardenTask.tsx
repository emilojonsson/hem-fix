import { useState } from "react";
import styles from "./GardenTask.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import {
  exposureOptions,
  zoneOptions,
  reminderOptions,
  monthOptions,
} from "@/app/constants/DropDownOptions";

type GardenTaskProps = {
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  taskItem: {
    exposure?: string;
    minZone?: string;
    maxZone?: string;
    plantingDistance?: string;
    soil?: string;
    description?: string;
    reminderType?: string;
    month?: string;
    interval?: number;
    title: string;
  };
};

function GardenTask({ onChange, taskItem }: GardenTaskProps) {
  const [reminder, setReminder] = useState(taskItem.reminderType);

  function onChangeReminder(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const reminderType = event.target.value;
    setReminder(reminderType);
    onChange(event);
  }

  return (
    <div>
      <div className={styles.dataContainer}>
        <DropdownMenu
          menuName="exposure"
          defaultValue={
            taskItem.exposure === "" || !taskItem.exposure
              ? "läge"
              : taskItem.exposure
          }
          placeholderText="läge"
          onChange={onChange}
          options={exposureOptions}
        />
        <DropdownMenu
          menuName="minZone"
          defaultValue={
            taskItem.minZone === "" || !taskItem.minZone
              ? "läge"
              : taskItem.minZone
          }
          placeholderText="från zon"
          onChange={onChange}
          options={zoneOptions}
        />
        <DropdownMenu
          menuName="maxZone"
          defaultValue={
            taskItem.maxZone === "" || !taskItem.maxZone
              ? "läge"
              : taskItem.maxZone
          }
          placeholderText="till zon"
          onChange={onChange}
          options={zoneOptions}
        />
        <input
          className={styles.dataChild}
          name="plantingDistance"
          placeholder="plant.avst. [m]"
          onChange={onChange}
          defaultValue={taskItem.plantingDistance ?? ""}
        />
        <input
          className={styles.dataChild}
          placeholder="jordmån"
          onChange={onChange}
          name="soil"
          defaultValue={taskItem.soil ?? ""}
        />
        <textarea
          className={styles.dataChild}
          placeholder="beskrivning..."
          name="description"
          onChange={onChange}
          defaultValue={taskItem.description ?? ""}
        />
        <DropdownMenu
          menuName="reminderType"
          defaultValue={
            taskItem.reminderType === "" || !taskItem.reminderType
              ? "läge"
              : taskItem.reminderType
          }
          placeholderText="påminnelse"
          onChange={onChangeReminder}
          options={reminderOptions}
        />
        {reminder === "intervall" && (
          <input
            type="number"
            placeholder="dagar till nästa påminnelse"
            onChange={onChange}
            name="interval"
            defaultValue={taskItem.interval ?? 0}
          ></input>
        )}
        {reminder === "tidpunkt" && (
          <DropdownMenu
            menuName="month"
            defaultValue={taskItem.month}
            placeholderText="månad"
            onChange={onChange}
            options={monthOptions}
          />
        )}
      </div>
    </div>
  );
}

export default GardenTask;
