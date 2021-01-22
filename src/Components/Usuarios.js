import { Grid, makeStyles} from '@material-ui/core'
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import UserCardInsoel from './UserCardInsoel';


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
const useStyles = makeStyles((theme) =>({
    gridContainer:{
        marginTop: theme.spacing(6)
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
        <Grid container className={classes.gridContainer}  justify='center' spacing={4}>      
            {usuarios.map(usuario => {
                let letter = usuario.username.substring(0,1);
                let Count;
                if(usuario.typeCount === '0'){
                    Count = 'Administrador';
                }else{
                    Count = 'Invitado';
                }
                console.log(Count);
                return <Grid item xs={12} sm={6} md={4}>
                            <UserCardInsoel 
                                key={usuario.id_usuario} 
                                username={usuario.username} 
                                letter={letter} 
                                typecount={Count}/>
                        </Grid>
            })}
        </Grid>  
    )
}

export default Usuarios;