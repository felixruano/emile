import { Icon } from '@chakra-ui/core';

const MenuIcon = (props) => (
    <Icon viewBox="0 0 16 14" {...props}>
        {/* <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <rect x="2" width="14" height="2" rx="1" fill={props.color} />
        <rect y="6" width="16" height="2" rx="1" fill={props.color} />
        <rect x="4" y="12" width="12" height="2" rx="1" fill={props.color} />
        {/* </svg> */}
    </Icon>
);

export default MenuIcon;
