import { Grid, makeStyles, Paper, 
    Table, TableBody, 
    TableCell, TableContainer, 
    TableHead, TableRow,
    withStyles} from '@material-ui/core'
import axios from 'axios';
import React,{useState,useEffect} from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const baseUrl = "http://localhost/insoelApi/";

const headers = {
    'Content-Type':'application/json'
}

const bodyGetToken = {
    name: 'generateToken',
    param:{
        'username':'EdwinMLara',
        'password':'admin'  
    }
}

const bodyGetUsers = {
    name : 'getUsers',
    param:{

    }
}

const StyledTableCell = withStyles((theme) => ({
    head:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body:{
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root:{
        '&:nth-of-type(odd)' : {
            backgroundColor : theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles((theme) =>({
    root:{
        marginTop:theme.spacing(8)
    },
    table:{
        minWidth:600
    },
    iconLeft:{
        flex:1
    },
    iconRight:{
        flex:1
    }
}));

const postRequest = async (url,headers,body) => { 
    return await axios({
        method:'post',
        url:url,
        headers:headers,
        data: body
    })
}

function Usuarios() {
    const classes = useStyles();
    const [usuarios,setUsuarios] = useState([]);

    useEffect(() => {
        postRequest(baseUrl,headers,bodyGetToken)
        .then(response => {
            console.log(response.data.response);
            let res  = response.data.response;
            if(res.status === 200){
                headers['Authorization'] = 'Bearer ' + res.result.token;
                console.log(headers);
                return postRequest(baseUrl,headers,bodyGetUsers)
            }
        })
        .then(response => {
            console.log(response.data.response.result);
            setUsuarios(response.data.response.result);
        })
        .catch(err =>{
            console.log(err);
        })
    },[]);

    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Usuario</StyledTableCell>
                        <StyledTableCell>Contraseña</StyledTableCell>
                        <StyledTableCell>Tipo de Cuenta</StyledTableCell>
                        <StyledTableCell>Fecha</StyledTableCell>
                        <StyledTableCell>Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usuarios.map(usuario => {
                        let Count;
                        (usuario.typeCount === '0') ? Count = 'Administrador': Count = 'Invitado'
                        console.log(Count);
                        return (
                            <StyledTableRow key={usuario.id_usuario}>
                                <StyledTableCell>{usuario.username}</StyledTableCell>
                                <StyledTableCell>{usuario.password}</StyledTableCell>
                                <StyledTableCell>{Count}</StyledTableCell>
                                <StyledTableCell>{usuario.time}</StyledTableCell>
                                <StyledTableCell>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <EditIcon/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DeleteIcon/>
                                        </Grid>
                                    </Grid>
                                </StyledTableCell>
                            </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>  
    )
}

export default Usuarios;