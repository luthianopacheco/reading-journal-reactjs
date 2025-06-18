import { useLocation, useNavigate } from "react-router-dom";
import { HomeFilled } from '@mui/icons-material';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';
import Logo from "../logo/logo";
import NavButton from "./navButton";

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    const appBarSx = { backgroundColor: "#ececfc", px: 2 }
    const toolbarSx = { display: "flex", justifyContent: "space-between" }
    const middleBoxSx = { display: "flex", alignItems: "center", gap: 2 }
    const logoSx = { visibility: isActive('/') ? 'hidden' : 'visible' }
    const iconButtonSx = {
        color: isActive('/') ? '#5a3ddb' : '#333',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '30px',
        px: 3
    }


    return (
        <Box>
            <AppBar position="static" elevation={0} sx={appBarSx} >
                <Toolbar sx={toolbarSx}                >
                    <IconButton sx={iconButtonSx} onClick={() => navigate("/")} color="inherit" >
                        <HomeFilled />
                    </IconButton>

                    <Box sx={middleBoxSx} >
                        <NavButton label="Sobre" to="/about" active={isActive('/about')} />
                        <NavButton label="Cadastrar" to="/book-form" active={isActive('/book-form')} />
                        <NavButton label="Ver Leituras" to="/book-list" active={isActive('/book-list')} />
                    </Box>

                    <Box sx={logoSx}>
                        <Logo showSlogan={false} fontSize="20pt" />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navigation;
