import cn from "classnames";
import styles from "./Input.module.css";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  className?: string;
  /** Is there a problem with this field? */
  hasError?: boolean;
};

/**
 * Used to collect short user input.
 */
export const Input = ({ hasError, className, ...htmlProps }: Props) => {
  const classes = cn("border-focusable", styles.Input, className, {
    "has-error": hasError,
  });

  return <input className={classes} aria-invalid={hasError} {...htmlProps} />;
};
