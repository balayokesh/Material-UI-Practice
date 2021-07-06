import React from 'react';

// Material-UI Components
import { Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

// Material-UI Icons
import { PhotoCamera } from '@material-ui/icons';

// Material styles
import useStyles from './styles';

// Other declarations
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles ();
    return (
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Hi this is some random Hi this is some random Hi this is some random Hi this is some random Hi this is some random Hi this is some random 
                        </Typography>
                        <div className={classes.buttons} >
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
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map ( (card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} >
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='Image title'
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant='h5'>  
                                            Heading
                                        </Typography>
                                        <Typography>  
                                            This is a media card.  You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>    
                        )
                        )}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' gutterBottom align='center'>
                    Footer
                </Typography>
                <Typography variant='subtitle1' gutterBottom align='center' color='textSecondary' >
                    Something here to give footer the purpose
                </Typography>
            </footer>
        </div>
    );
}

export default App;