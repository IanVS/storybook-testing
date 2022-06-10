import type { FormEventHandler } from "react";
import { Input } from "../../atoms/input/Input";
import { Button } from "../../atoms/button/Button";
import { Label } from "../../atoms/label/Label";
import styles from "./EventForm.module.css";
import { ErrorMessage } from "../../atoms/error-message/ErrorMessage";

type Props = {
  onSubmit: (name: string) => void;
  errorMessage?: string;
};

export function EventForm({ onSubmit, errorMessage }: Props) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("eventName");
    if (typeof name === "string") {
      onSubmit(name);
    }
  };

  return (
    <form action="post" onSubmit={handleSubmit} className={styles.EventForm}>
      <Label htmlFor="event-name">Proposed event topic</Label>
      <Input id="event-name" name="eventName" aria-describedby="event-name-error" hasError={Boolean(errorMessage)} />
      {errorMessage && <ErrorMessage id="event-name-error">{errorMessage}</ErrorMessage>}
      <div className={styles.EventForm_button}>
        <Button type="submit" primary={true} label="Submit" />
      </div>
    </form>
  );
}
