/* eslint-disable react/prop-types */

export default function ContactInfo({ contactName }) {
  return (
    <div className=" contactInfo">
      <h2 className="contactInfo__Title">
        {contactName}
         
      </h2>
      
    </div>
  );
}
