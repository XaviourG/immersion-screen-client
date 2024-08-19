import { IconBroadcast, IconExclamationCircleFilled, IconHome, IconLogout2, IconMoonFilled, IconStack, IconSunFilled, IconSword, IconUser } from "@tabler/icons-react";
import { useMemo } from "react";

const ICONS = {
    error: IconExclamationCircleFilled,
    light: IconSunFilled,
    dark: IconMoonFilled,
    home: IconHome,
    combat: IconSword,
    scene: IconStack,
    character: IconUser,
    logout: IconLogout2,
    session: IconBroadcast
} as const

export type IconName = keyof typeof ICONS;


interface IconProps {
    name: IconName
    stroke?: number
}

const Icon = ({ name, stroke }: IconProps) => {
    const IconComponent = useMemo(() => ICONS[name] ?? ICONS['error'], [name]);

    return <IconComponent stroke={stroke}/>
}

export default Icon;