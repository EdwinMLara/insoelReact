import React,{useState} from 'react';
import {Grid, makeStyles,
        Card, 
        CardHeader,
        CardContent,
        TextField,
        InputAdornment,
        IconButton,
        Button} from '@material-ui/core';
import {AccountCircle,
        Visibility,
        VisibilityOff} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    gridContainer:{
        marginTop: theme.spacing(24),

    },
    cardRoot:{
        maxWidth: 345
    },
    formMargin:{
        marginBottom: theme.spacing(4)
    }
}))

const usuario = {
    id_usuario: 0,
    username : '',
    password : '',
    showPassword : false
}

function Login() {

    const classes = useStyles();
    const [usuarioState, setUsuarioState] = useState(usuario);


    const handleChange = (props) => (event) => {
        setUsuarioState({
            ...usuarioState,
            [props]: event.target.value 
        });
    }

    const handleClickShowPassword = () =>{
        setUsuarioState({
            ...usuarioState,
            showPassword: !usuarioState.showPassword 
        });
    }

    const handleMouseDownPassword = (event) =>{
        event.preventDefault();
    }

    return (
        <Grid 
            container 
            className={classes.gridContainer} 
            justify="center"
            alignItems="center"
            direction="column">
            <Grid item>
                <Card className = {classes.cardRoot}>
                    <CardHeader title="Login"/>
                <CardContent>
                    <form autoComplete="off">
                        <TextField
                            className={classes.formMargin} 
                            label="required *"
                            placeholder="Username"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            className={classes.formMargin}
                            label="required *"
                            placeholder="Password"
                            type={usuarioState.showPassword ? 'text' : 'password'}
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {usuarioState.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.formMargin}>
                                login
                        </Button>
                    </form>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login
