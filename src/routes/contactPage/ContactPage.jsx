import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const getContact = (id) => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contact = contacts.find((element) => {
    // console.log("element", element);
    return element.id === id;
  });
  return contact;
};

export default function ContactPage() {
  let { id } = useParams(); // it gets the id!! // read about it

  const navigate = useNavigate();

  const redirectToContactsPage = () => {
    navigate("/");
  };

  const redirectToInfoPage = () => {
    navigate(`/contactBook/${id}`, {state: {contact}});
  };

  const [contact] = useState(getContact(id));
  useEffect(() => {
    if (!contact) {
      navigate("/");
    }
  }, []);
  if (!contact) {
    // what will be rendered in UI
    return null;
  }

  return (
    <div className="contactPage">
      <div className="contactPageHolder">
        <div className="contactPageBtnHolder">
          <button
            className="contactPageBtnHolder__button"
            onClick={redirectToContactsPage}
          >
            &lt;
          </button>

          <button
            className="contactPageBtnHolder__button"
            onClick={redirectToInfoPage}
          >
            Edit
          </button>
        </div>

        <h1 className="contactPage__title">
          {contact.firstName} {contact.lastName}
        </h1>
      </div>
      {contact.phone && (
        <p className="contactPage__Phone"> {contact.phone}</p>
      )}

      {contact.email && (
        <p className="contactPage__Email"> {contact.email}</p>
      )}

      {contact.address && (
        <p className="contactPage__Address">{contact.address}</p>
      )}

      {contact.birthday && (
        <p className="contactPage__Birthday">{contact.birthday}</p>
      )}
    </div>
  );
}
