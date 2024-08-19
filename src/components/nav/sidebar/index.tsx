import { Center, Stack } from '@mantine/core';
import classes from './NavbarMinimal.module.css';
import SideNavLink from './link';
import { SIDE_NAV_ICONS } from './models';
import Logo from '../../logo';
import ColorSchemeToggle from '../../color-scheme';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(0);

    useEffect(() => {
        const navIndex = SIDE_NAV_ICONS.findIndex((nav) => {
            const dynamicRegex = `^[/]*${nav.route}($|/)`;
            const test = new RegExp(dynamicRegex).test(location.pathname);
            return test;
        });
        setActive(navIndex)
    }, [location]);

    return <nav className={classes.navbar}>
    <Center>
      <Logo />
    </Center>

    <div className={classes.navbarMain}>
      <Stack justify="center" gap={0}>
        {SIDE_NAV_ICONS.map((config, index) => (
            <SideNavLink icon={config.icon} label={config.label} key={index} active={active === index} onClick={() => navigate(config.route)}/>
        ))}
      </Stack>
    </div>

    <Stack justify="center" gap={0}>
        <ColorSchemeToggle />
      <SideNavLink icon={'logout'} label="Logout" />
    </Stack>
  </nav>
};

export default NavSidebar;