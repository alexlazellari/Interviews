import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Typography,
    Divider,
    List,
    AppBar,
    IconButton,
    Drawer,
    Toolbar,
    AppBarProps,
    Chip,
    Button,
} from '@mui/material';
import styled from 'styled-components';
import { Menu } from '@mui/icons-material';

const StyledLink = styled(Link)`
    width: 100%;
    border-radius: 5px;
    padding: 0.5rem 0.875rem;
`;

const StyledLogo = styled(Link)`
    border-radius: 5px;
    border: 1px solid #1565c0;
    padding: 0.25rem 0.5rem;
    margin-right: 2rem;
    display: none;
    font-family: monospace;
    font-weight: 700;
    color: inherit;
    font-size: 1.25rem;
    text-decoration: none;
    @media (min-width: 600px) {
        display: flex;
    }
`;

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
    '&.MuiAppBar-root': {
        boxShadow: 'none',
        backdropFilter: 'saturate(200%) blur(1.875rem)',
        backgroundColor: 'transparent',
    },
}));

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ['Features', 'Pricing'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ p: 2 }}>
                SnackNews
            </Typography>
            <Divider />
            <List>
                {/* {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <StyledLink to={item}>{item}</StyledLink>
                    </ListItem>
                ))} */}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <StyledAppBar>
                <Toolbar
                    sx={{ width: '100%', maxWidth: '1444px', margin: 'auto' }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                        }}
                        disableRipple
                        disableElevation
                    >
                        <i>Snack</i>
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText',
                                p: 0.25,
                                px: 1,
                                borderRadius: '5px',
                                ml: 0.75,
                            }}
                        >
                            News
                        </Box>
                    </Button>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            flexGrow: 1,
                        }}
                    >
                        {/* {navItems.map((item) => (
                            <StyledLink key={item} to={item}>
                                {item}
                            </StyledLink>
                        ))} */}
                    </Box>
                </Toolbar>
            </StyledAppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
