import { Link } from "react-router-dom";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import { useNavigate } from "react-router-dom";

export default function ContactsPage() {
  const navigate = useNavigate();
  const contacts = JSON.parse(localStorage.getItem("contacts")) || []; // we need to take the values from localStorage

  const redirectToContactPage = () => {
    navigate("/contactPage/");
  };
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
          <ContactInfo
            onClick={() => redirectToContactPage()}
            contactName={`${item.firstName} ${item.lastName}`}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}
