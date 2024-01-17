import { Zoom, Fab } from "@mui/material";
import { PostAdd, Delete, EditNote } from "@mui/icons-material";

type Props = {
  zoomIn: boolean;
  iconName: string;
  buttonProps: IButtonProps;
  onClick?: () => void;
  type?: "submit" | "button";
};
type IButtonProps = {
  position: string;
  right: number;
  bottom: number;
  width: number;
  height: number;
  border: string;
};

function FabButton({ zoomIn, iconName, buttonProps, onClick, type }: Props) {
  let iconComponent;

  switch (iconName) {
    case "postAdd":
      iconComponent = <PostAdd />;
      break;
    case "delete":
      iconComponent = <Delete />;
      break;
    case "editNote":
      iconComponent = <EditNote />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <Zoom in={zoomIn}>
      <Fab type={type} onClick={onClick} sx={{ ...buttonProps }}>
        {iconComponent}
      </Fab>
    </Zoom>
  );
}

export default FabButton;
