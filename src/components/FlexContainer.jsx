import { Box } from "@mui/material";

const FlexContainer = ({flexDirection,justifyContent, alignItems, children, ...props}) => {
    return ( 
        <Box
            display = 'flex'
            flexDirection = {flexDirection ? 'column' : 'row'}
            justifyContent = {justifyContent ? justifyContent : 'center'}
            alignItems = {alignItems ? alignItems : 'center'}
            {...props}
        >
            {children}   
        </Box>
     );
}
 
export default FlexContainer;