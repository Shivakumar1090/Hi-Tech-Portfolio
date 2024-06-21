import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import MechSerImg from "../Assets/services/mech.png";

const CardwithText = ({title,desc,imgUrl,articleUrl, news}) => {
    console.log(news)
    return ( 
        <Paper elevation={4}>
            <img src={MechSerImg} alt="" style={{width: '100%', objectFit: 'cover'}}/>
            <Stack spacing={{xs: 1,md: 2}} p={{xs: 1,md: 2}} textAlign="justify" alignItems="left">
                <Typography variant="Headings">{news?.title} Services</Typography>
                <Typography variant="body2"
                    sx = {{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: "2", sm: "3", md: "4" },
                        WebkitBoxOrient: "vertical",
                        fontWeight: "300",
                        fontSize: { xs: "10px",sm:'11px', md: "12px", },
                    }}
                >
                    Whether you need to install cooling for a new server room or figure out how to replace your inefficient central mechanical plant, you want to partner with mechanical engineers you trust.
                </Typography>
                {news?.articleUrl && 
                    <Box>
                        <Button  size='small' variant="contained" >
                            Read More
                        </Button>
                    </Box>
                }
            </Stack>
        </Paper>
     );
}
 
export default CardwithText;