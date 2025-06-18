import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavButton({ label, to, active }) {
    const navigate = useNavigate();

    const sx = {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '30px',
        px: 3,
        width: '150px',
        height: '40px',
        color: active ? '#fafafa' : '#333333',
        backgroundColor: active ? '#6C4DFF' : '#f3f4f6',
        border: 'none',
        transition: '0.3s',
        '&:hover': {
            backgroundColor: active ? '#5a3ddb' : '#e0e0ff'
        }
    }

    return (
        <Button sx={sx} onClick={() => navigate(to)}>
            {label}
        </Button>
    );
}

export default NavButton;
