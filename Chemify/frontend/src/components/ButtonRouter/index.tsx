import { Link as RouterLink } from "react-router-dom";
import Button, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  to: string;
  buttonText: string;
}

export default function ButtonRouter({ to, buttonText, ...props }: Props) {
  return (
    <div>
      <Button variant="text" component={RouterLink} to={to} {...props}>
        {buttonText}
      </Button>
    </div>
  );
}
