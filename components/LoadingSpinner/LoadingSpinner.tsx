import styles from "./LoadingSpinner.module.scss";

type LoadingSpinnerProps = {};

export const LoadingSpinner = ({}: LoadingSpinnerProps) => {
  return (
    <div className={styles.loadingSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
