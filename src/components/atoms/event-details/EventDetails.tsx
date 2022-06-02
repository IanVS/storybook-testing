import styles from "./EventDetails.module.css";

type Props = {
  title: string;
  date: Date;
};

export function EventDetails({ title, date }: Props) {
  return (
    <li className={styles.EventDetails}>
      {date.toLocaleDateString(undefined, { day: "2-digit", month: "2-digit", year: "numeric" })} -{" "}
      <span className={styles.EventDetails_title}>{title}</span>
    </li>
  );
}
