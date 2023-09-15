import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import DrawerAppBar from "../components/DrawerAppBar";
import NotFound from "../views/NotFound";
import Landing from "../views/Landing";

export default function VisitorLayout() {
  return (
    <Box
      sx={{
        margin: {
          xs: "1rem",
        },
      }}
    >
      <DrawerAppBar />
      <Box
        component="main"
        sx={{
          maxWidth: "1280px",
          margin: "auto",
        }}
      >
        <Routes>
          <Route index element={<Landing />} />
          <Route
            path="*"
            element={<NotFound to="/" height="calc(100vh - 144px)" />}
          />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
