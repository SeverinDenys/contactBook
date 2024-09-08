import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import ContactInfo from "./components/contactInfo/ContactInfo";
import { useState } from "react";

function App() {
  const [inputsValueData, setInputsValueData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
  });

 

  // update specific field in the object based on input name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsValueData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar inputsValueData={inputsValueData} />
      <Info
        inputsValueData={inputsValueData}
        handleInputChange={handleInputChange}
      />
      <ContactInfo inputsValueData={inputsValueData} />
    </>
  );
}

export default App;
