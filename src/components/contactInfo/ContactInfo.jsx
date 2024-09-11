/* eslint-disable react/prop-types */

export default function ContactInfo({ contactName }) {
  return (
    <div className=" contactInfo">
      <h2 className="contactInfo__Title">
        {contactName}
        {/* {inputsValueData.firstName}&nbsp;
        {inputsValueData.lastName} */}
      </h2>
      {/* <p>{inputsValueData.company}</p>
      <p className="contactInfo__Phone">{inputsValueData.phone}</p>
      <p className="contactInfo__Email">{inputsValueData.email}</p>
      <p className="contactInfo__Address">
        {inputsValueData.address}
      </p>
      <p className="contactInfo__Birthday">
        {inputsValueData.birthday}
      </p> */}
    </div>
  );
}
