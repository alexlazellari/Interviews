import { styled } from '@mui/system';
import { Box, Container, Link, Typography } from '@mui/material';

const StyledFooter = styled(Box)`
    padding: 0.5rem;
    margin-top: 4rem;
    max-height: 64px;
`;

const CenteredTypography = styled(Typography)`
    text-align: right;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <CenteredTypography
                    variant="body1"
                    sx={{
                        fontSize: {
                            xs: '.875rem',
                            sm: '1rem',
                        },
                    }}
                >
                    <Link href="/#">Privacy Policy</Link> {' | '}
                    <Link href="/#">Terms of Service</Link> {' | '}
                    <Link href="/#">Contact Us</Link>
                </CenteredTypography>
                <CenteredTypography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontSize: {
                            xs: '.75rem',
                            sm: '.875rem',
                        },
                    }}
                >
                    © {new Date().getFullYear()} SnackNews. All rights
                    reserved.
                </CenteredTypography>
            </Container>
        </StyledFooter>
    );
}
