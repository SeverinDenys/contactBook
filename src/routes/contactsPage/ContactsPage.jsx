import { Link, useLocation } from "react-router-dom";
import ContactInfo from "../../components/contactInfo/ContactInfo";

export default function ContactsPage() {
  const location = useLocation();
  const contacts = location.state.contacts;
  return (
    <>
      <div className="contactsPage">
        <div className="contactsPageBtnHolder">
          <Link to="/contactBook">
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
          <ContactInfo inputsValueData={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
