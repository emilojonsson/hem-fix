import { Task as TaskType } from "@/app/types/MyTypes";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./SortableTask.module.css";

type SortableTaskProp = {
  taskItem: TaskType;
};

function SortableTask({ taskItem }: SortableTaskProp) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: taskItem.id,
      // animateLayoutChanges: () => false,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className={styles.childdnd}>{taskItem.title}</div>
    </div>
  );
}

export default SortableTask;
