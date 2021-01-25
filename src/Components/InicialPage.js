import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {Link} from 'react-router-dom';

function InicialPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Link to="/">
                <Container maxWidth="lg">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                </Container>
            </Link>
        </React.Fragment>
    )
}

export default InicialPage
