import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import ButtonRouter from "../../components/ButtonRouter";

interface Props {
  to: string;
  height: string;
}

function NotFound({ to, height }: Props) {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ maxWidth: 350, margin: "auto" }}>
            <img src="../../../404.svg" alt="404" />
          </Box>
        </Box>
        <Card>
          <CardHeader
            titleTypographyProps={{
              sx: {
                fontSize: {
                  xs: "1rem",
                },
                fontWeight: "bold",
                mb: 0.5,
              },
            }}
            title="The page you were looking for doesn't exist."
            subheaderTypographyProps={{
              sx: {
                fontSize: {
                  xs: "0.875rem",
                },
              },
            }}
            subheader="You may have mistyped the address or the page may have moved."
            sx={{ textAlign: "center" }}
          />
          <CardActions sx={{ justifyContent: "center", mb: 1 }}>
            <ButtonRouter to={to} buttonText="Go to Home" />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default NotFound;
