import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardHeader,
        Avatar,IconButton} from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) =>({
    root:{
        minWidth: 300,
        marginTop:theme.spacing(2),
        paddingRight:theme.spacing(2),
        paddingLeft:theme.spacing(2)
    },
    avatar:{
        backgroundColor: red[500],
    },
    media:{
        height: 0,
        paddingTop: '56.25%'
    }
}));

export default function UserCardInsoel(props){
    const classes = useStyles();
    const [expanded,setExpanded] = useState(false);

    const handleExpandClick = () =>{
        setExpanded(!expanded);
    }

    return(
        <Card className={classes.root}>
            <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>{props.letter}</Avatar>
            }
            action={
                <IconButton aria-label="Ajustes">
                    <MoreVertIcon/>
                </IconButton>
            }
            title={props.username}
            subheader={props.typecount}>

            </CardHeader>
        </Card>
    );
}