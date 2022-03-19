import {
  Alert,
  AlertColor,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
  message?: string;
  severity?: AlertColor;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  severity,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <DialogContent>
        <DialogContentText>
          <Alert severity={severity}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {message && message}
          </Alert>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
