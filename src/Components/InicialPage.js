import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Grid, makeStyles } from '@material-ui/core';

import insoellogo from '../Images/InsoelLogo.png';

const useStyles = makeStyles(theme => ({
    insoelLogoImg:{
        width: '90%',
        height:'auto'
    },
    containerMargin:{
        marginTop: theme.spacing(8)
    }
}));

function InicialPage() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={1} className={classes.containerMargin}>
                    <Grid item xs={12} md={6} lg={4}>
                        <img className={classes.insoelLogoImg} src={insoellogo} alt="insoelLogo"></img>
                    </Grid>
                    
                    <Grid item xs={12} md={6} lg={8}>
                        <Typography variant="h5" align='justify'>
                            Insoel es una empresa dedicada principalmente al desarrollo de sistemas Iot,
                            Además uno de sus prinsipales objectivos es la resolución de problemas especificos
                            (El Cliente plantea una ídea de proyecto e insoel ofrecce una gama de solúciones de las cuales
                            el cliente puede escojer la que más comveniente de acuérdo a sus necesidades)
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default InicialPage
