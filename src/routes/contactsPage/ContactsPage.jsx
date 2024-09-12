import { Link } from "react-router-dom";
import ContactInfo from "../../components/contactInfo/ContactInfo";

export default function ContactsPage() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || []; // we need to take the values from localStorage

  return (
    <>
      <div className="contactsPage">
        <div className="contactsPageBtnHolder">
          <Link to="/contactBook/">
            <button className="contactsPageBtnHolder__button">
              +
            </button>
          </Link>
        </div>

        <h1 className="contactsPage__title">Contacts</h1>

        <form action="" className="contactsForm">
          <input
            type="text"
            placeholder="Search"
            className="contactsForm__searchInput"
          />
        </form>
        {contacts.map((item) => (
          <Link
            to={`/contactPage/${item.id} `}
            key={item.id}
            className="link"
          >
            <ContactInfo
              contactName={`${item.firstName} ${item.lastName}`}
              key={item.id}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
