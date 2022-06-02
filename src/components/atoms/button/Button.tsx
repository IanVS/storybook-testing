import cn from "classnames";
import styles from "./button.module.css";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  type = "button",
  backgroundColor,
  label,
  ...props
}: Props) => {
  const mode = primary ? styles.Button___primary : styles.Button___secondary;
  return (
    <button
      type={type}
      className={cn(styles.Button, styles[`Button___${size}`], mode)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
