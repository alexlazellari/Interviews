import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 11rem)',
                minHeight: '31.25rem',
            }}
            className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative"
        >
            {/* Radial gradient for the container to give a faded look */}
            <Box className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></Box>
            <Typography
                component="h1"
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                    },
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
                gutterBottom
            >
                Welcome to Snack News!
            </Typography>
            <Typography
                component="h2"
                sx={{
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                        md: '3rem',
                    },
                    textAlign: 'center',
                    mb: 3,
                }}
            >
                Your source for the latest in global news
            </Typography>
            <Divider sx={{ width: '100%', mb: 3 }} />
            <Typography
                component="p"
                sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    textAlign: 'center',
                    mb: 3,
                }}
            >
                Stay updated with the latest happenings around the world as they
                unfold.
            </Typography>
            <Button
                component={Link}
                to="/news"
                variant="contained"
                color="primary"
                size="large"
            >
                Get Started
            </Button>
        </Box>
    );
}

export default Landing;
