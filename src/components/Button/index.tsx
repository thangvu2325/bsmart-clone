import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonCustomProps
  extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  text?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  type?: string;
}

const cx = classNames.bind(styles);

function ButtonCustom({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  medium = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  className,
  children,
  leftIcon,
  rightIcon,
  type,
  onClick,
  ...passProps
}: ButtonCustomProps) {
  let Comp: React.ElementType = "button";
  const props: any = { onClick, ...passProps };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    text,
    medium,
    rounded,
    large,
    disabled,
    [className!]: className,
  });

  return (
    <>
      {Comp === "button" ? (
        <button className={classes} {...props} type={type}>
          <span className={cx("btn-title")}>{children}</span>
        </button>
      ) : (
        <Comp className={classes} {...props}>
          <span className={cx("btn-title")}>{children}</span>
        </Comp>
      )}
    </>
  );
}

export default ButtonCustom;
