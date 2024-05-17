import Grid from "@mui/material/Grid";
import viteLogo from "/chemify_logo.png";
import { Box, Toolbar } from "@mui/material";

export default function LandingIntro() {
  return (
    <Box>
      <Toolbar />
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <img src={viteLogo} alt="" width={80} />
        </Grid>
      </Grid>
    </Box>
  );
}
