import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import TaskForm from "../TaskForm";
import { CreateTaskFormValues } from "../../types/types";

type actionType = "add" | "edit";

interface Actions {
  add: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
  edit: {
    title: string;
    subtitle: string;
    buttonLabel: string;
  };
}

const actions: Actions = {
  add: {
    title: "Add Task",
    subtitle: "Organize Your Tasks with Ease",
    buttonLabel: "Create",
  },
  edit: {
    title: "Edit Task",
    subtitle: "Edit your Task",
    buttonLabel: "Update",
  },
};

interface Props {
  open: boolean;
  onClose: () => void;
  actionType: actionType;
  initialValues: CreateTaskFormValues;
  onSubmit: (values: CreateTaskFormValues) => Promise<void>;
}

export default function TaskDialog({
  open,
  onClose,
  actionType,
  initialValues,
  onSubmit,
}: Props) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        sx={{ textAlign: "center" }}
        onClose={onClose}
      >
        <DialogTitle>{actions[actionType].title}</DialogTitle>
        <Typography>{actions[actionType].subtitle}</Typography>
        <DialogContent>
          <TaskForm
            onFormSubmit={onSubmit}
            buttonLabel={actions[actionType].buttonLabel}
            initialValues={initialValues}
            actionType={actionType}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
