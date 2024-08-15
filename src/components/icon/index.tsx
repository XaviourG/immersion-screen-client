import { IconExclamationCircleFilled, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useMemo } from "react";

const ICONS = {
    error: IconExclamationCircleFilled,
    light: IconSunFilled,
    dark: IconMoonFilled
} as const

type IconName = keyof typeof ICONS;


interface IconProps {
    name: IconName
}

const Icon = ({ name }: IconProps) => {
    const IconComponent = useMemo(() => ICONS[name] ?? ICONS['error'], [name]);

    return <IconComponent />
}

export default Icon;