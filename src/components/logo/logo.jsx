import { Typography } from "@mui/material";

function Logo({ showSlogan, fontSize = '130pt' }) {

    const mainSx = {
        fontFamily: 'Allura, cursive',
        fontWeight: 'bold',
        fontSize: fontSize,
        lineHeight: 0.5,
        marginBottom: showSlogan ? '80px' : '0px',
        color: "#000000"
    }

    const spanSx = { marginLeft: showSlogan ? '50px' : '10px' }

    const sloganSx = {
        fontSize: '10pt',
        marginLeft: '340px',
        marginTop: '-80px',
    }

    return (
        <div>
            <Typography sx={mainSx}> Diário de
                <br />
                <span style={spanSx}> Leitura </span>
            </Typography>

            {showSlogan && (
                <Typography sx={sloganSx}> Palavra a palavra, vamos longe</Typography>
            )}
        </div>
    )
}

export default Logo;