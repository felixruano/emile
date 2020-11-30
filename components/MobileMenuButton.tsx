import { IconButton } from "@chakra-ui/react";
import MenuIcon from "./icons/MenuIcon";

const MobileMenuButton: React.FC = () => (
  <IconButton display={["block", null, "none"]} variant="ghost" aria-label="menu" icon={<MenuIcon boxSize={6} color="#4F46E8" />} />
);

export default MobileMenuButton;