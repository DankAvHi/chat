export type ButtonProps = UIComponentProps &
    React.ComponentPropsWithoutRef<"button"> & {
        type?: "button";
    };

export type AnchorProps = UIComponentProps &
    React.ComponentPropsWithoutRef<"a"> & {
        type: "link";
        external?: boolean;
    };

export type CustomButtonProps = ButtonProps | AnchorProps;
