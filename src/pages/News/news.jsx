import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import { useEffect, useState } from "react";
import axios from "axios";
import FlexContainer from "../../components/FlexContainer";
import NewsCard from "./card";

const News = () => {
    const [newsdata, setNewsData] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        axios.get("https://newsapi.org/v2/everything?q=Mechanical%20Engineering%20and%20Technology%20News&sortBy=popularity&apiKey=32420470b8554916a1409dd5a9441c84&page=1&pageSize=30")
            .then(async resp => {
                setLoading(false)
                console.log(resp);
                await setNewsData(resp?.data?.articles);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if(loading) 
        return (
            <FlexContainer height='80vh' >
                <CircularProgress />    
            </FlexContainer>
        )
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
                    // columns={12}
                    // justifyContent="center"
                    // alignItems="stretch"
                    justifyContent="center"
                    alignItems="stretch"
                    
                >
                    {
                        loading ? <CircularProgress /> :
                        newsdata.map(item => {
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
                        })
                    }
                </Grid>
            </ResponsiveContainer>
        </Box>
     );
}
 
export default News;