import { Box, Stack, Typography } from "@mui/material";
import Logoimg from "../Assets/icons/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <Box sx={container}>
             <Stack 
                spacing={{xs: 1,sm: 2}}
                alignItems="center"
            >
                <Box sx={{width: {xs: '100px', lg: '120px', xl: '140px'}, textAlign: 'center'}}>
                    <img src={Logoimg} alt="logo" style={{width: '100%', objectFit: 'cover'}}/>
                </Box>
                <Typography fontWeight="600">Building the Future, Restoring the Past</Typography>
                {/* <Box sx={line}/> */}
            </Stack>
            <Stack marginTop={{xs: '20px',sm: '0px'}} direction={{xs: 'column',md: 'row'}} spacing={{xs: 2,md: 10}}>
                <Stack spacing={1}>
                    <Typography fontSize="20px" fontWeight={600}>Contact us</Typography>
                    <Typography fontWeight={200}>+91 9689211588</Typography>
                    <Lightfont>umeshhitecheng@gmail.com</Lightfont>
                    <Lightfont>Plot no-12/15, Vikas wadi, Alandi Markal Road, Alandi Pune -412105</Lightfont>
                </Stack>
                {/* <Stack spacing={1}>
                    <Typography fontSize="20px" fontWeight={600}>Our Services</Typography>
                    <Lightfont>Websites Development</Lightfont>
                    <Lightfont>App Development</Lightfont>
                    <Lightfont>Graphic Designing</Lightfont>
                    <Lightfont>Digital Marketing</Lightfont>
                    <Lightfont>Video Editing</Lightfont>
                   
                </Stack> */}
                <Stack spacing={1}>
                    <Typography fontSize="20px" fontWeight={600}>Pages</Typography>
                    <Link to="/" smooth={true} ><Lightfont cursor='pointer'>Home</Lightfont></Link>
                    <Link to="About" smooth={true}><Lightfont cursor='pointer'>About</Lightfont></Link>
                    <Link to="services" smooth={true}><Lightfont cursor='pointer'>Services</Lightfont></Link>
                    <Link to="projects" smooth={true}><Lightfont cursor='pointer'>Projects</Lightfont></Link>
                    <Link to="News" smooth={true}><Lightfont cursor='pointer'>News</Lightfont></Link>
                    <Link to="Contactus" smooth={true}><Lightfont cursor='pointer'>Contact us</Lightfont></Link>
                </Stack>
            </Stack>
        </Box>    
    );
}

const Lightfont = ({children,cursor}) => {
    return(
        <Typography sx={{cursor: cursor && "pointer",color: '#fff', textTransform: 'none'}} fontWeight={200}>{children}</Typography>
    )
}

const container = {
    backgroundColor: '#0e0e0e',
    color: '#fff',
    mt: 5,
    p: 5,
    display: 'flex',
    minHeight: '40vh',
    flexDirection: {xs: 'column', md: 'row'},
    alignItems: 'center',
    justifyContent: 'space-around',
}
 
export default Footer;