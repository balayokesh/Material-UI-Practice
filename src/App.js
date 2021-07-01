import React from 'react';

// Material-UI Components
import { Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button } from '@material-ui/core';

// Material-UI Icons
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return (
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hi this is some random Hi this is some random Hi this is some random Hi this is some random Hi this is some random Hi this is some random 
                    </Typography>
                    <div>
                        <Grid container justify='center' spacing={2}>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See My Photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>
        </div>
    );
}

export default App;