import { Box, Grid, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import NewsCard from "./card";
import { useLoaderData } from "react-router-dom";

const News = () => {
    const newsdata = useLoaderData();

    return ( 
        <Box>
            <PageNameSec pagename="News"/>
            <ResponsiveContainer >
                <UnderlinText>
                    Latest News
                </UnderlinText>
                <Typography gutterBottom>Stay updated with the latest news </Typography>
                <Grid 
                    container
                    spacing={{xs: 2,md: 3}}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {newsdata.map(item => {
                        if (item.urlToImage) {
                            return (
                                <Grid key={item.url}  style={{ display: 'flex' }} item xl={3} xs={6} sm={4}>
                                    <NewsCard 
                                        item={item}
                                    />
                                </Grid>
                            );
                        }
                        return null; 
                    })}
                </Grid>
            </ResponsiveContainer>
        </Box>
     );
}
 
export default News;