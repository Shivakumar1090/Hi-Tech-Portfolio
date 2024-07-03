import { Paper, Stack, Typography } from "@mui/material";

const CardwithText = ({title,content,img}) => {
    return ( 
        <Paper elevation={4} >
            <img src={img} alt="" style={{width: '100%', objectFit: 'cover'}}/>
            <Stack spacing={{xs: 1,md: 2}} p={{xs: 1,md: 2}} textAlign="justify" alignItems="left">
                <Typography variant="Headings">{title}</Typography>
                <Typography variant="body2"
                    sx = {{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: "3", sm: "3", md: "4" },
                        WebkitBoxOrient: "vertical",
                        fontWeight: "300",
                        fontSize: { xs: "10px",sm:'11px', md: "12px", },
                        
                    }}
                >
                    {content}
                </Typography>
                
            </Stack>
        </Paper>
     );
}
 
export default CardwithText;