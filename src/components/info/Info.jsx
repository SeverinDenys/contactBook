/* eslint-disable react/prop-types */

export default function Info({ inputsValueData, handleInputChange }) {
  return (
    <>
      <div className="inputInfoHolder">
        <input
          name="firstName"
          type="text"
          className="inputInfo inputInfo--firstName"
          placeholder="First name"
          value={inputsValueData.firstName}
          onChange={handleInputChange}
        />

        <input
          name="lastName"
          type="text"
          className="inputInfo inputInfo--lastName"
          placeholder="Last name"
          value={inputsValueData.lastName}
          onChange={handleInputChange}
        />
        <input
          name="company"
          type="text"
          className="inputInfo inputInfo--Company"
          placeholder="Company"
          value={inputsValueData.company}
          onChange={handleInputChange}
        />

        <input
          name="phone"
          type="text"
          className="inputInfo inputInfo--phone"
          placeholder="add phone"
          value={inputsValueData.phone}
          onChange={handleInputChange}
        />

        <input
          name="email"
          type="text"
          className="inputInfo inputInfo--email"
          placeholder="add email"
          value={inputsValueData.email}
          onChange={handleInputChange}
        />

        <input
          name="address"
          type="text"
          className="inputInfo inputInfo--address"
          placeholder="add address"
          value={inputsValueData.address}
          onChange={handleInputChange}
        />

        <input
          name="birthday"
          type="text"
          className="inputInfo inputInfo--birthday"
          placeholder="add birthday"
          value={inputsValueData.birthday}
          onChange={handleInputChange}
        />
      </div>

      {/* <p className="test">input value: {inputValue}</p> just a test*/}
    </>
  );
}
