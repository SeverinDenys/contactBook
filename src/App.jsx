import Info from "./components/Info/Info";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
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

 const navigate = useNavigate(); 

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

    // 1 go to localstorage and take everything by key=contacts, save it into const contacts
    const existingContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];
    // 2 - reminder. In localStorage everything is stored as strings.
    // 3 - create a new array with changes
    //   [newObject, ...contacts] ;
    const updatedContacts = [newObject, ...existingContacts];
    // 4 - we save this new array into localstorage back by key = contacts
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    // 5 - make redirect to the contacts page

    setInputsValueData(defaultInputValues);
    navigate("/");
  };

  const onContactCancel = () => {
    // setInputsValueData(defaultInputValues);
    // todo
    // redirect to the main page
    navigate("/");
  };

  return (
    <>
      <Navbar
        onContactSave={onContactSave}
        onContactCancel={onContactCancel}
      />
      <Info
        inputsValueData={inputsValueData}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default App;
