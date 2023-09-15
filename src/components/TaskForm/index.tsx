import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers, useField, FieldAttributes } from "formik";
import * as Yup from "yup";
import SubmitButton from "../Submit";
import { CreateTaskFormValues } from "../../types/types";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
});

// Custom Field component for TextField
const MyTextField: React.FC<any> = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      label={label}
      type={type}
      value={field.value || ""}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      margin="dense"
      fullWidth
    />
  );
};

interface Props {
  onFormSubmit: (values: CreateTaskFormValues) => Promise<void>;
  buttonLabel: string;
  initialValues: CreateTaskFormValues;
  actionType: "add" | "edit";
}

export default function TaskForm({
  onFormSubmit,
  buttonLabel,
  initialValues,
  actionType,
}: Props) {
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleSubmit = async (
    values: CreateTaskFormValues,
    { setSubmitting, resetForm }: FormikHelpers<CreateTaskFormValues>
  ) => {
    return onFormSubmit(values)
      .then(() => {
        if (actionType === "add") {
          resetForm();
          setSubmitStatus("Task created!");
        } else {
          setSubmitStatus("Task updated!");
        }
      })
      .catch((error) => {
        console.error(error);
        setSubmitStatus(`Error submitting form: ${error.message}`);
      })
      .finally(() => {
        setTimeout(() => setSubmitStatus(""), 2500);
        setSubmitting(false);
      });
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <MyTextField name="title" label="Title" />
            <Typography
              variant="body1"
              mb={0.5}
              color={submitStatus.includes("Error") ? "error" : "success"}
            >
              {submitStatus || "\u00A0"}
            </Typography>
            <SubmitButton
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {buttonLabel}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
