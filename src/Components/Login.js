import React,{useState} from 'react';
import {Grid, makeStyles,
        Card, 
        CardHeader,
        CardContent,
        TextField,
        InputAdornment,
        IconButton,
        Button,
        FormControlLabel,
        Checkbox,
        Typography} from '@material-ui/core';
import {AccountCircle,
        Visibility,
        VisibilityOff} from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
    showPassword : false,
    rememberme:false
}

function Login() {

    const classes = useStyles();
    const [usuarioState, setUsuarioState] = useState(usuario);


    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name,value);
        setUsuarioState({
            ...usuarioState,
            [name]: value 
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

    const handleSubmit = (event) => {
        console.log(usuarioState);
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
                    <form  onSubmit={handleSubmit} autoComplete="off">
                        <TextField
                            className={classes.formMargin}
                            name="username"
                            label="required *"
                            placeholder="Username"
                            InputProps={{
                                startAdornment:(
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={handleChange}
                        />

                        <TextField
                            className={classes.formMargin}
                            name="password"
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
                            onChange={handleChange}
                        />

                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={usuarioState.rememberme}
                                name="rememberme"
                                color="primary"
                                onClick={handleChange}
                            />
                            }
                            label="Recordarme"
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                            className={classes.formMargin}>
                                login
                        </Button>

                        <Typography>
                            <Link to="/" href="www.google.com"> Olvidaste la constraseña</Link>
                        </Typography>
                        
                        <Typography>
                            Tienes una Cuenta?
                            <Link to="/" href="www.google.com">
                                Sing up
                            </Link>
                        </Typography>
                    </form>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Login
