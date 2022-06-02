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
      <Label>Proposed event topic</Label>
      <Input name="eventName" hasError={Boolean(errorMessage)} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <div className={styles.EventForm_button}>
        <Button type="submit" primary={true} label="Submit" />
      </div>
    </form>
  );
}
