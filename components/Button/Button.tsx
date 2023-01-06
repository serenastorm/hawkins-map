import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonType =
  | {
      href: never;
      onClick: () => void;
    }
  | {
      href?: string;
      onClick?: () => void;
    };

type ButtonWithLayoutType = {
  label: string;
  size?: "sm" | "lg";
  variant?: "outline" | "dark" | "light";
} & ButtonType;

export const Button = ({
  href,
  label,
  onClick,
  size = "lg",
  variant = "outline",
}: ButtonWithLayoutType) => {
  const className = `${styles.button} ${styles[size]} ${styles[variant]}`;

  return href ? (
    <Link className={className} href={href} onClick={onClick}>
      {label}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
