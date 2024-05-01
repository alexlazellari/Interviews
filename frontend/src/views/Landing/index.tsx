import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Landing() {
    return (
        <Box>
            <Box>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            textAlign: 'center',
                            fontSize: {
                                xs: '1.25rem',
                                sm: '1.5rem',
                                md: '2rem',
                                lg: '2.75rem',
                            },
                            fontWeight: {
                                xs: 'bold',
                                sm: 'normal',
                            },
                        }}
                    >
                        Features Designed to Simplify Your Life
                    </Typography>
                    <Divider sx={{ m: 2 }} />
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: {
                                xs: '.75rem',
                                sm: '1rem',
                            },
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </Box>
            </Box>
            <Box id="Pricing" minHeight={'85vh'}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: {
                            xs: '1.25rem',
                            sm: '1.5rem',
                            md: '2rem',
                            lg: '2.75rem',
                        },
                        fontWeight: {
                            xs: 'bold',
                            sm: 'normal',
                        },
                    }}
                >
                    Choose Your Plan
                </Typography>
                <Divider sx={{ m: 2 }} />
                <Typography
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: {
                            xs: '.75rem',
                            sm: '1rem',
                        },
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
        </Box>
    );
}

export default Landing;
