import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Grid, makeStyles } from '@material-ui/core';

import insoellogo from '../Images/InsoelLogo.png';

import ProyectoCard from './ProyectoCard';

import banco from '../Images/banco.jpeg';
import reactor from '../Images/reactor.jpg';
import concurso from '../Images/concurso.jpeg';

const useStyles = makeStyles(theme => ({
    insoelLogoImg:{
        width: '90%',
        height:'auto'
    },
    containerMargin:{
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4)
    }
}));

function InicialPage() {

    const classes = useStyles();

    const description1 = "Desarrollo de un banco de pruebas para un motor a conbustion interna";
    const description2 = "Instrumentacion y desarrolo de control para monitero de un bioreactor";
    const description3 = "Participacion en consurso de creatividad e inovación donde se obtuvo un premio";



    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={1} className={classes.containerMargin}>
                    <Grid item xs={12} sm={5}md={6} lg={4}>
                        <img className={classes.insoelLogoImg} src={insoellogo} alt="insoelLogo"></img>
                    </Grid>
                    
                    <Grid item xs={12} sm={7} md={6} lg={8}>
                        <Typography variant="h5" align='justify'>
                            Insoel es una empresa dedicada principalmente al desarrollo de sistemas Iot,
                            Además uno de sus prinsipales objectivos es la resolución de problemas especificos
                            (El Cliente plantea una ídea de proyecto e insoel ofrecce una gama de solúciones de las cuales
                            el cliente puede escojer la que más comveniente de acuérdo a sus necesidades)
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item>
                        <ProyectoCard 
                            image={banco} 
                            title="Dinamometro" 
                            description={description1}/>    
                    </Grid>
                    <Grid item>
                        <ProyectoCard 
                            image={reactor} 
                            title="Bioreactor" 
                            description={description2}/>
                    </Grid>
                    <Grid item>
                        <ProyectoCard
                            image={concurso}
                            title={"Concurso"}
                            description={description3}/>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default InicialPage
