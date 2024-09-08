/* eslint-disable react/prop-types */

export default function ContactInfo({ inputsValueData }) {
  return (
    <div className=" contactInfo">
      <h2 className="contactInfo__Title">
        {inputsValueData.firstName}
        {inputsValueData.lastName}
      </h2>
      <p>{inputsValueData.company}</p>
      <p className="contactInfo__Phone">{inputsValueData.phone}</p>
      <p className="contactInfo__Email">{inputsValueData.email}</p>
    </div>
  );
}
