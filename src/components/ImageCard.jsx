import { Paper } from "@mui/material";
import MechSerImg from "../Assets/services/mech.png";

const ImageCard = () => {
    return ( 
        <Paper elevation={4} borderRadius="10px">
            <img component={Paper} elevation={4} src={MechSerImg} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}/>
        </Paper>
     );
}
 
export default ImageCard;