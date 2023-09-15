import Box from "@mui/material/Box";
import { TaskList } from "../../components/TaskList";
import Toolbar from "@mui/material/Toolbar";

function Landing() {
  return (
    <Box>
      <Toolbar />
      <TaskList />
    </Box>
  );
}

export default Landing;
