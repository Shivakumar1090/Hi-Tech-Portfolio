import { Box, Typography } from "@mui/material";
import profile from "../../Assets/about us/team/passport_img.jpg";

const TeamCard = () => {
    return ( 
        <Box sx={{textAlign: 'center'}}>
            <img src={profile} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}/>
            <Typography  variant="Headings" fontSize="20px">Shiva Kumar CH</Typography>
            <Typography>Founding Member</Typography>
        </Box>
     );
}
 
export default TeamCard;