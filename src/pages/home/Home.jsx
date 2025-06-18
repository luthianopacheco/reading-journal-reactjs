import { Box } from "@mui/material";
import Logo from "../../components/logo/logo";
import './Home.css';

function Home() {
    return (
        <Box className='logo'>
            <Logo showSlogan={true} />
        </Box >
    )
}

export default Home;