import { Stack } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaAccounts = () => {

    const accountsData = [
        {
            id: 1,
            Icon: WhatsAppIcon,
            Link: "",
        },
        {
            id: 2,
            Icon: MailOutlineOutlinedIcon,
            Link: "",
        },
        {
            id: 3,
            Icon: InstagramIcon,
            Link: ""
        },
        {
            id: 4,
            Icon: LinkedInIcon,
            Link: ""
        },
        {
            id: 5,
            Icon: YouTubeIcon,
            Link: "",
        },
    ]

    return ( 
        <Stack spacing={2} direction="row">
            {accountsData.map(acnt => (
                <a
                    key={acnt.id}
                    target="_blank"
                    href={acnt.Link}
                    rel="noopener noreferrer"
                >
                    <acnt.Icon sx={icon}  />
                </a>
            ))}
        </Stack>
    );
}

const icon = {
    color: '#0e0e0e',
    fontSize: {xs: '15px',sm:'20px',lg: '30px'},
    borderRadius: '50px',
    padding: '5px',
    background: '#fff',
    "&:hover" : {
        color : '#fff',
        background: '#0e0e0e',
        transform: "translate(0px,-5px)",
        transitionDuration: "3s",
        transitionTimingFunction: "ease-in",

    }
}

export default SocialMediaAccounts;