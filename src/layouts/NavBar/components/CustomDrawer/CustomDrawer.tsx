import { useLocation } from 'react-router-dom';
import { Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { Link } from 'react-router-dom';
import { CustomDrawerProps } from '../../interfaces/CustomDrawerProps';
import style from './CustomDrawer.module.scss';

export const CustomDrawer = ({ routes = [] }: CustomDrawerProps) => {
    
    const { pathname } = useLocation();

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {
                    routes.filter(route => route.name).map(({ name, path }) => (
                        <ListItem key={name} disablePadding>
                            <Link className={pathname == path ? style.linkMenuSelected : style.linkMenu} to={path}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LabelOutlinedIcon className={style.iconList} />
                                    </ListItemIcon>
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}
