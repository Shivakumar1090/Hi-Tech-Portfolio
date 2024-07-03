import { Box, Grid, Stack, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import About1_BlueDressGirlImg from "../../Assets/about us/about1_bluedressgirl.png";
import UnderlinText from "../../components/UnderLineText";
import TeamCard from "./team_card";
import importAllImages from "../../utils/imagesImporter";

const About = () => {
    const ClientImages = importAllImages(require.context('../../Assets/clients', false, /\.(png|jpe?g|svg)$/));
    return ( 
        <Box>
            <PageNameSec pagename="About US"/>

            <ResponsiveContainer mt={{xs: 2, md: 0}}>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{xs: 0, md: 5}}
                    justifyContent="space-between"
                    alignItems="center"
                    direction={{xs: 'column', md: 'row'}}
                >
                    <Grid item md={7} xs={5} textAlign='justify'>
                        {/* <Typography variant="Headings" fontSize="40px">About Us</Typography> */}
                        <UnderlinText> About Us </UnderlinText>
                        <Typography
                            lineHeight={1.7}
                            variant="body2"
                        >
                            HI-TECH Engineering, founded by a team of seasoned professionals, excels in design, planning, and project management. With over 7 years of experience in industrial green and brownfield projects, we provide end-to-end solutions from concept to commissioning. Our journey began with a vision to fill the gap in the market for experienced professionals who can partner with clients to drive growth. Today, we are proud to have built a reputation for delivering exceptional results, thanks to our skilled team and unwavering commitment to excellence. As the Indian economy grows, there is an increasing need for experienced professionals to partner in this growth. At HI-TECH, we are committed to bridging this gap and acting as extended partners to our clients, providing the most efficient solutions.
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={5}>
                        <img src={About1_BlueDressGirlImg} alt="img" style={{height: '100%', width: '100%' , objectFit: 'cover'}}/>
                    </Grid>
                </Grid>

                <Stack spacing={1} mt={5} alignItems='center' textAlign="center">
                    <UnderlinText>Our Clients</UnderlinText>
                    <Typography>We have had the privilege of working with a diverse range of clients across various industries.</Typography>
                    <Grid 
                        container
                        spacing={4}
                        columns={12}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {Object.keys(ClientImages)?.map((key,index) => {
                            return(
                                <Grid key={index} item xs={4} sm={4} md={2}>
                                    <TeamCard img={ClientImages[key]}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Stack>
            </ResponsiveContainer>
        </Box>
     );
}
 
export default About;