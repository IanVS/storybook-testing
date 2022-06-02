import { EventDetails } from "../../atoms/event-details/EventDetails";

type Event = {
  title: string;
  date: Date;
};

type Props = {
  events: Event[];
};

export function EventList({ events }: Props) {
  return events.length ? (
    <ul>
      {events.map((evt) => (
        <EventDetails key={evt.date.toISOString()} {...evt} />
      ))}
    </ul>
  ) : (
    <div>No scheduled events :(</div>
  );
}
