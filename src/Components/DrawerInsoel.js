import React from 'react';

import {IconButton, Drawer,
    List, ListItem,
    ListItemIcon, ListItemText,
    Divider, makeStyles,
    useTheme } from '@material-ui/core'

import {Link} from 'react-router-dom';

import CollectionsIcon from '@material-ui/icons/Collections';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer:{
        width: drawerWidth,
        flexShrink:0
    },
    drawerPaper:{
        width: drawerWidth
    },
    drawerHeader:{
        display:'flex',
        alignItems:'center',
        padding: theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent:'flex-end'
    }
}));

function DrawerInsoel(props){
    const classes = useStyles();

    const theme = useTheme();

    return(
        <div>
            <Drawer variant="persistent" 
                anchor="left" 
                open={props.state} 
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
                >

                <div className={classes.drawerHeader}>
                    <IconButton onClick={(stateDrawer) => props.onClick(stateDrawer)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>

                <Divider/>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <ListItemText primary={"Usuarios"}/>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <DesktopWindowsIcon/>
                        </ListItemIcon>
                        <Link to="/Sensores" style={{ textDecoration: 'none' }}>
                            <ListItemText primary={"Sensores"}/>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <CollectionsIcon/>
                        </ListItemIcon>
                        <Link to="/Productos">
                            <ListItemText primary={"Productos"}/>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <Link to="/SobreNosotros">
                            <ListItemText primary={"SobreNosostros"}/>
                        </Link>
                    </ListItem>
                </List>

            </Drawer>
        </div>
    )
}

export default DrawerInsoel;