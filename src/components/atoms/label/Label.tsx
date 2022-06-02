import cn from "classnames";

type Props = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * This component can be used just like a normal html <label> element.
 * It is a react component only to ensure consistent styling
 */
export const Label = ({ children, className, ...htmlProps }: Props) => {
  return (
    <label className={cn("label", className)} {...htmlProps}>
      {children}
    </label>
  );
};
