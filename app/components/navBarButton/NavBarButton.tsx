import Link from "next/link";
import styles from "./NavBarButton.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface Props {
  text: string;
  href: string;
  iconName: string;
}

const NavBarButton: React.FC<Props> = ({ text, href, iconName }) => {
  let iconComponent;

  switch (iconName) {
    case "settings":
      iconComponent = <SettingsOutlinedIcon />;
      break;
    case "notes":
      iconComponent = <TextSnippetOutlinedIcon />;
      break;
    case "tasks":
      iconComponent = <TaskAltIcon />;
      break;
    case "receipt":
      iconComponent = <ReceiptLongIcon />;
      break;

    default:
      iconComponent = null;
      break;
  }
  return (
    <button className={styles.navBarButton}>
      <Link href={href}>
        {text}
        {iconComponent}
      </Link>
    </button>
  );
};

export default NavBarButton;