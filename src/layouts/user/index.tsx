import NavSidebar from "../../components/nav/sidebar";
import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

import classes from './UserLayout.module.css'

const UserLayout = () => {

    return <Box className={classes.flexContainer}>
        <NavSidebar />
        <Box className={classes.body}>
            <Box className={classes.outletContainer}>
                <Outlet />
            </Box>
        </Box>
    </Box>
};

export default UserLayout;