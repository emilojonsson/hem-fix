import PlanningList from "../planningList/PlanningList";
import PurchaseList from "../purchaseList/PurchaseList";
import style from "./planningPageBody.module.css";

function PlanningPageBody() {
  return (
    <div className={style.planningPageBodyContainer}>
      <PlanningList />
      <PurchaseList />
    </div>
  );
}

export default PlanningPageBody;
