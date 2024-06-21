import { Container, Typography } from "@mui/material";
import crystalBlackBG from "../Assets/backgrounds/crystalBlackBG.jpg";

const PageNameSec = ({pagename, }) => {
    return ( 
        <Container maxWidth='true' sx={container}>
            <Typography fontSize={{xs: '40px', md: '40px'}} variant='Headings'>{pagename}</Typography>
        </Container>
     );
}

const container = {
    backgroundImage: `url(${crystalBlackBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30vh',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    mb: 2,
}
 
export default PageNameSec;