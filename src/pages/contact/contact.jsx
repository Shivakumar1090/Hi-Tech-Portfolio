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
                            title="company-location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15118.983444554144!2d73.89516034212394!3d18.675396876056446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c89cfe0b65cb%3A0x7f6c4fb9088164f5!2sTanishq%20Vlasta!5e0!3m2!1sen!2sin!4v1718893934562!5m2!1sen!2sin" 
                            width="100%"
                            height={450} 
                            style={{border: 0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                        <Stack mt={2} spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <BusinessIcon />
                                <Typography fontWeight={600}>High Tech Engineering</Typography>
                            </Stack>
                            <Typography variant="body2" fontWeight={300}>Plot no-12/15, Vikas wadi, Alandi Markal Road, Alandi Pune -412105</Typography>
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
                                <Typography variant="body2">mail@gmail.com</Typography>
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