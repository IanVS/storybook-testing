import cn from "classnames";
import styles from "./ErrorMessage.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  /** By default, we add role='alert' for accessibility.  Set to false to disable */
  shouldAlert?: boolean;
  id?: string;
};

/**
 * Use this component in forms to show validation error messages.
 */
export function ErrorMessage({ children, className, id, shouldAlert = true }: Props) {
  return (
    <div id={id} className={cn(styles.ErrorMessage, className)} role={shouldAlert ? "alert" : undefined}>
      {children}
    </div>
  );
}
