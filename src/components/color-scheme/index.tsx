import { useMantineColorScheme } from "@mantine/core";
import { useCallback } from "react";
import SideNavLink from "../nav/sidebar/link";

const ColorSchemeToggle = () => {
    const { setColorScheme, colorScheme } = useMantineColorScheme();

    const handleToggle = useCallback(() => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
    }, [colorScheme, setColorScheme]);

    return <SideNavLink icon={colorScheme === 'light' ? 'dark' : 'light'} label={colorScheme === 'light' ? 'Dark Mode' : 'Light Mode'} onClick={handleToggle}/>
};

export default ColorSchemeToggle