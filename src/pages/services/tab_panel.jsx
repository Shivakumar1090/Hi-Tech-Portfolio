import { Box, Typography } from "@mui/material";
import UnderlinText from "../../components/UnderLineText";
import pipelinesImg from "../../Assets/backgrounds/pipelines.png";

const {Services_data} = require("../../Data/service_data");

const ServiceDetailPanel = ({indx}) => {
   
    return ( 
        <Box
            role="tabpanel"
            // hidden={value !== index}
        >
            <UnderlinText>{Services_data[indx]?.Title}</UnderlinText>
            <Box sx={{margin: 'auto', mt: 2, mb: 2, height: {xs: '30vh', sm: '50vh'}}}>
                <img src={Services_data[indx].Image ? Services_data[indx].Image :  pipelinesImg} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Typography gutterBottom fontSize={{xs: '20px', sm: '25px', }} fontWeight={600}>{Services_data[indx]?.Subheading}</Typography>
            <Typography variant="body2" lineHeight={2} textAlign="justify">
                {Services_data[indx]?.Content}
            </Typography>
        </Box>
     );
}
 
export default ServiceDetailPanel;