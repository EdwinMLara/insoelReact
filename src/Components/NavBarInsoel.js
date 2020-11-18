import React from 'react'
import {AppBar,Button,
    IconButton,makeStyles,
    ToolBar, Badge} from '@material-ui/core'

import {NotificationsIcon,MenuIcon} from '@material-ui/icons'

import insoellogo from '../Images/Insoel2.png'

const useStyles = makeStyles(theme => ({
    grow:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(2);
    },
    insoelImg:{
        width:'180px',
        height:'auto',
        marginTop: theme.spacing(2)
    },
    drawer:{
        width:'240px'
    }
}));

function NavBarInsoel(props){
    const classes = useStyles();
    
    return(
        <div className={classes.grow}>
            <AppBar position="static">
                <ToolBar>
                    <IconButton
                    aria-label="open Drawer"
                    className={classes.menuButton}
                    color="inherit"
                    edge="start"
                    onClick={(stateDrawer) => props.onClick(stateDrawer)}>
                        <MenuIcon/>
                    </IconButton>

                    <img src={insoellogo} className={classes.insoelImg}></img>

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

                    <Button color="inherit">Login</Button>
                </ToolBar>
            </AppBar>
        </div>
    )

}

export default NavBarInsoel;