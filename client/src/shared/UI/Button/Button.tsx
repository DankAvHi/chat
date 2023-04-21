import { Link } from "react-router-dom";
import { CustomButtonProps } from "./ButtonTypes";

export const Button = (props: CustomButtonProps) => {
  if (props.type === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type: _, external, ...anchorProps } = props;
    const { children, disabled, href } = anchorProps;

    if (disabled) {
      return <button disabled={true}>{children}</button>;
    } else {
      return external ? (
        <a {...anchorProps}>{children}</a>
      ) : (
        <Link {...anchorProps} to={href || "#"}>
          {children}
        </Link>
      );
    }
  }

  const { children } = props;
  return <button {...props}>{children}</button>;
};
