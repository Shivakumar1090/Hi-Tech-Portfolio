import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import BackgroundImage from "../../Assets/backgrounds/HomeBG.jpg";
import About1_BlueDressGirlImg from "../../Assets/about us/about1_bluedressgirl.png";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import CardwithText from "../../components/CardwithText";
import FlexContainer from "../../components/FlexContainer";
import PipelinesBg from "../../Assets/backgrounds/pipelines.png";
import { Link } from "react-router-dom";
import importAllImages from "../../utils/imagesImporter";
  
const {Services_data} = require("../../Data/service_data");
const Project_images = importAllImages(require.context('../../Assets/Hitech Photos/Mechanical', false, /\.(png|jpe?g|svg)$/));

const Home = () => {
    const ProjectImageKeys = Object.keys(Project_images).slice(0, 4);
    return ( 
        <Box component="main">
            <Container maxWidth='true' sx={WelcomeContainer}>
                <Typography variant="Headings" sx={{opacity: 0.8}} fontSize={{xs: '50px',md: '70px', lg: '80px',xl: '100px'}}>Collaboration is Inspiration</Typography>
                <Typography gutterBottom fontSize={{xs: '15px', md: '18px', xl:"20px"}}>Our innovations result in healthier, inspirational environments</Typography>
                <Box>
                <Button size="large" variant="contained"
                    component={Link}
                    to="/about"
                >Learn More</Button>
                </Box>
            </Container>

            <Stack spacing={5} alignItems="center" width='100%'>
                <ResponsiveContainer >
                    <Grid
                        container
                        rowSpacing={{xs: 3, md: 0}}
                        columnSpacing={{xs: 0, md: 5}}
                        direction={{xs: 'column-reverse', md: 'row'}}
                        justifyContent="space-between"
                        alignItems="center"
                        // sx={{minHeight: '70vh'}}
                    >
                        <Grid item md={5} xs={5}>
                            <img src={About1_BlueDressGirlImg} alt="img" style={{height: '100%', width: '100%' , objectFit: 'cover'}}/>
                        </Grid>
                        <Grid item md={7} xs={5} textAlign='justify'>
                            <UnderlinText> About Us </UnderlinText>
                            <Typography
                                lineHeight={1.5}
                            >
                                HI-TECH Engineering, established by a team of seasoned professionals, excels in design, planning, and project management. With over 7 years of experience in industrial green and brownfield projects, we provide end-to-end solutions from concept to commissioning. Our dedication to quality and innovation ensures that we meet the highest standards in the industry.
                            </Typography>
                        </Grid>
                    </Grid>
                </ResponsiveContainer>

                <ResponsiveContainer  >
                    <FlexContainer justifyContent= 'space-between' mb={2}>
                        <UnderlinText>Our Services</UnderlinText>
                        <Button  component={Link} to="services">See more</Button>
                    </FlexContainer>
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={2}
                        columns={{ xs: 4, sm: 8, md: 12,}}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {Services_data.slice(0,4).map((service,index) => {
                            return(
                                <Grid item xs={2} sm={4} md={3}   key={index} style={{ display: 'flex' }}>
                                    <CardwithText 
                                        title={Services_data[index].Title}
                                        img = {Services_data[index].Image}
                                        content = {Services_data[index].Content}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </ResponsiveContainer>

                <FlexContainer flexDirection="column"  
                    sx={{
                        height: '40vh',
                        width : '100%',
                        backgroundImage: `linear-gradient(to bottom,rgba(226, 51, 57,0.7),rgba(226, 51, 57, 0.7)),url(${PipelinesBg})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        color: '#fff',
                        textAlign: 'center'
                    }}
                >
                    <Typography fontWeight={700} fontSize={{xs: '35px', sm: '50px'}}>Connect with us and explore our services</Typography>
                
                    <Button component={Link} to="contactus" size="large" color='secondary' variant="contained" sx={{mt: 2}}>Contact US</Button>
                </FlexContainer>

                {/* Projecrs */}
                <ResponsiveContainer>
                    <FlexContainer justifyContent= 'space-between' mb={2}>
                        <UnderlinText>Our Projects</UnderlinText>
                        <Button component={Link} to="projects">See more</Button>
                    </FlexContainer>
                    <Grid
                        container
                        rowSpacing={3}
                        columnSpacing={2}
                        columns={{ xs: 4, sm: 8, md: 12,}}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {ProjectImageKeys.map((key,index) => {
                            return(
                                <Grid item xs={2} sm={4} md={3}   key={index}>
                                    <img src={Project_images[key]} alt="" style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: '10px'}}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </ResponsiveContainer>
            </Stack>
        </Box>
    );
}

const WelcomeContainer = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    color: '#fff',
   
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default Home;