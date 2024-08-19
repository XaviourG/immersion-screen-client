import Icon, { IconName } from "../../../icon";
import { Tooltip, UnstyledButton } from "@mantine/core";
import classes from '../NavbarMinimal.module.css';


interface NavbarLinkProps {
    icon: IconName;
    label: string;
    active?: boolean;
    onClick?(): void;
  }
  

const SideNavLink = ({ icon, label, active, onClick }: NavbarLinkProps) => {
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon name={icon} />
        </UnstyledButton>
      </Tooltip>
    );
  }
  
  export default SideNavLink;