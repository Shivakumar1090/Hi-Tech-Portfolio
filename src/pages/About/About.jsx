import { Box, Grid, Stack, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import crystalBlackBG from "../../Assets/backgrounds/crystalBlackBG.jpg";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import About1_BlueDressGirlImg from "../../Assets/about us/about1_bluedressgirl.png";
import UnderlinText from "../../components/UnderLineText";
import TeamCard from "./team_card";

const About = () => {
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
                >
                    <Grid item md={7} xs={5} textAlign='justify'>
                        {/* <Typography variant="Headings" fontSize="40px">About Us</Typography> */}
                        <UnderlinText> About Us </UnderlinText>
                        <Typography
                            lineHeight={1.5}
                        >
                            Hi-Tech Engineering excels in handling MEP turnkey projects, particularly within the Oil & Gas, Pharmaceutical, and Industrial (Automobile) Manufacturing sectors. Our journey begins from scratch, culminating in the handover of fully operational machinery to the functional head. Additionally, we have a sister company, LEPL, established in 2017, which focuses exclusively on precision works and machine installations.
                        </Typography>
                    </Grid>
                    <Grid item md={5} xs={5}>
                        <img src={About1_BlueDressGirlImg} alt="img" style={{height: '100%', width: '100%' , objectFit: 'cover'}}/>
                    </Grid>
                </Grid>

                <Stack spacing={1} mt={5} alignItems='center'>
                    <UnderlinText>Meet Our Team</UnderlinText>
                    <Grid 
                        container
                        spacing={4}
                        columns={12}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {Array.from(Array(6)).map(item => {
                            return(
                                <Grid item lg={2.5} xs={6} sm={4} md={3}>
                                    <TeamCard />
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