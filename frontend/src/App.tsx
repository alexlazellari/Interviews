import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import VisitorLayout from "./layouts/Visitor";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      contrastThreshold: 4.5,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Routes>
            <Route path="*" element={<VisitorLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
