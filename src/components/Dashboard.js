import * as React from 'react';
import './../../src/App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import 'poppins-font';
import 'fontsource-pridi';
import SearchIcon from '@mui/icons-material/Search';
import background from './../../src/assets/image/download.png'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, Stack, styled } from '@mui/material';
import foodbackground from './../assets/image/background.jpeg';
import dominos from './../assets/image/pizza.jpeg';


const MainBox = styled(Box)(() => ({
    backgroundImage: `url(${foodbackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: 0.4
}))

const SubTitle = styled(Box)(() => ({
    padding: 55,
    textAlign: 'center'
}))

const Title = styled(Typography)(() => ({
    fontWeight: 700,
    fontSize: 32,
    fontFamily: 'Poppins',
    color: 'rgba(228, 80, 29, 1)',
    borderBottom: '5px solid #E4501D',
    display: 'inline',
}))
const ContentBox = styled(Box)(() => ({

}))
const ContentCard = styled(Grid)(() => ({
    justifyContent: 'center',
    alignItem: 'center',
    display: 'flex',
    marginBottom: 50
}))
const Footer = styled(Typography)(() => ({
    padding: '100px 160px 100px 160px',
    color: 'white',
    fontSize: 20
}))
const MainGrid = styled(Grid)(() => ({
}))


const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar sx={{ background: 'rgba(228, 80, 29, 1)', justifyContent: 'center', height: 88 }} position="sticky">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img style={{ width: 60, height: 60, borderRadius: 15 }} src={background} alt='logo' />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        😊 Wel-Come To The Art of Pizza 😊
                    </Typography>
                    <Box>
                        <Typography sx={{ fontweight: 500, fontSize: 14, fontFamily: 'Poppins' }}>
                            (+91) 79840 - 75697
                        </Typography>
                        <Typography>
                            mulanikeyur90@gmail.com
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <MainBox sx={{ p: 10 }}>
                <Grid sx={{ p: 2 }} container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography className='title' sx={{ fontSize: 48, fontWeight: 400, fontFamily: 'pridi', p: 2, color: 'white', textAlign: 'center' }}>
                            Search What You Like
                        </Typography>
                        <Typography className='SubTitle' sx={{ fontSize: 16, fontWeight: 400, fontFamily: 'Poppins', p: 1, color: 'white', textAlign: 'center' }}>
                            Find specials masalas what you like
                        </Typography>
                    </Grid>
                </Grid>

                <Stack sx={{ p: 2 }} spacing={2} direction={{ xs: 'column', sm: 'row' }} display="flex" justifyContent="center" alignItems="center">

                    <Typography className='textInput'>
                        <input className='MainInput' style={{ background: 'white', width: 302, height: 48, borderRadius: 10, paddingLeft: 15 }} placeholder='i would like to search?' />
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 15, p: 1, background: 'rgba(228, 80, 29, 1)', fontWeight: 700, width: 152, height: 40, borderRadius: 2, color: 'white' }}>
                        search  <SearchIcon style={{ marginLeft: 7 }} />
                    </Box>
                </Stack>
            </MainBox>
            <SubTitle>
                <Title>
                    😃 OUR CATEGORY 😃
                </Title>
            </SubTitle>

            <ContentBox>

                <MainGrid container spacing={2}>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                </MainGrid>

            </ContentBox>
            <ContentBox>

                <MainGrid container spacing={2}>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                </MainGrid>

            </ContentBox>

            <ContentBox>

                <MainGrid container spacing={2}>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, mb: 2, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>
                    <ContentCard item xs={12} md={6} xl={3}>

                        <Card sx={{ maxWidth: 373, background: '#FDF6F3' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="210"
                                image={dominos}
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 400, fontSize: 20, fontFamily: 'Poppins' }} gutterBottom component="div">
                                    The South's Best Fried Chicken
                                </Typography>
                                <Typography sx={{ mb: 2, fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2" color="text.secondary">
                                    Fried pizza with cheese
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontweight: 700, fontSize: 14, textAlign: 'start' }} variant="body2">
                                    $ 18,48
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ float: 'right' }}>
                                <Button sx={{ background: 'rgba(228, 80, 29, 1)', color: 'white', borderRadius: 2, fontSize: 13 }} size="small">See more</Button>
                            </CardActions>
                        </Card>

                    </ContentCard>

                </MainGrid>

            </ContentBox>

            <Stack sx={{ my: 3 }} spacing={2}>
                <Pagination count={10} color="primary" />
            </Stack>

            <Box sx={{ background: 'black' }}>
                <Footer>
                    Loremem  epsumn conter  h Loremem epsumn conter gfghn   h Loremem epsumn conter gfghn gfghn h Loremem epsumn conter gfghn h Loremem epsumn conter gfghn h Loreme Loremem  epsumn conter gfghn h Loremem epsumn conter gfghn h Loremem epsumn conter gfghn h Loremem epsumn conter gfghn hm epsumn conter gfghn h
                </Footer>
            </Box>

        </Box >
    );
}
export default Dashboard;
