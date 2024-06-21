import { Box, Grid, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import React from "react";
import ServiceDetailPanel from "./tab_panel";

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
                textAlign="justify"
                p={3}
                alignItems="stretch"
            >
                <Grid item xl={2} sx={{ borderRight: 1, borderColor: 'divider', textAlign: 'left', alignItems: 'stretch',}}>
                    <Tabs
                        orientation={isMediumUp ? "vertical" : "horizontal"}
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        
                    >
                        <Tab label="Mechanical services"  />
                        <Tab label="Electrical Services"  />
                        <Tab label="Plumbing Services"  />
                        
                    </Tabs>
                </Grid>
                <Grid item xl={8}>
                    <ServiceDetailPanel value={value} index={0}/>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default Services;