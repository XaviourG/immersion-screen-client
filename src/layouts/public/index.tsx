import { Outlet } from 'react-router-dom';
import classes from './.module.css';

const PublicLayout = () => {
    return <div className={classes.outer}>
        <div className={classes.inner}>
            <Outlet />
        </div>
    </div>
};

export default PublicLayout;