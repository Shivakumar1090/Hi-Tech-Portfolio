import { Box, Typography } from "@mui/material";

const UnderlinText = ({children, ...props}) => {
    return ( 
        <Box mb={2}>
            <Typography variant="Headings" {...props}  fontSize={{xs: '30px', sm: '40px'}}>
                {children}
            </Typography>
            <Box sx={{background: 'red', borderRadius: '50px',height: '3px', width: '70px'}} />
        </Box>
     );
}
 
export default UnderlinText;