import { useState } from "react";
import TextInput from "./components/TextInput";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      {firstName} {lastName}
      <TextInput
        name="firstName"
        label="First name"
        value={firstName}
        setValue={setFirstName}
        isError
      />
      <TextInput
        name="lastName"
        label="Last name"
        value={lastName}
        setValue={setLastName}
        isError
      />
    </div>
  );
}

export default App;
