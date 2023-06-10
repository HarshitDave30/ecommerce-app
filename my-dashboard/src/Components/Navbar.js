import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { theme } from './Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const LogoStyle = {
    color: "white",
    textDecoration: "none",
    verticalAlign: "sub"
};

export default function Navbar({ cartvalue }) {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.secondary.main }}>
                <Toolbar>
                    <Container fixed sx={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                            <Link style={LogoStyle} to="/">E-COMMERCE</Link>
                        </Typography>
                        <IconButton aria-label="cart" sx={{ marginRight: 1 }}>
                            <StyledBadge badgeContent={cartvalue} color="primary">
                                <Link to='/cart'> <ShoppingCartIcon color="white" /> </Link>
                            </StyledBadge>
                        </IconButton>
                        <Button color="white" sx={{ fontWeight: 700 }}> <Link style={LogoStyle} to='/login'> LOGOUT </Link></Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}