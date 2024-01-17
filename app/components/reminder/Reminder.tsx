import { Task } from "@/app/types/MyTypes";
import style from "./Reminder.module.css";

type reminderProp = {
  taskItem: Task;
};
function Reminder({ taskItem }: reminderProp) {
  //Se mer - Enkelklick
  //Arkivera/Färdigställ - knapp
  //Postpone - knapp med altertiv typ nästa vecka osv
  //Hoppa över - knapp
  //Dragable /håll in och dra
  return (
    <div
      className={style.reminderContainer}
      style={{
        background: taskItem.background,
      }}
    >
      <p>{taskItem.title}</p>
    </div>
  );
}

export default Reminder;
