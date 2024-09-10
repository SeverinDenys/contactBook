import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(
    /[018]/g,
    (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (+c / 4)))
      ).toString(16)
  );
}

const defaultInputValues = {
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
  address: "",
  birthday: "",
};
function App() {
  const [inputsValueData, setInputsValueData] = useState(
    defaultInputValues
  );

  const [contacts, setContacts] = useState([]);

  // update specific field in the object based on input name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsValueData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  const onContactSave = () => {
    const newObject = {
      ...inputsValueData,
      id: uuidv4(),
    };
    setContacts([newObject, ...contacts]);
    setInputsValueData(defaultInputValues);
  };

  const onContactCancel = () => {
    setInputsValueData(defaultInputValues);
  };

  return (
    <>
      <Navbar
        onContactSave={onContactSave}
        onContactCancel={onContactCancel}
        contacts={contacts}
      />
      <Info
        inputsValueData={inputsValueData}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default App;
