import { Link } from "react-router-dom";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import { useState } from "react";

export default function ContactsPage() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || []; // we need to take the values from localStorage
  const alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

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
            onChange={handleSearchChange}
            type="text"
            placeholder="Search"
            className="contactsForm__searchInput"
            value={searchValue}
          />
        </form>
        {contacts
          .filter((contact) => {
            console.log("contact", contact.firstName, searchValue);
            if (searchValue === "") {
              return true;
            } else {
              const fullName =
                `${contact.firstName} ${contact.lastName}`.toLowerCase();
              return fullName.includes(searchValue.toLowerCase());
            }
          })
          .map(
            (item) =>
              item.id && (
                // If the contact does have an id - redirect to page with id
                <Link
                  to={`/contactPage/${item.id}`}
                  key={item.id}
                  className="link"
                >
                  <ContactInfo
                    contactName={`${item.firstName} ${item.lastName}`}
                  />
                </Link>
              )
          )}
      </div>
      <aside className="sidebar">
        {alphabetArray.map((letter) => (
          <p key={letter} className="sidebar__letter">
            {letter}
          </p>
        ))}
      </aside>
    </>
  );
}
