import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Work = () => {
      
    const {Elecimages, Mechimages} = useLoaderData();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState(Elecimages);

    useEffect(() => {
        if(value === 0){
            setData(Elecimages);
        }else{
            setData(Mechimages);
        }
    },[value, Mechimages, Elecimages]);

    return ( 
        <Box >
            <PageNameSec pagename="Our Recent Work" mb={2}/>
            <ResponsiveContainer alignItems="center" >
                <UnderlinText>
                    Our Projects
                </UnderlinText>
                <Typography gutterBottom>Explore some of our successful projects across various sectors </Typography>
                <Tabs
                    orientation="horizontal"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{mb: 2}}

                    centered
                >
                    <Tab value={0} label="Electrical Services" wrapped sx={{textTransform: 'capitalize',fontSize: "16px"}}/>
                    <Tab value={1} label="Mechanical Services" wrapped sx={{textTransform: 'capitalize',fontSize: "16px"}}/>
                </Tabs>
                <Grid 
                    container
                    spacing={3}
                    columns={12}
                    alignItems="center"
                    justifyContent="center"
                    mt={1}
                >
                    {Object.keys(data).map((key,index) => {
                        return(
                            <Grid key={index} item xl={3} xs={6} sm={4}>
                                <img src={data[key]} style={{width: '100%', height: 200, objectFit: 'cover',borderRadius: '10px'}} alt=""/>
                            </Grid>
                        )
                    })}
                </Grid>
                
            </ResponsiveContainer>
        </Box>
     );
}
 
export default Work;