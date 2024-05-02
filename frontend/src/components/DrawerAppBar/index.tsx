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
    Button,
    ListItem,
} from '@mui/material';
import styled from 'styled-components';
import { Menu } from '@mui/icons-material';

const StyledLink = styled(Link)`
    width: 100%;
    border-radius: 5px;
    padding: 0.5rem 0.875rem;
`;

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
    '&.MuiAppBar-root': {
        boxShadow: 'none',
        backdropFilter: 'saturate(200%) blur(1.875rem)',
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(75, 67, 67, 0.2)',
    },
}));

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Pricing'];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography sx={{ p: 2 }}>SnackNews</Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <Button component={StyledLink} key={item} to={item}>
                            {item}
                        </Button>
                    </ListItem>
                ))}
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
                        sx={{
                            mr: 2,
                            display: { sm: 'none' },
                            color: 'primary.main',
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                        }}
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
                            display: { xs: 'none', sm: 'flex' },
                            marginLeft: 'auto',
                        }}
                    >
                        {navItems.map((item) => (
                            <Button component={StyledLink} key={item} to={item}>
                                {item}
                            </Button>
                        ))}
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
