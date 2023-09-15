import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Task as TaskComponent } from "../Task";
import { useEffect, useState } from "react";
import { CreateTaskFormValues, Task } from "../../types/types";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../../services/api.service";
import { Paper, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskDialog from "../TaskDialog";

export function TaskList() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [actionType, setActionType] = useState<"add" | "edit">("add");
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [initialValues, setInitialValues] = useState<CreateTaskFormValues>({
    title: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();

      setTaskList(response.data);
    };

    fetchTasks();

    return () => {
      console.log("TaskList unmounted");
    };
  }, []);

  const handleAddTask = async (title: string) => {
    const result = await createTask(title);
    setTaskList([...taskList, result.data]);
  };

  const handleTaskDialogClose = () => {
    setIsTaskDialogOpen(false);
  };

  const handleAddAction = () => {
    setInitialValues({ title: "" });
    setActionType("add");
    setIsTaskDialogOpen(true);
  };

  const handleEditAction = (task: Task) => {
    setInitialValues({
      title: task.title,
    });
    setCurrentTask(task);
    setActionType("edit");
    setIsTaskDialogOpen(true);
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!taskId) return;
    await deleteTask(taskId);

    const updatedTasksWithChores = taskList.filter(
      (taskWithChore) => taskWithChore.id !== taskId
    );
    setTaskList(updatedTasksWithChores);
  };

  const handleEditTask = async (values: CreateTaskFormValues) => {
    if (!currentTask) return;

    await updateTask(currentTask.id, {
      title: values.title,
    });

    const updatedTasks = taskList.map((task) => {
      if (task.id === currentTask.id) {
        const updatedTaskWithChore = {
          ...task,
          title: values.title,
        };
        // setTask(updatedTaskWithChore);
        return updatedTaskWithChore;
      }
      return task;
    });

    setTaskList(updatedTasks);
  };
  return (
    <Box
      sx={{
        maxWidth: "25rem",
        marginBottom: "3rem",
        marginX: "auto",
      }}
    >
      <Paper
        sx={{
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.125rem", fontWeight: "bold" }}>
          🚀 Let's Get Stuff Done! 🚀
        </Typography>
        <Typography
          sx={{
            fontSize: "0.875rem",
          }}
        >
          Procrastination, who? Add tasks and show 'em who's boss!
        </Typography>

        <Button
          sx={{
            mt: 2,
          }}
          variant="contained"
          onClick={handleAddAction}
        >
          <AddIcon />
        </Button>
      </Paper>
      <List>
        {taskList.map((task) => {
          return (
            <TaskComponent
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onEdit={handleEditAction}
            />
          );
        })}
      </List>
      <TaskDialog
        open={isTaskDialogOpen}
        onClose={handleTaskDialogClose}
        actionType={actionType}
        initialValues={initialValues}
        onSubmit={actionType == "add" ? handleAddTask : handleEditTask}
      />
    </Box>
  );
}
