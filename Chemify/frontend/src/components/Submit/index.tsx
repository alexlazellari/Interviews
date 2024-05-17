import { ButtonProps } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const SubmitButton: React.FC<LoadingButtonProps> = (props) => {
  return <LoadingButton {...props} />;
};

export default SubmitButton;
