import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Task } from "../../types/types";
import { Box } from "@mui/material";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onDone: (task: Task) => void;
}

export function Task({ task, onDelete, onEdit, onDone }: Props) {
  return (
    <ListItem
      sx={{
        border: "1px solid lightgrey",
        borderRadius: "5px",
        mb: 1,
      }}
      disablePadding
      secondaryAction={
        <Box>
          <IconButton
            edge="end"
            aria-label="edit"
            title="Edit"
            onClick={() => onEdit(task)}
          >
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={() => onDelete(task.id)}
            edge="end"
            aria-label="delete"
            title="Delete"
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      }
    >
      <ListItemButton role={undefined} onClick={() => onDone(task)} dense>
        <ListItemIcon
          sx={{
            minWidth: 0,
          }}
        >
          <Checkbox
            checked={task.done}
            edge="start"
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            sx: {
              fontSize: "1rem",
              fontWeight: "bold",
              mr: 2,
            },
          }}
          primary={task.title}
        />
      </ListItemButton>
    </ListItem>
  );
}
