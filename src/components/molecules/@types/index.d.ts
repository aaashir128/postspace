export type ModalProps = {
  show?: boolean;
  handleClose?: string;
  className?: string;
  title?: string;
  icon?: string;
  buttonDisable?: boolean;
  buttonLabel?: string;
  disabled?: boolean;
  titleSize?: Number;
  headerTitle?: boolean;
  headerClose?: boolean;
  CloseImg?: boolean;
  buttonStyle?: string;
  modalWidth?: string;
  modalFooter?: string;
  modalBodyClassName?: string;
  onClick?: string;
} & React.HTMLAttributes<HTMLBodyElement>;
