import React from 'react';
import clsx from 'clsx';

import {AppBar,Button,makeStyles,IconButton,
    Toolbar, Badge} from '@material-ui/core'

import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

import insoellogo from '../Images/Insoel2.png';

import {Link} from 'react-router-dom';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    grow:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none',
    },
    insoelImg:{
        width:'180px',
        height:'auto',
        marginTop: theme.spacing(2,2)
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }
}));

function NavBarInsoel(props){
    const classes = useStyles();
    
    return(
        <div className={classes.grow}>
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: props.state,
                      })}>
                <Toolbar>
                    <IconButton
                    aria-label="open Drawer"
                    className={clsx(classes.menuButton, props.state && classes.hide)}
                    color="inherit"
                    edge="start"
                    onClick={(stateDrawer) => props.onClick(stateDrawer)}>
                        <MenuIcon/>
                    </IconButton>

                    <img src={insoellogo} className={classes.insoelImg} alt="insoelLogo"></img>

                    <div className={classes.grow}></div>

                    <IconButton
                    aria-label="Mostrar 17 notificaciones"
                    color="inherit">
                        <Badge
                        badgeContent={17}
                        color="secondary">
                            <NotificationsIcon></NotificationsIcon>
                        </Badge>
                    </IconButton>
                    
                    <Link to="/Login" color="inherit">
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default NavBarInsoel;