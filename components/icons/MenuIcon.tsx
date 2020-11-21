import { Icon } from '@chakra-ui/react';

type MenuIconProps = {
    boxSize: number | Array<number>;
    color: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ boxSize, color }: MenuIconProps) => (
    <Icon viewBox="0 0 16 14" boxSize={boxSize}>
        <rect x="2" width="14" height="2" rx="1" fill={color} />
        <rect y="6" width="16" height="2" rx="1" fill={color} />
        <rect x="4" y="12" width="12" height="2" rx="1" fill={color} />
    </Icon>
);

export default MenuIcon;
