import { styled } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";

const StyledFooter = styled(Box)`
  padding: 10px;
  max-height: 64px;
`;

const CenteredTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.breakpoints.up("sm") ? ".875rem" : ".75rem",
}));

export default function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <CenteredTypography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Chemify. All rights reserved.
        </CenteredTypography>
      </Container>
    </StyledFooter>
  );
}
