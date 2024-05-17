import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DrawerAppBar from '../components/DrawerAppBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Visitor() {
    return (
        <Box sx={{ margin: { xs: '1rem' } }}>
            <DrawerAppBar />
            <Box
                component="main"
                sx={{
                    minHeight: 'calc(100vh - 1rem)',
                    maxWidth: '1280px',
                    margin: 'auto',
                }}
            >
                <Toolbar sx={{ height: '5rem' }} />
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}
