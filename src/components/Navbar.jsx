import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { 
    Box, 
    Drawer, 
    IconButton, 
    Paper, 
    Stack, 
    Tab, 
    Tabs, 
    Typography, } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Logoimg from "../Assets/icons/logo.png"
import { Link, useLocation } from "react-router-dom";

const navItems = ['Home', 'About', 'Services','Projects', 'News','Contactus'];
const drawerWidth = "100%";

const Navbar = (props) => {
    const { window } = props;
    const location = useLocation().pathname;
    const [currentTab, setCurrentTab] = useState(location);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setCurrentTab(location);
    }, [location]);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box>
            <Stack direction="row" justifyContent="space-between"alignItems="center">
                <Typography fontSize="20px" color="#000" fontWeight={700}>Menu</Typography>
                <IconButton onClick={handleDrawerToggle} >
                    <CloseIcon color='primary' style={{fontSize: '20px',background: '#000',padding: '5px',borderRadius: '5px'}}/>
                </IconButton>
            </Stack>
            <Stack spacing={2} alignItems="left" padding="10%">
                {navItems.map((item) => (
                    <Typography 
                        fontSize="18px" 
                        color="#000" 
                        onClick={handleDrawerToggle} 
                        fontWeight={500}
                        component={Link}
                        to={item === 'Home' ? "" : item}
                        sx={{textDecoration: 'none'}}
                    >
                        {item}
                    </Typography>
                ))}
          </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
        <Box
            id="BackToTop" 
            sx={navbar_cont}
            component={Paper}
            elevation={10}
        >
            <Box sx={{width: {xs: '60px', md: '100px', lg: '120px', xl: '80px'}, textAlign: 'center'}}>
                <img src={Logoimg} alt="logo" style={{width: '100%', objectFit: 'cover'}}/>
            </Box>

            <Box sx={{display: {xs: 'none', md: 'inline'}}}>
                <Tabs
                    indicatorColor="primary"
                    value={currentTab}
                    onChange={(event, newval) => setCurrentTab(newval)}
                    role="navigation"
                >
                    {navItems.map(item => (
                        <Tab
                            disableRipple
                            component={Link}
                            to={item === "Home" ? "" : item}
                            value={"/"+item}
                            label={ item}
                            sx={{textTransform: 'capitalize',fontSize: "15px"}}
                        >
                        </Tab>
                    ))}
                </Tabs>
            </Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon color='primary'/>
            </IconButton>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    margin: 'auto',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', background: "rgba(235, 64, 52,0.95)", padding: '5%', width: drawerWidth,opacity: 0.9 },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

const navbar_cont = {
    display: 'flex',
    justifyContent: {xs: 'space-between', md: 'space-around',},
    alignItems: 'center',
    padding: '10px',
}


Navbar.propTypes = {
    window: PropTypes.func,
};

 
export default Navbar;