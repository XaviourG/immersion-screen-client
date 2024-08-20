import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

import classes from './SocketLayout.module.css'

const SocketLayout = () => {

    return <Box className={classes.container}>
        <Outlet />
    </Box>
};

export default SocketLayout;