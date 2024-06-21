import { Box, Typography } from "@mui/material";
import UnderlinText from "../../components/UnderLineText";
import pipelinesImg from "../../Assets/backgrounds/pipelines.png";

const ServiceDetailPanel = (props) => {
    const { children, value, index, ...other } = props;
    return ( 
        <Box
            role="tabpanel"
            // hidden={value !== index}
        >
            <UnderlinText>Mechanical Services</UnderlinText>
            <Box sx={{margin: 'auto', mt: 2, mb: 2, height: {xs: '30vh', sm: '50vh'}}}>
                <img src={pipelinesImg} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </Box>
            <Typography gutterBottom fontSize={{xs: '20px', sm: '30px', }} fontWeight={600}>Access the system</Typography>
            <Typography variant="body2" lineHeight={2}>
                With 2023 sales and revenues of $67.1 billion, Caterpillar Inc. is the world’s leading manufacturer of construction and mining equipment, off-highway diesel and natural gas engines, industrial gas turbines and diesel-electric locomotives. For nearly 100 years, we’ve been helping customers build a better, more sustainable world and are committed and contributing to a reduced-carbon future. Our innovative products and services, backed by our global dealer network, provide exceptional value that helps customers succeed. Caterpillar does business on every continent, principally operating through three primary segments – Construction Industries, Resource Industries and Energy & Transportation – and providing financing and related services through our Financial Products segment.
            </Typography>
        </Box>
     );
}
 
export default ServiceDetailPanel;