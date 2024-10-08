import { Box, Button, CircularProgress, FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
import PageNameSec from "../../components/Pagenamesec";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import UnderlinText from "../../components/UnderLineText";
import { useState } from "react";
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";

const Contactus = () => {
    const initdata = {
        name: "",
        email: "",
        phoneno: "",
        company: "",
        message: "",
    }
    const [formData,setFormData] = useState(initdata)
    const [loading,setLoading] = useState(false)

    const HandleSubmit = async() => {
        await setLoading(true)
        axios.post("https://formspree.io/f/movaajlb", formData)
            .then(res => {
                setLoading(false)
                console.log(res)
                res.data.ok ? window.alert("Successfullly Submitted !") : window.alert("something error occured :(")
                setFormData(initdata)
            })
            .catch(err => {
                window.alert("Something Error Occured")
                console.log(err)
            })
        setLoading(false)
    }
    return ( 
        <Box>
            <PageNameSec pagename="Contact Us"/>
            <ResponsiveContainer>
                <Grid
                    container
                    columnSpacing={{md: 3, lg: 5}}
                    rowSpacing={{xs: 2, sm: 3, md: 0}}
                >
                    <Grid item md={6}>
                        <iframe 
                            title='company location'
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3779.9975131577103!2d73.9443448751952!3d18.664107582457568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM5JzUwLjgiTiA3M8KwNTYnNDguOSJF!5e0!3m2!1sen!2sin!4v1720370958455!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{border:"0",}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                        <Stack mt={2} spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <BusinessIcon />
                                <Typography fontWeight={600}>High Tech Engineering</Typography>
                            </Stack>
                            <Typography variant="body2" fontWeight={300}>
                                Near Sai enterprises, Ground floor, plot no 8,
                                Gate no 527/2, Markel Road, khed, Alandi Rural, Pune,
                                Maharashtra, 412105,INDIA
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <PersonIcon />
                                <Typography variant="body2">Mr. Umesh Nimbalkar</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <CallIcon />
                                <Typography variant="body2">+91 9689211588</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <EmailIcon />
                                <Typography variant="body2">umeshhitecheng@gmail.com</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6}>
                        <UnderlinText>Contact US</UnderlinText>
                        <Typography variant="body2">We would love to hear from you! Whether you have a question about our services, projects, or anything else, our team is ready to answer all your questions.</Typography>
                        
                        <FormControl fullWidth >
                            <TextField 
                                required
                                variant="outlined" 
                                label="Full Name"
                                margin="normal"
                                color='secondary'
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                            <TextField 
                                required
                                variant="outlined" 
                                label="Email"
                                margin="normal"
                                color='secondary'
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                            <TextField 
                                required
                                variant="outlined" 
                                label="Phone Number"
                                margin="normal"
                                color='secondary'
                                value={formData.phoneno}
                                onChange={(e) => setFormData({...formData, phoneno: e.target.value})}
                            />
                            <TextField 
                                required
                                variant="outlined" 
                                label="Company"
                                margin="dense"
                                color='secondary'
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                            />
                            <TextField 
                                required
                                variant="outlined" 
                                label="Message"
                                margin="normal"
                                color='secondary'
                                multiline
                                 minRows="3" 
                                maxRows="5"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                            <Button variant="contained" size='large' sx={{mt: 1}} onClick={HandleSubmit}> 
                                {loading ? <CircularProgress color="secondary" /> : "Submit"}
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </ResponsiveContainer>
        </Box>
     );
}
 
export default Contactus;