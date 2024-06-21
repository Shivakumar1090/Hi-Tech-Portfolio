import { Box } from "@mui/material";

const ResponsiveContainer = ({minHeight, children, ...props}) => {
    return ( 
        <Box 
            sx={{margin: 'auto' , width: {xl: '75%',lg: '80%',xs: '90%'}, minHeight: minHeight ? minHeight : {xs: '50vh', md: '60vh'}, 
            display: 'flex', flexDirection: 'column', justifyContent: 'center'}}

            {...props}
        >
            {children}
        </Box>
     );
}
 
export default ResponsiveContainer;