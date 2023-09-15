import Box from "@mui/material/Box";
import { TaskList } from "../../components/TaskList";
import Toolbar from "@mui/material/Toolbar";

function Landing() {
  return (
    <Box>
      <Box>
        <Toolbar />
        <TaskList />
      </Box>
    </Box>
  );
}

export default Landing;
