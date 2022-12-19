export type ButtonProps = {
  type?: string;
  className?: string;
  disabled?: boolean;
  bgcolor?: string;
  width?: string;
  opacity?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export type TextProps = {
  text?: string;
  align?: string;
  weight?: number;
  size?: number;
  className?: string;
  fontFamily?: string;
  color?: string;
  width?: string;
  cursor?: string;
  marginLeft?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;
