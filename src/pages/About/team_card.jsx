import { Box } from "@mui/material";

const TeamCard = ({img}) => {
    return ( 
        <Box sx={{textAlign: 'center'}}>
            <img src={img} alt="" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            
        </Box>
     );
}
 
export default TeamCard;