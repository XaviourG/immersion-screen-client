import { IconName } from "@/components/icon"

export type NavigationRouteIcon = {
    icon: IconName,
    label: string,
    route: string,
}

export const SIDE_NAV_ICONS: NavigationRouteIcon[] = [
    {
        icon: 'session',
        label: 'Your Session',
        route: '/session'
    },
    {
        icon: 'character',
        label: 'Character Manager',
        route: '/character'
    },
    {
        icon: 'scene',
        label: 'Scen Manager',
        route: '/scene'
    },
    {
        icon: 'combat',
        label: 'Combat Manager',
        route: '/combat'
    }
];