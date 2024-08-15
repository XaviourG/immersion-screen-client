import { Button, useMantineColorScheme } from "@mantine/core";
import { useCallback } from "react";
import Icon from "../icon";

const ColorSchemeToggle = () => {
    const { setColorScheme, colorScheme } = useMantineColorScheme();

    const handleToggle = useCallback(() => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
    }, [colorScheme, setColorScheme]);

    return <Button onClick={handleToggle}>
        <Icon name={colorScheme === 'light' ? 'dark' : 'light'} />
    </Button>
};

export default ColorSchemeToggle