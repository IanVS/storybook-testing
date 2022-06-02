import { useState } from "react";
import { EventForm } from "../../components/molecules/event-form/EventForm";
import { EventList } from "../../components/molecules/event-list/EventList";
import logo from "./SEMjs.jpeg";
import "./App.css";

function App() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [successMessage, setSuccessMessage] = useState<string | undefined>(undefined);

  function handleSuggestEvent(name: string) {
    if (name.length < 3) {
      setSuccessMessage(undefined);
      setErrorMessage("Can we have some more detail?");
    } else {
      setErrorMessage(undefined);
      setSuccessMessage(`Thanks for suggesting "${name}"`);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} />
        <h1>Hello SEM.js!</h1>
        {successMessage && <span role="alert">{successMessage}</span>}
      </header>
      <div className="App-body">
        <div className="App-event-list">
          <h2>Upcoming events</h2>
          <EventList events={[]} />
        </div>
        <div className="App-suggest">
          <h2>Suggest an event</h2>
          <EventForm onSubmit={handleSuggestEvent} errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
