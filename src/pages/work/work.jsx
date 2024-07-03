import { Box, Grid, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import { useLoaderData } from "react-router-dom";

const Work = () => {
      
    const images = useLoaderData();
    return ( 
        <Box>
            <PageNameSec pagename="Our Recent Work" mb={2}/>
            <ResponsiveContainer >
                <UnderlinText>
                    Our Projects
                </UnderlinText>
                <Typography gutterBottom>Explore some of our successful projects across various sectors </Typography>
                <Grid 
                    container
                    spacing={3}
                    columns={12}
                    alignItems="center"
                    justifyContent="center"
                    mt={1}
                >
                    {Object.keys(images).map((key,index) => {
                        return(
                            <Grid key={index} item xl={3} xs={6} sm={4}>
                                <img src={images[key]} style={{width: '100%', height: 200, objectFit: 'cover',borderRadius: '10px'}} alt=""/>
                            </Grid>
                        )
                    })}
                </Grid>
                
            </ResponsiveContainer>
        </Box>
     );
}
 
export default Work;