import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import React from "react";
import ServiceDetailPanel from "./tab_panel";

const {Services_data} = require("../../Data/service_data");

const Services = () => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ( 
        <Box>
            <PageNameSec pagename="Services"/>
            <Grid 
                container
                columnSpacing={5}
                rowSpacing={3}
                justifyContent="space-around"
                // textAlign="justify"
                p={3}
                alignItems="stretch"
            >
                <Grid item xs={12} lg={3} sx={{ borderRight: {xs: 0, lg: 1}, borderColor: 'divider', textAlign: 'left', alignItems: 'stretch',}}>
                    <Tabs
                        orientation={isMediumUp ? "vertical" : "horizontal"}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        // centered
                    >
                        {Services_data?.map((item,index) => (
                            <Tab key={index} value={index} label={item?.Title} wrapped/>
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xl={8}>
                    <ServiceDetailPanel indx={value} index={0}/>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Services;