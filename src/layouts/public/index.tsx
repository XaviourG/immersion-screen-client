import { Outlet } from 'react-router-dom';
import classes from './PublicLayout.module.css';
import ColorSchemeToggle from '../../components/color-scheme';
import { Box } from '@mantine/core';

const PublicLayout = () => {
    return <div className={classes.outer}>
        <div className={classes.header}>
            <Box />
            <ColorSchemeToggle />
        </div>
        <div className={classes.inner}>
            <Outlet />
        </div>
    </div>
};

export default PublicLayout;