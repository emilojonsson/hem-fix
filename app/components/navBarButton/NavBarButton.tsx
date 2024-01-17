import Link from "next/link";
import styles from "./NavBarButton.module.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuBookIcon from "@mui/icons-material/MenuBook";

type NavbarButtonProps = {
  text: string;
  href: string;
  iconName: string;
  color: string;
};

function NavBarButton({ text, href, iconName, color }: NavbarButtonProps) {
  let iconComponent;

  switch (iconName) {
    case "settings":
      iconComponent = <SettingsOutlinedIcon htmlColor={color} />;
      break;
    case "notes":
      iconComponent = <TextSnippetOutlinedIcon htmlColor={color} />;
      break;
    case "tasks":
      iconComponent = <TaskAltIcon htmlColor={color} />;
      break;
    case "receipt":
      iconComponent = <ReceiptLongIcon htmlColor={color} />;
      break;
    case "logout":
      iconComponent = <LogoutIcon />;
      break;
    case "recipe":
      iconComponent = <MenuBookIcon htmlColor={color} />;
      break;
    default:
      iconComponent = null;
      break;
  }

  return (
    <button className={styles.navBarButton}>
      <Link href={href}>
        <div style={{ color }}>{text}</div>
        {iconComponent}
      </Link>
    </button>
  );
}

export default NavBarButton;
