import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const NewsCard = ({ item }) => {

    return (
        <Box sx={container} component={Paper} elevation={2}>
            <Stack direction="column" spacing={1}>
                <Box sx={{ height: { xs: "100px", sm: "140px" }, width: "100%" }}>
                    <img src={item?.urlToImage} alt="img" style={img} />
                </Box>

                <Typography
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: "2", sm: "2", md: "3" },
                        WebkitBoxOrient: "vertical",
                        lineHeight: "1.4",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        fontWeight: 600
                    }}
                >
                    {item?.title}
                </Typography>
            </Stack>
            <Stack spacing={1} marginTop={2}>
                <Typography
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: "2", sm: "3", md: "4" },
                        WebkitBoxOrient: "vertical",
                        fontWeight: "300",
                        fontSize: { xs: "10px",sm:'11px', md: "12px", },
                    }}
                >
                    {item?.description}
                </Typography>
            
               
                <Button
                    variant="contained"
                    sx={{borderRadius: '50px'}}
                    component="a"
                    href={item?.url} // Replace with your URL
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                >
                    Read More
                </Button>
            </Stack>
        </Box>
    );
};

const container = {
    maxWidth: 300,
    border: "solid #0e0e0e",
    borderWidth: "2px",
    borderRadius: "20px",
    padding: { xs: "5px", md: "8px", lg: "10px" },
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
};

const img = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "15px",
};

export default NewsCard;
