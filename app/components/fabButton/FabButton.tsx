import { Zoom, Fab } from "@mui/material";
import { PostAdd, Delete } from "@mui/icons-material";

interface Props {
  zoomIn: boolean;
  iconName: string;
  buttonProps: IButtonProps;
  onClick?: () => void;
  type?: "submit" | "button";
}
interface IButtonProps {
  position: string;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

const FabButton: React.FC<Props> = ({
  zoomIn,
  iconName,
  buttonProps,
  onClick,
  type,
}) => {
  let iconComponent;

  switch (iconName) {
    case "postAdd":
      iconComponent = <PostAdd />;
      break;
    case "delete":
      iconComponent = <Delete />;
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
};

export default FabButton;
